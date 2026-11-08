$ErrorActionPreference = 'Stop'
$workspace = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$ledger = Get-Content -LiteralPath (Join-Path $workspace '.hi3d/dreams-package-list.json') -Raw -Encoding UTF8 | ConvertFrom-Json
$project = [IO.Path]::GetFullPath((Join-Path $workspace $ledger.root))
$destination = [IO.Path]::GetFullPath((Join-Path $workspace $ledger.target))
if (-not $project.StartsWith($workspace + '\') -or -not $destination.StartsWith($workspace + '\')) { throw 'Package path outside workspace' }
if (Test-Path -LiteralPath $destination) { throw 'Existing ZIP preserved; choose a new output path' }
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
$archive = [IO.Compression.ZipFile]::Open($destination, [IO.Compression.ZipArchiveMode]::Create)
try {
  foreach ($relative in $ledger.files) {
    $source = [IO.Path]::GetFullPath((Join-Path $project $relative))
    if (-not $source.StartsWith($project + '\')) { throw 'Invalid package entry' }
    $null = [IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $source, $relative, [IO.Compression.CompressionLevel]::Optimal)
  }
} finally { $archive.Dispose() }
$check = [IO.Compression.ZipFile]::OpenRead($destination)
try {
  if ($check.Entries.Count -ne $ledger.files.Count) { throw 'ZIP entry count mismatch' }
  foreach ($relative in $ledger.files) {
    $entry = $check.GetEntry($relative)
    $source = Get-Item -LiteralPath (Join-Path $project $relative)
    if ($null -eq $entry -or $entry.Length -ne $source.Length) { throw ('ZIP entry mismatch: ' + $relative) }
  }
  [pscustomobject]@{Status='passed';File=$ledger.target;Entries=$check.Entries.Count;Bytes=(Get-Item -LiteralPath $destination).Length} | ConvertTo-Json -Compress
} finally { $check.Dispose() }

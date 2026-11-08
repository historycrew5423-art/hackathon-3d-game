// Bundle the Baihuling scene (three r187) into exports/frog-dreams/baihuling/hi3d-baihuling.js
const path=require('node:path');const esbuild=require(path.join(__dirname,'..','.hi3d','web-tools','node_modules','esbuild'));
const P=path.join(__dirname,'..','exports','frog-dreams'),V=path.join(P,'vendor_src');
const alias={name:'alias',setup(b){
 b.onResolve({filter:/^three$/},()=>({path:path.join(V,'three.module.js')}));
 b.onResolve({filter:/^three\/addons\//},a=>({path:path.join(V,'three-addons',a.path.slice(13))}));
 b.onResolve({filter:/^meshoptimizer\/decoder$/},()=>({path:path.join(V,'meshoptimizer','meshopt_decoder.mjs')}));
 b.onResolve({filter:/^meshoptimizer\/simplifier$/},()=>({path:path.join(V,'meshoptimizer','meshopt_simplifier.js')}));
 b.onResolve({filter:/^inline-worker:/},a=>({path:path.resolve(a.resolveDir,a.path.slice(14)),namespace:'iw'}));
 b.onLoad({filter:/.*/,namespace:'iw'},async a=>{const r=await esbuild.build({entryPoints:[a.path],bundle:true,write:false,format:'iife',minify:true,target:'es2022',plugins:[alias]});return {contents:'export default '+JSON.stringify(r.outputFiles[0].text),loader:'js'};});
}};
esbuild.build({entryPoints:[path.join(V,'baihuling','src','hi3d-embed.js')],bundle:true,format:'iife',minify:true,target:'es2022',outfile:path.join(P,'baihuling','hi3d-baihuling.js'),plugins:[alias],logLevel:'warning'}).then(()=>console.log('built')).catch(e=>{console.error(e);process.exit(1);});

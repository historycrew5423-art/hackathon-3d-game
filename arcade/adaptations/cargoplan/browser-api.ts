import { DEFAULT_CONFIG } from './core/optimizer'
import { validateRequest } from './core/input-validation'
import demo from '../data/demo-items.json'

const jobs = new Map<string, { status: string; progress: unknown; solutions?: unknown; error?: string; worker?: Worker; timer?: ReturnType<typeof setTimeout> }>()

export async function browserRequest<T>(url: string, options?: RequestInit): Promise<T> {
  options?.signal?.throwIfAborted()
  if (url === '/api/config') return { success: true, config: DEFAULT_CONFIG } as T
  if (url === '/api/load-demo') return { success: true, data: structuredClone(demo) } as T
  if (url === '/api/optimize') {
    if ([...jobs.values()].some(j => j.status === 'running')) throw new Error('已有任务正在运行')
    const input = JSON.parse(String(options?.body))
    const { config } = validateRequest(input)
    const id = crypto.randomUUID()
    const worker = new Worker(new URL('./browser-worker.ts', import.meta.url), { type: 'module' })
    const job = { status: 'running', progress: { progress: 0, message: '浏览器内计算中', algorithm: '' }, worker } as NonNullable<ReturnType<typeof jobs.get>>
    jobs.set(id, job)
    // Retain only the latest five finished results in this browser tab.
    const finished = [...jobs.entries()].filter(([, j]) => j.status !== 'running')
    finished.slice(0, Math.max(0, finished.length - 5)).forEach(([key]) => jobs.delete(key))
    const finish = () => { clearTimeout(job.timer); worker.terminate(); delete job.worker }
    worker.onmessage = ({ data }) => {
      if (data.type === 'progress') job.progress = data.data
      else {
        job.status = data.type === 'complete' ? 'completed' : 'failed'
        job.solutions = data.solutions
        job.error = data.error
        job.progress = { progress: 100, message: '优化及约束校验完成', algorithm: '' }
        finish()
      }
    }
    worker.onerror = (event) => { job.status = 'failed'; job.error = event.message; finish() }
    job.timer = setTimeout(() => { job.status = 'failed'; job.error = '计算超时，请减少货物或调整时间预算'; finish() }, (config.timeLimit ?? 30000) + 15000)
    worker.postMessage(input)
    return { success: true, jobId: id } as T
  }
  const id = url.split('/api/jobs/')[1]
  const job = jobs.get(id)
  if (!job) throw new Error('任务不存在或已过期')
  if (options?.method === 'DELETE' && job.status === 'running') {
    job.worker?.terminate(); clearTimeout(job.timer); delete job.worker; job.status = 'cancelled'
  }
  const { worker: _worker, timer: _timer, ...result } = job
  return { success: true, ...result } as T
}

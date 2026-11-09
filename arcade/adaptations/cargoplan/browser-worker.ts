import { optimize, optimizeMultiple } from './core/optimizer'
import { validateSolution } from './core/validation'
import { validateRequest } from './core/input-validation'

self.onmessage = async ({ data }) => {
  try {
    const { items, config, compare } = validateRequest(data)
    const progress = (data: unknown) => self.postMessage({ type: 'progress', data })
    const solutions = compare ? await optimizeMultiple(items, config, progress) : [optimize(items, config)]
    for (const solution of solutions) {
      solution.validation = validateSolution(solution, items, config)
      if (!solution.validation.valid) throw new Error(solution.validation.errors.slice(0, 3).join('；'))
    }
    self.postMessage({ type: 'complete', solutions })
  } catch (error) {
    self.postMessage({ type: 'failed', error: error instanceof Error ? error.message : '优化失败' })
  }
}

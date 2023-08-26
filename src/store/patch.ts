import type { Action } from '@/interface'
import { useStore } from './store'

export type Patch = (action: Action) => void

export const patch: Patch = (action) => {
  const store = useStore()
  return store.$patch((state) => action({ patch, state }))
}

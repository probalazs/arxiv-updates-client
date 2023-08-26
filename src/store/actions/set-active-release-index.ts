import { type State } from '@/interface'

export type SetActiveReleaseIndex = (releaseIndex: number) => (state: State) => void

export const setActiveReleaseIndex: SetActiveReleaseIndex = (releaseIndex) => (state) => {
  state.activeReleaseIndex = releaseIndex
}

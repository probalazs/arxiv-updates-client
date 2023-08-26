import { type Action } from '@/interface'

export type SetActiveReleaseIndex = (releaseIndex: number) => Action

export const setActiveReleaseIndex: SetActiveReleaseIndex =
  (releaseIndex) =>
  ({ state }) => {
    state.activeReleaseIndex = releaseIndex
  }

import { type State } from '@/interface'

export type ToggleReleases = (state: State) => void

export const toggleReleases: ToggleReleases = (state) => {
  state.releasesVisible = !state.releasesVisible
}

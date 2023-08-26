import { type Action } from '@/interface'

export type ToggleReleases = Action

export const toggleReleases: ToggleReleases = ({ state }) => {
  state.releasesVisible = !state.releasesVisible
}

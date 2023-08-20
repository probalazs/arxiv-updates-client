import { Status, type State } from '@/interface'

export type ReleasesLoading = (state: State) => boolean

export const releasesLoading: ReleasesLoading = (state) => state.releases.status === Status.LOADING

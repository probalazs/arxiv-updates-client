import { Status, type State } from '@/interface'

export type PapersLoading = (state: State) => boolean

export const papersLoading: PapersLoading = (state) => state.papers.status === Status.LOADING

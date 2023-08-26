import { type State } from '@/interface'

export type FilterPapers = (paperFilter: string) => (state: State) => void

export const filterPapers: FilterPapers = (paperFilter) => (state) => {
  state.papersFilter = paperFilter
}

import { type Action } from '@/interface'

export type FilterPapers = (paperFilter: string) => Action

export const filterPapers: FilterPapers =
  (paperFilter) =>
  ({ state }) => {
    state.papersFilter = paperFilter
  }

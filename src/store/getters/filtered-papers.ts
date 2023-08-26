import { Status, type State, type Paper, type LoadedPapers } from '@/interface'
import { ifElse, join, map, pipe, split } from 'ramda'
import escapeStringRegexp from 'escape-string-regexp'

export type FilteredPapers = (state: State) => Paper[]

export const filteredPapers: FilteredPapers = (state) => {
  return ifElse<[State], Paper[], Paper[]>(
    (state) => state.papers.status !== Status.SUCCESS,
    () => [],
    (state) => getPapers((state.papers as LoadedPapers).papers, state.papersFilter)
  )(state)
}

function getPapers(papers: Paper[], paperFilter: string): Paper[] {
  const pattern = createPattern(paperFilter)
  return papers.filter((paper) => pattern.test(`${paper.title} ${paper.summary}`))
}

function createPattern(paperFilter: string): RegExp {
  return pipe(
    split(''),
    map(escapeStringRegexp),
    join('.*'),
    (pattern) => new RegExp(pattern, 'i')
  )(paperFilter)
}

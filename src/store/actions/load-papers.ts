import { Status, type State, type Release, type Paper } from '@/interface'
import { isEmpty, map, replace } from 'ramda'

export type LoadPapers = (release: Release) => (state: State) => void

export const loadPapers: LoadPapers = (release) => (state) => {
  state.papersFilter = ''
  state.papers = { status: Status.LOADING }
  fetch(`https://storage.googleapis.com/arxiv-updates-releases/${release.filename}`)
    .then((response) => response.json())
    .then(getPapers)
    .then((papers) => {
      state.papers = {
        status: Status.SUCCESS,
        papers,
        empty: isEmpty(papers)
      }
    })
}

function getPapers(respone: any): Paper[] {
  return map(
    (paper: any) => ({ ...paper, pdf: replace(/^(.*)\/abs\/(.*)/, '$1/pdf/$2.pdf', paper.link) }),
    respone.papers
  ) as Paper[]
}

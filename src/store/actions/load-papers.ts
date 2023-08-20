import { Status, type State, type Release } from '@/interface'
import { isEmpty } from 'ramda'

export type LoadPapers = (release: Release) => (state: State) => void

export const loadPapers: LoadPapers = (release) => (state) => {
  state.papers = { status: Status.LOADING }
  fetch(`https://storage.googleapis.com/arxiv-updates-releases/${release.filename}`)
    .then((response) => response.json())
    .then((data) => {
      state.papers = {
        status: Status.SUCCESS,
        papers: data.papers,
        empty: isEmpty(data.papers)
      }
    })
}

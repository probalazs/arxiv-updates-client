import { Status, type State, type Release } from '@/interface'
import { XMLParser } from 'fast-xml-parser'
import { isEmpty, map, path, pipe, prop, slice, sort } from 'ramda'

export type Init = (state: State) => void

type XML = {
  ListBucketResult: {
    Contents: Array<{ Key: string }>
  }
}

export const init: Init = (state) => {
  fetch('https://storage.googleapis.com/arxiv-updates-releases')
    .then((response) => response.text())
    .then((data) => new XMLParser().parse(data))
    .then(getFilReleases)
    .then((releases) => {
      state.releases = { status: Status.SUCCESS, releases }
      return releases[0]
    })
    .then((release) =>
      fetch(`https://storage.googleapis.com/arxiv-updates-releases/${release.filename}`)
    )
    .then((response) => response.json())
    .then((data) => {
      state.papers = {
        status: Status.SUCCESS,
        papers: data.papers,
        empty: isEmpty(data.papers)
      }
    })
}

function getFilReleases(xml: XML): Release[] {
  return pipe(
    path(['ListBucketResult', 'Contents']),
    (map as any)(prop('Key')),
    map((filename: string) => ({
      filename,
      date: getReleaseDate(filename)
    })),
    sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1))
  )(xml)
}

function getReleaseDate(filename: string): string {
  return pipe(slice(0, -5), atob, JSON.parse, prop('updated'), slice(0, 10))(filename)
}

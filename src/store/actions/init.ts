import { Status, type Release, type Action } from '@/interface'
import { XMLParser } from 'fast-xml-parser'
import { map, path, pipe, prop, slice, sort } from 'ramda'
import { loadPapers } from '.'

export type Init = Action

type XML = {
  ListBucketResult: {
    Contents: Array<{ Key: string }>
  }
}

export const init: Init = ({ patch, state }) => {
  fetch('https://storage.googleapis.com/arxiv-updates-releases')
    .then((response) => response.text())
    .then((data) => new XMLParser().parse(data))
    .then(getFilReleases)
    .then((releases) => {
      state.releases = { status: Status.SUCCESS, releases }
      state.activeReleaseIndex = 0
      patch(loadPapers(releases[0]))
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

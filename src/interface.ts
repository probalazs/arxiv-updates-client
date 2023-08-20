export type State = {
  releases: Releases
  papers: Papers
}

export enum Status {
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export type Release = {
  filename: string
  date: string
}

export type LoadedReleases = {
  status: Status.SUCCESS
  releases: Release[]
}

export type LoadingReleases = {
  status: Status.LOADING
}

export type Releases = LoadedReleases | LoadingReleases

export type Paper = {
  title: string
  summary: string
  link: string
}

export type LoadedPapers = {
  status: Status.SUCCESS
  papers: Paper[]
  empty: boolean
}

export type LoadingPapers = {
  status: Status.LOADING
}

export type Papers = LoadedPapers | LoadingPapers

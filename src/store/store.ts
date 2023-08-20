import { Status, type State } from '@/interface'
import { defineStore } from 'pinia'
import { papersLoading, releasesLoading } from './getters'

export const useStore = defineStore('app', {
  state: () =>
    ({
      releases: { status: Status.LOADING },
      papers: { status: Status.LOADING }
    }) as State,
  getters: {
    releasesLoading,
    papersLoading
  }
})

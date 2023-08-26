import { Status, type State } from '@/interface'
import { defineStore } from 'pinia'
import { filteredPapers, papersLoading, releasesLoading } from './getters'

export const useStore = defineStore('app', {
  state: () =>
    ({
      releasesVisible: true,
      activeReleaseIndex: 0,
      releases: { status: Status.LOADING },
      papers: { status: Status.LOADING },
      papersFilter: '',
      papersFiltering: false
    }) as State,
  getters: {
    releasesLoading,
    papersLoading,
    filteredPapers
  }
})

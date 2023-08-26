<script setup lang="ts">
import LoadingProgess from './LoadingProgress.vue'
import { useStore } from '../store/store'
import type { LoadedReleases, Release } from '@/interface'
import { loadPapers } from '@/store/actions/load-papers'
import { setActiveReleaseIndex } from '@/store/actions'

const store = useStore()

function releaseOnClick(release: Release, releaseIndex: number) {
  store.$patch(loadPapers(release))
  store.$patch(setActiveReleaseIndex(releaseIndex))
}
</script>

<template>
  <v-navigation-drawer>
    <LoadingProgess v-if="store.releasesLoading" />
    <v-list v-else>
      <v-list-item
        v-for="(item, index) in (store.releases as LoadedReleases).releases"
        @click="releaseOnClick(item, index)"
        :key="index"
        :link="true"
        :active="index === store.activeReleaseIndex"
      >
        <v-list-item-title>{{ item.date }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

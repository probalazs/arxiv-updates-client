<script setup lang="ts">
import LoadingProgess from './LoadingProgress.vue'
import { useStore } from '../store/store'
import type { LoadedReleases, Release } from '@/interface'
import { loadPapers } from '@/store/actions/load-papers'

const store = useStore()

function releaseOnClick(release: Release) {
  store.$patch(loadPapers(release))
}
</script>

<template>
  <v-navigation-drawer>
    <LoadingProgess v-if="store.releasesLoading" />
    <v-list v-else>
      <v-list-item
        v-for="(item, index) in (store.releases as LoadedReleases).releases"
        :key="index"
      >
        <v-list-item-title @click="releaseOnClick(item)">{{ item.date }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

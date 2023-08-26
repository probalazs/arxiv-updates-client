<script setup lang="ts">
import ReleaseDates from './components/ReleaseDates.vue'
import WhitePapers from './components/WhitePapers.vue'
import TopBar from './components/TopBar.vue'
import { onMounted } from 'vue'
import { init, useStore } from './store'

const store = useStore()

onMounted(() => {
  store.$patch(init)
})
</script>

<template>
  <v-layout class="rounded rounded-md">
    <ReleaseDates v-model="store.releasesVisible" />
    <TopBar />

    <v-main class="d-flex align-center justify-center">
      <WhitePapers />
    </v-main>
  </v-layout>
</template>

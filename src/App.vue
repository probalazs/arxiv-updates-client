<script setup lang="ts">
import { ref } from 'vue'

import ReleaseDates from './components/ReleaseDates.vue'
import WhitePapers from './components/WhitePapers.vue'
import { onMounted } from 'vue'
import { init, useStore } from './store'

const store = useStore()

const drawer = ref(true)

onMounted(() => {
  store.$patch(init)
})
</script>

<template>
  <v-layout class="rounded rounded-md">
    <ReleaseDates v-model="drawer" />

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Arxiv Updates</v-app-bar-title>
    </v-app-bar>

    <v-main class="d-flex align-center justify-center">
      <WhitePapers />
    </v-main>
  </v-layout>
</template>

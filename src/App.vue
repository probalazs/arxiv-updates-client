<script setup lang="ts">
import { ref } from 'vue'

import ReleaseDates from './components/ReleaseDates.vue'
import WhitePapers from './components/WhitePapers.vue'

const drawer = ref(true)
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

<script setup lang="ts">
import LoadingProgress from './LoadingProgress.vue'
import { useStore } from '../store/store'
import type { LoadedPapers } from '@/interface'

const store = useStore()
</script>

<template>
  <LoadingProgress v-if="store.papersLoading" />
  <v-container v-else>
    <v-row>
      <v-col cols="12">
        <v-alert v-if="(store.papers as LoadedPapers).empty" text="No papers found"></v-alert>
        <v-alert v-else :text="`Number of papers: ${store.filteredPapers.length}`"></v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(paper, index) in store.filteredPapers" :key="index" cols="12">
        <v-card>
          <v-card-title>#{{ index + 1 }} | {{ paper.title }}</v-card-title>
          <v-card-text><span v-html="paper.summary"></span></v-card-text>
          <v-card-actions>
            <v-btn :href="paper.link" target="_blank">Read more</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

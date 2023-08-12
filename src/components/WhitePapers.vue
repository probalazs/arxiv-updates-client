<script setup lang="ts">
import { ref } from 'vue'

const whitePapers = ref([
  {
    title: 'Release #1',
    text: 'This is a release'
  },
  {
    title: 'Release #2',
    text: 'This is a release'
  },
  {
    title: 'Release #3',
    text: 'This is a release'
  },
  {
    title: 'Release #4',
    text: 'This is a release'
  }
])
</script>

<template>
  <v-container>
    <v-row>
      <v-col v-for="(paper, index) in whitePapers" :key="index" cols="12" md="6" lg="4">
        <v-card title="paper.title" text="paper.text"></v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { patch } from '@/store'
import { filterPapers } from '@/store/actions'
import { toggleReleases } from '@/store/actions/toggle-releases'
import { useStore } from '@/store/store'

const store = useStore()

function searchFieldOnUpdate(value: string) {
  patch(filterPapers(value))
}

function onMenuClicked() {
  patch(toggleReleases)
}
</script>
<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="onMenuClicked()" />
    <v-app-bar-title>Arxiv Updates</v-app-bar-title>
    <v-text-field
      density="compact"
      variant="underlined"
      label="Search"
      append-inner-icon="mdi-magnify"
      single-line
      hide-details
      :model-value="store.papersFilter"
      @update:modelValue="searchFieldOnUpdate"
    ></v-text-field>
    <v-spacer />
  </v-app-bar>
</template>

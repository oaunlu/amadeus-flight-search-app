<template>
  <main>
    <v-row>
      <v-col cols="8">
        <search-bar />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <search-list />
      </v-col>
    </v-row>
  </main>
</template>
<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import SearchList from '@/components/SearchList.vue'
</script>
<template>
  <header class="d-flex justify-center py-16">
    <h1>Uçuşunu kolayca bul ⬇</h1>
  </header>
  <router-view />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped>
header {
  color: rgb(0, 0, 0);
}
</style>
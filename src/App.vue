<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <header>
    <nav>
      <NavBar />
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
/* @tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind variants; */
</style>

<script setup lang="ts">
const props = defineProps<{
  title: string
  subtitle: string
}>()
</script>

<template>
  <h1 class="w-full px-5 text-center text-3xl font-bold text-black">{{ props.title }}</h1>
  <h5 class="w-full p-3 text-center">{{ props.subtitle }}</h5>
</template>

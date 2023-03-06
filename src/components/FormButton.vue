<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <button class="w-full rounded-xl bg-[#41521F] p-3 text-white">{{ props.text }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string,
    subtitle: string,
}>()
</script>

<template>
    <h1 class="font-bold text-3xl text-black w-full text-center px-5">{{ props.title }}</h1>
    <h5 class="w-full text-center p-3">{{ props.subtitle }}</h5>
</template>
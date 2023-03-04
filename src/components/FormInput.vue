<script setup lang="ts">
const props = defineProps<{
    title: string,
    text: string,
    type: string,
}>()
</script>

<template>
    <h5 class="mb-2">{{props.title}}</h5>
    <input :type="props.type" :placeholder="props.text" class="border rounded-xl w-full border-gray-300 p-3 mb-5">
</template>
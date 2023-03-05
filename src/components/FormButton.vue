<script setup lang="ts">
const props = defineProps<{
    text: string,
}>()
</script>

<template>
    <button class="w-full bg-[#41521F] text-white p-3 rounded-xl">{{ props.text }}</button>
</template>
<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<template>
  <div class="mb-5">
    <h5 class="mb-2">{{ props.title }}</h5>
    <select
      name="resource_type"
      id="type"
      class="w-full rounded-xl border border-gray-300 p-3 focus-visible:border-gray-300 focus-visible:ring-1 focus-visible:ring-gray-300"
    >
      <option value="" disabled selected>Select Resource Type</option>
      <option value="books">Books</option>
      <option value="magazine">Magazine</option>
      <option value="journal">Journal</option>
    </select>
  </div>
</template>

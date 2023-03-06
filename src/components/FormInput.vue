<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'

const props = defineProps<{
  title: string
  text: string
  type: string
  error: String | Ref<String>
  value: string
}>()

const value = ref('')

const emit = defineEmits<{
  (e: string, value: string): void
}>()
</script>

<template>
  <div class="mb-5">
    <h5 class="mb-2">{{ props.title }}</h5>
    <input
      @input="emit('update', value)"
      :type="props.type"
      :placeholder="props.text"
      :value="props.value"
      v-model="value"
      class="w-full rounded-xl border border-gray-300 p-3 focus-visible:border-gray-300 focus-visible:ring-1 focus-visible:ring-gray-300"
    />
    <p v-if="error" class="text-[#FF3B3B]">{{ props.error }}</p>
  </div>
</template>

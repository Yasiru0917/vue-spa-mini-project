<template>
  <input
    v-model="searchText"
    type="text"
    placeholder="🔎︎  Search Your iPhone..."
    class="w-full max-w-md mx-auto block my-6 px-4 py-2 rounded-lg
           bg-[#E9EEF5] dark:bg-gray-800
           text-gray-800 dark:text-white
           placeholder-gray-500 dark:placeholder-gray-400
           border border-[#E9EEF5] dark:border-gray-700
           shadow-sm
           focus:outline-none
           focus:ring-2 focus:ring-[#81A6C6] dark:focus:ring-[#AACDDC]
           transition"
    @input="handleSearch"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const searchText = ref('')
const emit = defineEmits(['search'])

function handleSearch() {
  emit('search', searchText.value)
}
</script>
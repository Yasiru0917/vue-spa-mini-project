<template>
  <div class="max-w-6xl mx-auto px-4 mb-6">

    <div class="flex flex-wrap gap-3 p-4 rounded-2xl
                bg-white/60 dark:bg-gray-900/60
                backdrop-blur-md shadow-sm
                border border-gray-200 dark:border-gray-800">

      <!-- MODEL FILTER -->
      <button
        v-for="model in models"
        :key="model"
        @click="selectedModel = model; emitFilters()"
        class="px-4 py-2 rounded-full text-sm transition"
        :class="selectedModel === model
          ? 'bg-[#81A6C6] text-white'
          : 'bg-[#E9EEF5] dark:bg-gray-800 text-gray-700 dark:text-white hover:scale-105'"
      >
        {{ model || 'All' }}
      </button>

      <!-- PRICE FILTER -->
      <button
        v-for="price in prices"
        :key="price.value"
        @click="selectedPrice = price.value; emitFilters()"
        class="px-4 py-2 rounded-full text-sm transition"
        :class="selectedPrice === price.value
          ? 'bg-[#81A6C6] text-white'
          : 'bg-[#E9EEF5] dark:bg-gray-800 text-gray-700 dark:text-white hover:scale-105'"
      >
        {{ price.label }}
      </button>

      <!-- CLEAR -->
      <button
        @click="clearFilters"
        class="px-4 py-2 rounded-full text-sm
               bg-gray-200 dark:bg-gray-700
               text-gray-700 dark:text-white
               hover:bg-gray-300 dark:hover:bg-gray-600
               transition"
      >
        Clear
      </button>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedModel = ref('')
const selectedPrice = ref('')

const emit = defineEmits(['filter'])

const models = ['', '17', '16', '15', '14']

const prices = [
  { label: 'All Prices', value: '' },
  { label: '< 300K', value: 'low' },
  { label: '300K - 500K', value: 'mid' },
  { label: '> 500K', value: 'high' },
]

function emitFilters() {
  emit('filter', {
    model: selectedModel.value,
    price: selectedPrice.value
  })
}

function clearFilters() {
  selectedModel.value = ''
  selectedPrice.value = ''
  emitFilters()
}
</script>
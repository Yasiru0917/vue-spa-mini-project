<template>
  <div class="max-w-6xl mx-auto px-4 mb-6">


    <button
      @click="isOpen = !isOpen"
      class="px-5 py-2 rounded-xl
             bg-[#81A6C6] text-white
             hover:bg-[#6f97b8]
             transition shadow"
    >
      {{ isOpen ? 'Hide Filters' : '☷ Show Filters' }}
    </button>

    
    <div v-if="isOpen"
         class="mt-4 p-5 rounded-2xl
                bg-white/70 dark:bg-gray-900/70
                backdrop-blur-md
                border border-gray-200 dark:border-gray-800
                shadow-md">

      
      <div class="mb-4">
        <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Model
        </h3>

        <div class="flex flex-wrap gap-2">
          <button
            v-for="model in models"
            :key="model"
            @click="selectedModel = model; emitFilters()"
            class="px-4 py-2 rounded-lg text-sm transition"
            :class="selectedModel === model
              ? 'bg-[#81A6C6] text-white'
              : 'bg-[#E9EEF5] dark:bg-gray-800 text-gray-700 dark:text-white'"
          >
            {{ model || 'All' }}
          </button>
        </div>
      </div>

    
      <div class="mb-4">
        <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Price
        </h3>

        <div class="flex flex-wrap gap-2">
          <button
            v-for="price in prices"
            :key="price.value"
            @click="selectedPrice = price.value; emitFilters()"
            class="px-4 py-2 rounded-lg text-sm transition"
            :class="selectedPrice === price.value
              ? 'bg-[#81A6C6] text-white'
              : 'bg-[#E9EEF5] dark:bg-gray-800 text-gray-700 dark:text-white'"
          >
            {{ price.label }}
          </button>
        </div>
      </div>

      
      <div class="flex justify-end">
        <button
          @click="clearFilters"
          class="px-4 py-2 rounded-lg text-sm
                 bg-gray-200 dark:bg-gray-700
                 text-gray-700 dark:text-white
                 hover:bg-gray-300 dark:hover:bg-gray-600
                 transition"
        >
          Clear Filters
        </button>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)

const selectedModel = ref('')
const selectedPrice = ref('')

const emit = defineEmits(['filter'])

const models = ['', '17', '16', '15', '14']

const prices = [
  { label: 'All Prices', value: '' },
  { label: '< 300K', value: 'low' },
  { label: '300K - 500K', value: 'mid' },
  { label: '> 500K', value: 'high' }
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
<template>
  <div class="max-w-6xl mx-auto px-4 mb-6">

    <!-- TOGGLE BUTTON -->
    <button
      @click="isOpen = !isOpen"
      class="px-5 py-2 rounded-xl
             bg-[#81A6C6] text-white
             hover:bg-[#6f97b8]
             transition shadow"
    >
      ⚙️ Filters
    </button>

    <!-- ACTIVE FILTERS DISPLAY -->
    <div v-if="selectedCategory || selectedPrice"
         class="mt-3 text-sm text-gray-600 dark:text-gray-300 flex flex-wrap gap-2">

      <span class="font-semibold">Active:</span>

      <span v-if="selectedCategory"
            class="px-2 py-1 bg-[#81A6C6] text-white rounded">
        {{ selectedCategory }}
      </span>

      <span v-if="selectedPrice"
            class="px-2 py-1 bg-[#81A6C6] text-white rounded">
        {{ priceLabel }}
      </span>

    </div>

    <!-- FILTER BOX -->
    <div v-if="isOpen"
         class="mt-4 p-5 rounded-2xl
                bg-white/70 dark:bg-gray-900/70
                backdrop-blur-md
                border border-gray-200 dark:border-gray-800
                shadow-md">

      <!-- CATEGORY FILTER -->
      <div class="mb-4">
        <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Category
        </h3>

        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categories"
            :key="cat.value"
            @click="selectCategory(cat.value)"
            class="px-4 py-2 rounded-lg text-sm transition"
            :class="selectedCategory === cat.value
              ? 'bg-[#81A6C6] text-white'
              : 'bg-[#E9EEF5] dark:bg-gray-800 text-gray-700 dark:text-white'"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- PRICE FILTER -->
      <div class="mb-4">
        <h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Price
        </h3>

        <div class="flex flex-wrap gap-2">
          <button
            v-for="price in prices"
            :key="price.value"
            @click="selectPrice(price.value)"
            class="px-4 py-2 rounded-lg text-sm transition"
            :class="selectedPrice === price.value
              ? 'bg-[#81A6C6] text-white'
              : 'bg-[#E9EEF5] dark:bg-gray-800 text-gray-700 dark:text-white'"
          >
            {{ price.label }}
          </button>
        </div>
      </div>

      <!-- CLEAR -->
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
import { ref, computed } from 'vue'

const isOpen = ref(false)

const selectedCategory = ref('')
const selectedPrice = ref('')

const emit = defineEmits(['filter'])

/* ✅ CORRECT DummyJSON categories */
const categories = [
  { label: 'All', value: '' },
  { label: 'Smartphones', value: 'smartphones' },
  { label: 'Laptops', value: 'laptops' },
  { label: 'Tablets', value: 'tablets' },
  { label: 'Mobile Accessories', value: 'mobile-accessories' },
  { label: 'Mens Watches', value: 'mens-watches' },
  { label: 'Womens Watches', value: 'womens-watches' }
]

/* ✅ Price ranges */
const prices = [
  { label: 'All Prices', value: '' },
  { label: '< $100', value: 'low' },
  { label: '$100 - $1000', value: 'mid' },
  { label: '> $1000', value: 'high' }
]

/* ✅ computed label for display */
const priceLabel = computed(() => {
  return prices.find(p => p.value === selectedPrice.value)?.label || ''
})

function emitFilters() {
  emit('filter', {
    category: selectedCategory.value,
    price: selectedPrice.value
  })
}

/* ✅ better UX: auto close */
function selectCategory(value: string) {
  selectedCategory.value = value
  emitFilters()
}

function selectPrice(value: string) {
  selectedPrice.value = value
  emitFilters()
}

function clearFilters() {
  selectedCategory.value = ''
  selectedPrice.value = ''
  emitFilters()
}
</script>
<template>
  <div class="min-h-screen bg-[#F7F9FC] dark:bg-[#0F172A] pb-10">

    <!-- Search -->
    <SearchBar @search="handleSearch" />

    <!-- Filters -->
    <FilterBar @filter="handleFilter" />

    <!-- No Results -->
    <div v-if="filteredProducts.length === 0"
         class="text-center text-gray-500 dark:text-gray-400 mt-10">
      No products found for
      "<span class="font-semibold text-gray-800 dark:text-white">
        {{ searchQuery }}
      </span>"
    </div>

    <!-- Product Grid -->
    <div v-else
         class="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

      <!-- Product Card -->
      <div
  v-for="product in filteredProducts"
  :key="product.id"
  @click="openModal(product)"
  class="group cursor-pointer bg-white/70 dark:bg-gray-900/70
         backdrop-blur-md border border-gray-200 dark:border-gray-800
         rounded-2xl p-4 transition duration-300
         hover:-translate-y-2 hover:shadow-xl"
>

  <!-- IMAGE -->
  <div class="flex justify-center">
    <img
      :src="product.image"
      class="w-32 h-32 object-contain
             group-hover:scale-110 transition duration-300"
    />
  </div>

  <!-- NAME -->
  <h2 class="text-center font-semibold text-gray-800 dark:text-white mt-3">
    {{ product.name }}
  </h2>

  <!-- PRICE -->
  <p class="text-center text-gray-500 dark:text-gray-300 mt-1">
    LKR {{ product.price.toLocaleString() }}
  </p>

  <!-- BUTTONS -->
  <div class="mt-4 space-y-2">

    <button
      @click.stop="addToCart(product)"
      class="w-full py-2 rounded-xl
             bg-[#81A6C6] text-white
             hover:bg-[#6f97b8]
             transition"
    >
      Add to Cart
    </button>

    <button
      @click.stop="openModal(product)"
      class="w-full py-2 rounded-xl
             bg-gray-200 dark:bg-gray-800
             text-gray-700 dark:text-white
             hover:bg-gray-300 dark:hover:bg-gray-700
             transition"
    >
      View Details
    </button>

  </div>

</div>
    </div>

    <!-- Product Modal -->
    <ProductModal
      v-if="selectedProduct"
      :product="selectedProduct"
      :isOpen="isModalOpen"
      @close="closeModal"
    />

  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCartStore } from '../store/cartStore'
import type { Product } from '../types/Product'

import SearchBar from '../components/SearchBar.vue'
import FilterBar from '../components/FilterBar.vue'
import ProductModal from '../components/ProductModal.vue'
import { products } from '../services/api'





// Store
const cart = useCartStore()

// Search
const searchQuery = ref('')
let timeout: ReturnType<typeof setTimeout> | null = null

function handleSearch(value: string) {
  if (timeout) clearTimeout(timeout)

  timeout = setTimeout(() => {
    searchQuery.value = value
  }, 250)
}

// Filters
const selectedFilters = ref({
  model: '',
  price: ''
})

function handleFilter(filters: any) {
  selectedFilters.value = filters
}

// Modal
const selectedProduct = ref<Product | null>(null)
const isModalOpen = ref(false)

function openModal(product: Product) {
  selectedProduct.value = product
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}



// FILTER LOGIC (FIXED)
const filteredProducts = computed(() => {
  return products.filter(p => {

    const matchesSearch = p.name
      .toLowerCase()
      .includes(searchQuery.value.toLowerCase())

    const matchesModel = selectedFilters.value.model
      ? p.name.toLowerCase().includes(selectedFilters.value.model)
      : true

    let matchesPrice = true

    if (selectedFilters.value.price === 'low') {
      matchesPrice = p.price < 300000
    } else if (selectedFilters.value.price === 'mid') {
      matchesPrice = p.price >= 300000 && p.price <= 500000
    } else if (selectedFilters.value.price === 'high') {
      matchesPrice = p.price > 500000
    }

    return matchesSearch && matchesModel && matchesPrice
  })
})
// Cart
function addToCart(product: Product) {
  cart.addToCart(product)
}
</script>
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
        @click="goToProduct(product)"
        class="group cursor-pointer bg-white/70 dark:bg-gray-900/70
               backdrop-blur-md border border-gray-200 dark:border-gray-800
               rounded-2xl p-4 transition duration-300
               hover:-translate-y-2 hover:shadow-xl
               flex flex-col h-full"
      >

        <!-- CONTENT -->
        <div class="flex flex-col flex-1">

          <div class="flex justify-center">
            <img :src="product.thumbnail"
                 class="w-32 h-32 object-contain group-hover:scale-110 transition" />
          </div>

          <h2 class="text-center font-semibold text-gray-800 dark:text-white mt-3 line-clamp-2">
            {{ product.title }}
          </h2>

          <p class="text-center text-xs text-gray-400">
            {{ product.brand }}
          </p>

          <p class="text-center text-gray-500 dark:text-gray-300 mt-1">
            $ {{ product.price }}
          </p>

        </div>

        <!-- BUTTONS -->
        <div class="mt-auto space-y-2">

          <button
            @click.stop="addToCart(product)"
            class="w-full py-2 rounded-xl bg-[#81A6C6] text-white hover:bg-[#6f97b8]"
          >
            Add to Cart
          </button>

          <button
            @click.stop="openModal(product)"
            class="w-full py-2 rounded-xl bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-white"
          >
            View Details
          </button>

        </div>

      </div>
    </div>

    <!-- MODAL -->
    <ProductModal
      v-if="selectedProduct"
      :product="selectedProduct"
      :isOpen="isModalOpen"
      @close="closeModal"
      @add-to-cart="addToCart"
    />

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useCartStore } from '../store/cartStore'
import { useRouter } from 'vue-router'
import type { Product } from '../types/Product'

import SearchBar from '../components/SearchBar.vue'
import FilterBar from '../components/FilterBar.vue'
import ProductModal from '../components/ProductModal.vue'
import { fetchProducts } from '../services/api'

const cart = useCartStore()
const router = useRouter()

const products = ref<Product[]>([])

onMounted(async () => {
  products.value = await fetchProducts()
})

// SEARCH
const searchQuery = ref('')
let timeout: any = null

function handleSearch(value: string) {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    searchQuery.value = value
  }, 250)
}

// FILTER
const selectedFilters = ref({
  category: '',
  price: ''
})

function handleFilter(filters: any) {
  selectedFilters.value = filters
}

// MODAL
const selectedProduct = ref<Product | null>(null)
const isModalOpen = ref(false)

function openModal(product: Product) {
  selectedProduct.value = product
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}

// ROUTING
function goToProduct(product: Product) {
  router.push(`/product/${product.id}`)
}

// FILTER LOGIC
const filteredProducts = computed(() => {
  return products.value.filter(p => {

    const matchesSearch = p.title.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesCategory = selectedFilters.value.category
      ? p.category === selectedFilters.value.category
      : true

    let matchesPrice = true

    if (selectedFilters.value.price === 'low') matchesPrice = p.price < 300
    else if (selectedFilters.value.price === 'mid') matchesPrice = p.price <= 700
    else if (selectedFilters.value.price === 'high') matchesPrice = p.price > 700

    return matchesSearch && matchesCategory && matchesPrice
  })
})

function addToCart(product: Product) {
  cart.addToCart(product)
}
</script>
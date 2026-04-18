<template>
  <div class="min-h-screen bg-[#F7F9FC] dark:bg-[#0F172A] pb-10">

    <!-- Search -->
    <SearchBar @search="handleSearch" />

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
        class="cursor-pointer bg-[#E9EEF5] dark:bg-gray-900
               border border-[#E9EEF5] dark:border-gray-800
               rounded-xl p-4 hover:-translate-y-1 transition"
      >

        <img :src="product.image"
             class="w-32 h-32 mx-auto object-contain mb-4"/>

        <h2 class="text-center font-semibold text-gray-800 dark:text-white">
          {{ product.name }}
        </h2>

        <p class="text-center text-gray-600 dark:text-gray-300">
          LKR {{ product.price.toLocaleString() }}
        </p>

        <!-- Add to Cart -->
        <button
          @click.stop="addToCart(product)"
          class="mt-4 w-full py-2 rounded-lg
                 bg-[#81A6C6] text-white
                 hover:bg-[#AACDDC]"
        >
          Add to Cart
        </button>

      </div>

    </div>

    <!-- ✅ PRODUCT MODAL -->
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
import SearchBar from '../components/SearchBar.vue'
import ProductModal from '../components/ProductModal.vue'

// Images
import iPhone17ProMax from '../assets/17 pro max.jpg'
import iPhone17Pro from '../assets/17 pro.jpg'
import iPhone17 from '../assets/17.jpg'
import iPhone16ProMax from '../assets/16 pro max.png'
import iPhone16Pro from '../assets/16 pro.jpg'
import iPhone16 from '../assets/16.jpg'
import iPhone15ProMax from '../assets/15 pro max.jpg'
import iPhone15Pro from '../assets/15 pro.jpg'
import iPhone15 from '../assets/15.jpg'
import iPhone14ProMax from '../assets/14 pro max.jpg'
import iPhone14 from '../assets/14.jpg'
import iPhone13ProMax from '../assets/13promax.jpg'

// Type
interface Product {
  id: number
  name: string
  price: number
  image: string
}

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

// Modal state
const selectedProduct = ref<Product | null>(null)
const isModalOpen = ref(false)

function openModal(product: Product) {
  selectedProduct.value = product
  isModalOpen.value = true
}

function closeModal() {
  isModalOpen.value = false
}

// Products
const products: Product[] = [
  { id: 1, name: 'iPhone 17 Pro Max', price: 650000, image: iPhone17ProMax },
  { id: 2, name: 'iPhone 17 Pro', price: 590000, image: iPhone17Pro },
  { id: 3, name: 'iPhone 17', price: 520000, image: iPhone17 },

  { id: 4, name: 'iPhone 16 Pro Max', price: 540000, image: iPhone16ProMax },
  { id: 5, name: 'iPhone 16 Pro', price: 480000, image: iPhone16Pro },
  { id: 6, name: 'iPhone 16', price: 410000, image: iPhone16 },

  { id: 7, name: 'iPhone 15 Pro Max', price: 437635, image: iPhone15ProMax },
  { id: 8, name: 'iPhone 15 Pro', price: 392635, image: iPhone15Pro },
  { id: 9, name: 'iPhone 15', price: 364635, image: iPhone15 },

  { id: 10, name: 'iPhone 14 Pro Max', price: 328135, image: iPhone14ProMax },
  { id: 11, name: 'iPhone 14', price: 265135, image: iPhone14 },

  { id: 12, name: 'iPhone 13 Pro Max', price: 280000, image: iPhone13ProMax },
]

// Filter
const filteredProducts = computed(() => {
  return products.filter(p =>
    p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// Cart
function addToCart(product: Product) {
  cart.addToCart(product)
}
</script>
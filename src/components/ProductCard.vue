<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col items-center transform hover:scale-105 transition duration-200"
  >
    <!-- Product Image -->
    <img
      :src="product.image"
      :alt="product.name"
      class="w-32 h-32 object-contain mb-4"
    />

    <!-- Product Name -->
    <h2
      class="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 text-center"
    >
      {{ product.name }}
    </h2>

    <!-- Product Price -->
    <p class="text-gray-700 dark:text-gray-300 mb-4">
      LKR {{ product.price.toLocaleString() }}
    </p>

    <!-- Add to Cart Button -->
    <button
      @click="addToCart"
      class="px-4 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
    >
      Add to Cart
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cartStore'

// Props (IMPORTANT)
const props = defineProps<{
  product: {
    id: number
    name: string
    price: number
    image: string
  }
}>()

// Cart store
const cart = useCartStore()

// Add to cart function
function addToCart() {
  cart.addToCart(props.product)
}
</script>
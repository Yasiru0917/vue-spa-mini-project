<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  >
    <div class="bg-white dark:bg-gray-800 rounded-xl p-6 w-96 relative">

      <!-- Close Button -->
      <button
        @click="close"
        class="absolute top-2 right-2 text-gray-500 hover:text-red-500"
      >
        ✖
      </button>

      <!-- Image -->
      <img
        :src="product.image"
        :alt="product.name"
        class="w-48 h-48 object-contain mx-auto mb-4"
      />

      <!-- Name -->
      <h2 class="text-xl font-bold text-center text-gray-900 dark:text-white">
        {{ product.name }}
      </h2>

      <!-- Price -->
      <p class="text-center text-gray-600 dark:text-gray-300 mt-2">
        LKR {{ product.price.toLocaleString() }}
      </p>

      <!-- Add to Cart -->
      <button
        @click="addToCart"
        class="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Add to Cart
      </button>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../store/cartStore'

// Type
interface Product {
  id: number
  name: string
  price: number
  image: string
}

// Props
const props = defineProps<{
  product: Product
  isOpen: boolean
}>()

// Emits
const emit = defineEmits(['close'])

// Store
const cart = useCartStore()

// Add to cart
function addToCart() {
  cart.addToCart(props.product)
}

// Close modal
function close() {
  emit('close')
}
</script>
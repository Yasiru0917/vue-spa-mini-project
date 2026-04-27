<template>
  <div v-if="isOpen"
       class="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

    <div class="bg-white dark:bg-gray-900 w-[92%] max-w-3xl rounded-2xl overflow-hidden shadow-xl">

      <!-- HEADER -->
      <div class="p-5 border-b dark:border-gray-800 flex justify-between items-center">
        <h2 class="text-lg font-bold text-gray-800 dark:text-white">
          {{ product.title }}
        </h2>

        <button @click="$emit('close')"
                class="text-gray-500 hover:text-red-500 text-xl">
          ✕
        </button>
      </div>

      <!-- BODY -->
      <div class="p-6 grid md:grid-cols-2 gap-6">

        <!-- IMAGE -->
        <div class="flex justify-center items-center">
          <img :src="product.thumbnail"
               class="w-56 h-56 object-contain" />
        </div>

        <!-- DETAILS -->
        <div>

          <!-- PRICE -->
          <p class="text-2xl font-bold text-[#81A6C6]">
            $ {{ product.price }}
          </p>

          <!-- BRAND -->
          <p class="mt-2 text-sm text-gray-500">
            Brand: {{ product.brand }}
          </p>

          <!-- RATING -->
          <p class="text-sm text-yellow-500 mt-1">
            ⭐ {{ product.rating }}
          </p>

          <!-- STOCK -->
          <p class="text-sm mt-1"
             :class="product.stock > 0 ? 'text-green-500' : 'text-red-500'">
            {{ product.stock > 0 ? 'In Stock' : 'Out of Stock' }}
          </p>

          <!-- DESCRIPTION -->
          <div class="mt-4">
            <p class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Description
            </p>

            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ product.description }}
            </p>
          </div>

          <!-- ADD TO CART -->
          <button
            @click="$emit('add-to-cart', product)"
            class="mt-6 w-full py-2 rounded-xl
                   bg-[#81A6C6] text-white
                   hover:bg-[#6f97b8]
                   transition"
          >
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '../types/Product'

defineProps<{
  product: Product
  isOpen: boolean
}>()

defineEmits(['close', 'add-to-cart'])
</script>
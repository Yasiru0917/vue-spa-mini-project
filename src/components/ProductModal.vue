<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

    <div class="bg-white dark:bg-gray-900 w-[92%] max-w-3xl rounded-2xl overflow-hidden shadow-xl">

      <!-- HEADER -->
      <div class="p-5 border-b dark:border-gray-800 flex justify-between items-center">
        <h2 class="text-lg font-bold text-gray-800 dark:text-white">
          {{ product.name }}
        </h2>

        <button @click="$emit('close')" class="text-gray-500 hover:text-red-500 text-xl">
          ✕
        </button>
      </div>

      <!-- BODY -->
      <div class="p-6 grid md:grid-cols-2 gap-6">

        <!-- IMAGE -->
        <div class="flex justify-center items-center">
          <img :src="product.image" class="w-56 h-56 object-contain" />
        </div>

        <!-- DETAILS -->
         
        <div>

          <!-- PRICE -->
          <p class="text-2xl font-bold text-[#81A6C6]">
            Rs {{ product.price.toLocaleString() }}
          </p>
          <!-- COLORS (DISPLAY ONLY) -->
<div v-if="product.colors && product.colors.length" class="mt-4">
  <p class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
    Available Colors
  </p>

  <div class="flex gap-3">
    <div
      v-for="(color, index) in product.colors"
      :key="index"
      class="w-8 h-8 rounded-full border border-gray-300"
      :style="{ backgroundColor: color }"
    ></div>
  </div>
</div>

          <!-- HIGHIGHTS -->
          <div v-if="product.highlights" class="mt-4">
            <p class="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Highlights
            </p>

            <ul class="list-disc ml-5 text-sm text-gray-600 dark:text-gray-400">
              <li v-for="(item, i) in product.highlights" :key="i">
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- SPECS -->
          <div class="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-300">

            <p><span class="font-semibold">Camera:</span> {{ product.camera }}</p>
            <p><span class="font-semibold">Performance:</span> {{ product.performance }}</p>
            <p><span class="font-semibold">Battery:</span> {{ product.battery }}</p>
            <p><span class="font-semibold">Design:</span> {{ product.design }}</p>

          </div>

          

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
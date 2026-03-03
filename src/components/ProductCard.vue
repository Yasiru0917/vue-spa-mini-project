<script setup lang="ts">
import type { Product } from "../types/Product"

defineProps<{
  product: Product
}>()
</script>

<template>
  <div class="bg-white rounded-xl shadow hover:shadow-lg transition p-4">

    <img
      :src="product.thumbnail"
      class="w-full h-48 object-cover rounded"
    />

    <h2 class="text-lg font-semibold mt-3">
      {{ product.title }}
    </h2>

    <p class="text-gray-600">
      ${{ product.price }}
    </p>

    <button
      class="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
    >
      View Details
    </button>

  </div>
</template>
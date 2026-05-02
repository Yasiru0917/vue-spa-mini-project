<template>
  <div class="min-h-screen bg-[#F7F9FC] dark:bg-[#0F172A] p-6">

    <div v-if="product" class="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

      <!-- IMAGE -->
      <div class="flex justify-center items-center">
        <img :src="product.thumbnail" class="w-80 object-contain" />
      </div>

      <!-- DETAILS -->
      <div>

        <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
          {{ product.title }}
        </h1>

        <p class="text-gray-500 mt-2">
          {{ product.description }}
        </p>

        <p class="text-2xl font-bold text-[#81A6C6] mt-4">
          $ {{ product.price }}
        </p>

        <p class="text-sm text-gray-400 mt-2">
          Category: {{ product.category }}
        </p>

        <button
          @click="addToCart(product)"
          class="mt-6 px-6 py-3 rounded-xl
                 bg-[#81A6C6] text-white
                 hover:bg-[#6f97b8] transition"
        >
          Add to Cart
        </button>

      </div>

    </div>

    <!-- LOADING -->
    <div v-else class="text-center mt-20 text-gray-500">
      Loading product...
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '../store/cartStore'

const route = useRoute()
const cart = useCartStore()

const product = ref<any>(null)

onMounted(async () => {
  const id = route.params.id

  const res = await fetch(`https://dummyjson.com/products/${id}`)
  product.value = await res.json()
})

function addToCart(product: any) {
  cart.addToCart(product)
}
</script>
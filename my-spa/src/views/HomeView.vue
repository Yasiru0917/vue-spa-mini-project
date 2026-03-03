<template>
  <div class="max-w-6xl mx-auto mt-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <div
      v-for="product in products"
      :key="product.id"
      class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center transform hover:scale-105 transition duration-200"
    >
      <img :src="product.image" :alt="product.name" class="w-32 h-32 object-contain mb-4" />
      <h2 class="text-lg font-semibold mb-2">{{ product.name }}</h2>
      <p class="text-gray-700 dark:text-gray-300 mb-4">LKR {{ product.price.toLocaleString() }}</p>
      <button class="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
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

interface Product {
  id: number
  name: string
  price: number
  image: string
}

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
</script>
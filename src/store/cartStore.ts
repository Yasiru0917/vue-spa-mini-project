import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useCartStore = defineStore('cart', () => {

  const saved = localStorage.getItem('cartItems')

  const cartItems = ref<any[]>(saved ? JSON.parse(saved) : [])

  function addToCart(product: any) {
    cartItems.value.push(product)
  }

  function removeFromCart(index: number) {
    cartItems.value.splice(index, 1)
  }

  const itemCount = computed(() => cartItems.value.length)

  // 🔥 PERSIST CART AUTOMATICALLY
  watch(cartItems, (newCart) => {
    localStorage.setItem('cartItems', JSON.stringify(newCart))
  }, { deep: true })

  return {
    cartItems,
    addToCart,
    removeFromCart,
    itemCount
  }
})
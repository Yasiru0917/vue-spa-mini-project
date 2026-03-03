import { defineStore } from 'pinia'
import type { Product } from '../types/Product'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Product[]
  }),
  actions: {
    addToCart(product: Product) {
      this.items.push(product)
    },
    removeFromCart(productId: number) {
      this.items = this.items.filter(item => item.id !== productId)
    },
    clearCart() {
      this.items = []
    }
  }
})
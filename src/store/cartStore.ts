import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as any[],
  }),

  actions: {
    addToCart(product: any) {
      this.items.push(product)
      console.log('Added:', product) // 🔥 debug
    },

    removeFromCart(id: number) {
      this.items = this.items.filter(p => p.id !== id)
    },

    clearCart() {
      this.items = []
    },
  },

  getters: {
    itemCount: (state) => state.items.length,
    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price, 0),
  },
})
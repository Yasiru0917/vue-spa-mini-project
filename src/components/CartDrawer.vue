<template>
  <div v-if="isOpen" class="fixed inset-0 z-[60]">

    
    <div
      class="absolute top-[72px] left-0 right-0 bottom-0 bg-black/40"
      @click="closeDrawer"
    ></div>

    
    <div
      class="absolute right-0 top-[72px] h-[calc(100%-72px)] w-80
             bg-[#F7F9FC] dark:bg-[#0F172A]
             border-l border-[#E9EEF5] dark:border-gray-800
             shadow-2xl
             flex flex-col
             transform transition-transform duration-300 ease-out"
    >

      
      <div class="p-4 border-b border-[#E9EEF5] dark:border-gray-800">
        <h2 class="text-lg font-bold text-gray-800 dark:text-white">
          🛒 My Cart
        </h2>
      </div>

      
      <div class="flex-1 overflow-y-auto p-4 space-y-4">

        
        <div v-if="cart.cartItems.length === 0"
             class="text-center text-gray-500 mt-10">
          Your cart is empty 🛍️
        </div>

        
        <div
          v-for="(item, index) in cart.cartItems"
          :key="index"
          class="flex items-center gap-3 border-b border-[#E9EEF5] dark:border-gray-800 pb-3"
        >
          <img :src="item.image" class="w-12 h-12 object-contain"/>

          <div class="flex-1">
            <p class="text-sm font-semibold text-gray-800 dark:text-white">
              {{ item.name }}
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">
              LKR {{ item.price.toLocaleString() }}
            </p>
          </div>

          <button
            @click="removeItem(index)"
            class="text-red-400 hover:text-red-600 text-sm transition"
          >
            Remove
          </button>
        </div>

      </div>

      
      <div
        class="p-4 pb-8 border-t border-[#E9EEF5] dark:border-gray-800
               bg-[#F7F9FC] dark:bg-[#0F172A]"
      >

        
        <div class="flex justify-between mb-3 text-gray-800 dark:text-white font-semibold">
          <span>Total</span>
          <span>LKR {{ totalPrice.toLocaleString() }}</span>
        </div>

        
        <button
          class="w-full py-3 rounded-xl
                 bg-[#81A6C6] text-white
                 hover:bg-[#6f97b8]
                 shadow-md transition"
        >
          Checkout
        </button>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useCartStore } from '../store/cartStore'

defineProps<{ isOpen: boolean }>()
const emit = defineEmits(['close'])

const cart = useCartStore()

function closeDrawer() {
  emit('close')
}

function removeItem(index: number) {
  cart.cartItems.splice(index, 1)
}


const totalPrice = computed(() =>
  cart.cartItems.reduce((sum, item) => sum + item.price, 0)
)
</script>
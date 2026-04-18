<template>
  <div v-if="isOpen" class="fixed inset-0 z-40">

    <div class="absolute inset-0 bg-black/40" @click="closeDrawer"></div>

    <div
      class="absolute right-0 top-0 h-full w-80
             bg-[#F7F9FC] dark:bg-[#0F172A]
             border-l border-[#E9EEF5] dark:border-gray-800"
    >

      <div class="p-4 border-b border-[#E9EEF5] dark:border-gray-800">
        <h2 class="text-lg font-bold text-gray-800 dark:text-white">
          🛒 My Cart
        </h2>
      </div>

      <div class="p-4 space-y-4 overflow-y-auto h-[calc(100%-120px)]">

        <div v-if="cart.cartItems.length === 0"
             class="text-center text-gray-500">
          Empty cart
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
              LKR {{ item.price }}
            </p>
          </div>

          <button
            @click="removeItem(index)"
            class="text-red-500 text-sm"
          >
            Remove
          </button>

        </div>

      </div>

      <div class="p-4 border-t border-[#E9EEF5] dark:border-gray-800">
        <button
          class="w-full py-2 rounded-lg
                 bg-[#81A6C6] text-white
                 hover:bg-[#AACDDC]"
        >
          Checkout
        </button>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
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
</script>
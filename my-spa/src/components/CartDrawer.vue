<template>
  <div v-if="visible" class="fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-4 z-50">
    <button class="absolute top-2 right-2 text-gray-500" @click="$emit('close')">✖</button>
    <h2 class="text-xl font-bold mb-4">Shopping Cart</h2>
    <div v-if="cartStore.items.length === 0">Cart is empty</div>
    <ul>
      <li v-for="item in cartStore.items" :key="item.id" class="flex justify-between mb-2">
        <span>{{ item.name }}</span>
        <span>${{ item.price }}</span>
      </li>
    </ul>
    <div class="mt-4 font-semibold">
      Total: ${{ total }}
    </div>
    <button class="mt-4 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700" @click="cartStore.clearCart">
      Clear Cart
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "../store/cartStore";
import { computed } from "vue";

const props = defineProps<{ visible: boolean }>();
const emit = defineEmits(['close']);
const cartStore = useCartStore();

const total = computed(() => cartStore.items.reduce((sum, item) => sum + item.price, 0));
</script>
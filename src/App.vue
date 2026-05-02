<template>
  <div class="min-h-screen bg-[#F7F9FC] dark:bg-[#0F172A] transition">

    <!-- Navbar -->
    <NavBar @open-cart="openCart" />

    <!-- Page Content -->
    <main class="pt-[72px]">
      <router-view />
    </main>

    <!-- Cart Drawer -->
    <CartDrawer :isOpen="isCartOpen" @close="closeCart" />

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import CartDrawer from './components/CartDrawer.vue'

const isCartOpen = ref(false)

function openCart() {
  isCartOpen.value = true
}

function closeCart() {
  isCartOpen.value = false
}
</script>
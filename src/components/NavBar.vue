<template>
  <nav
    class="sticky top-0 z-50
           bg-[#F7F9FC]/80 dark:bg-[#0F172A]/80
           backdrop-blur-xl
           border-b border-[#E9EEF5] dark:border-gray-800
           shadow-sm"
  >

    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

      <!-- LEFT -->
      <div class="flex items-center cursor-pointer" @click="router.push('/')">

        <img src="@/assets/logo.svg" class="h-9 w-9 mr-3" />

        <div class="flex flex-col leading-tight">
          <h1 class="text-2xl font-bold text-gray-800 dark:text-white">
            <span class="text-[#81A6C6]">i</span>Wave
          </h1>

          <p class="text-[11px] text-gray-500 dark:text-gray-400">
            Your iPhone. Your Wave.
          </p>
        </div>

      </div>

      <!-- RIGHT -->
      <div class="flex items-center space-x-3">

        <button
          @click="goToLogin"
          class="px-4 py-2 rounded-lg
                 bg-[#81A6C6] text-white
                 hover:bg-[#AACDDC]
                 shadow-sm transition"
        >
          Login
        </button>

        <button
          @click="emit('open-cart')"
          class="relative p-2.5 rounded-lg
                 bg-white dark:bg-gray-800
                 border border-[#E9EEF5] dark:border-gray-700
                 hover:bg-[#AACDDC] transition"
        >
          🛒

          <span
            class="absolute -top-1 -right-1
                   bg-[#81A6C6] text-white
                   text-xs w-5 h-5 rounded-full flex items-center justify-center"
          >
            {{ cart.itemCount ?? 0 }}
          </span>
        </button>

        <button
          @click="toggleTheme"
          class="p-2.5 rounded-lg
                 bg-white dark:bg-gray-800
                 border border-[#E9EEF5] dark:border-gray-700
                 hover:bg-[#AACDDC]"
        >
          <component
            :is="theme === 'light' ? MoonIcon : SunIcon"
            class="w-5 h-5 text-gray-700 dark:text-gray-200"
          />
        </button>

      </div>

    </div>

  </nav>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'
import { useRouter } from 'vue-router'
import { useCartStore } from '../store/cartStore'

const emit = defineEmits<{
  (e: 'open-cart'): void
}>()

const cart = useCartStore()
const router = useRouter()

const theme = ref(localStorage.getItem('theme') || 'light')

function goToLogin() {
  router.push('/login')
}

function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

watchEffect(() => {
  const root = document.documentElement
  root.classList.remove('light', 'dark')
  root.classList.add(theme.value)
  localStorage.setItem('theme', theme.value)
})
</script>
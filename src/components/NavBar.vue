<template>
  <nav
    class="sticky top-0 z-50
           bg-[#F7F9FC]/80 dark:bg-[#0F172A]/80
           backdrop-blur-xl
           border-b border-[#E9EEF5] dark:border-gray-800
           shadow-md transition-all duration-300"
  >

    <div class="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

      
      <div class="flex items-center cursor-pointer" @click="router.push('/')">

        
        <img src="@/assets/logo.svg" class="h-11 w-11 mr-4" />

      
        <div class="flex flex-col leading-tight">
          <h1 class="text-3xl font-bold text-gray-800 dark:text-white">
            <span class="text-[#81A6C6]">i</span>Wave
          </h1>

          <p class="text-xs text-gray-500 dark:text-gray-400">
            Your iPhone. Your Wave.
          </p>
        </div>

      </div>
      

      
      <div class="flex items-center space-x-4">

        
        <button
  v-if="!auth.isLoggedIn"
  @click="goToLogin"
  class="px-5 py-2.5 text-sm rounded-lg bg-[#81A6C6] text-white"
>
  Login
</button>

<button
  v-else
  @click="auth.logout()"
  class="px-5 py-2.5 text-sm rounded-lg bg-red-500 text-white"
>
  Logout
</button>

        
        <button
          @click="emit('open-cart')"
          class="relative p-3 rounded-lg
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
          class="p-3 rounded-lg
                 bg-white dark:bg-gray-800
                 border border-[#E9EEF5] dark:border-gray-700
                 hover:bg-[#AACDDC]"
        >
          <component
            :is="theme === 'light' ? MoonIcon : SunIcon"
            class="w-6 h-6 text-gray-700 dark:text-gray-200"
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
import { useAuthStore } from '../store/authStore'

const auth = useAuthStore()

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
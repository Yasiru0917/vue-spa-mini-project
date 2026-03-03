<template>
    <nav class="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
    <div class="flex items-center space-x-2">
       <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 64 64" fill="none">
    
    <circle cx="32" cy="32" r="32" class="fill-white dark:fill-gray-900"/>
    
    
    <path 
      d="M16 40c8-12 24-12 32 0" 
      stroke="gold" 
      stroke-width="4" 
      stroke-linecap="round"
    />
    
    
    <line x1="32" y1="16" x2="32" y2="32" stroke="gold" stroke-width="4" stroke-linecap="round"/>
    <circle cx="32" cy="12" r="2" fill="gold"/>
  </svg>
      <h1 class="text-xl font-bold text-gray-900 dark:text-gray-100">
      <span class="text-yellow-500">i</span>Wave
    </h1>
    </div>
    

   <div class="flex items-center space-x-4">
    
        <button
            class="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-blue-700 hover:scale-105 transition transform duration-200"
        >
        Login
        </button>

      
        <button
            class="relative p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-900 dark:text-gray-100 shadow-md hover:shadow-lg hover:scale-105 transition transform duration-200"
>
  
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 7h13l-1.5-7M7 13h10" />
            </svg>

 
            <span
             class="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
         >
            0
            </span>
        </button>
     
        <button
            @click="toggleTheme"
             class="p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-900 dark:text-yellow-400 shadow-md hover:shadow-lg hover:scale-105 transition transform duration-200"
                >
            <component :is="theme === 'light' ? MoonIcon : SunIcon" class="w-6 h-6"/>
        </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'



const theme = ref(localStorage.getItem('theme') || 'light')


watchEffect(() => {
  document.documentElement.classList.remove(theme.value === 'light' ? 'dark' : 'light')
  document.documentElement.classList.add(theme.value)
  localStorage.setItem('theme', theme.value)
})


function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
</script>
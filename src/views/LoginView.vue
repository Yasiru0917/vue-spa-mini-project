<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
    
    <!-- Login Card -->
    <div class="w-[400px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
      
      <!-- Title -->
      <h2 class="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-6">
        Login
      </h2>

      <!-- Username -->
      <input
        type="text"
        placeholder="Username"
        class="w-full mb-4 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <!-- Password -->
      <input
        type="password"
        placeholder="Password"
        class="w-full mb-6 px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <!-- Button -->
      <button
        class="w-full py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
      >
        Login
      </button>

    </div>
  </div>
</template>

<script setup lang="ts">
</script>
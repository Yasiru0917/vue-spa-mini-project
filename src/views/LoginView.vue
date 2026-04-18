<template>
  <div class="min-h-screen flex items-center justify-center
              bg-[#F7F9FC] dark:bg-[#0F172A] transition">

    <!-- Login Card -->
    <div
      class="w-[400px] rounded-2xl p-8 shadow-md
             bg-[#E9EEF5] dark:bg-gray-900
             border border-[#E9EEF5] dark:border-gray-800"
    >

      <!-- Title -->
      <h2 class="text-2xl font-bold text-center mb-6
                 text-gray-800 dark:text-white">
        Login
      </h2>

      <!-- Username -->
      <input
        type="text"
        placeholder="Username"
        class="w-full mb-4 px-4 py-3 rounded-lg
               bg-white dark:bg-gray-800
               text-gray-800 dark:text-white
               placeholder-gray-500 dark:placeholder-gray-400
               border border-[#E9EEF5] dark:border-gray-700
               focus:outline-none
               focus:ring-2 focus:ring-[#81A6C6]
               transition"
      />

      <!-- Password -->
      <input
        type="password"
        placeholder="Password"
        class="w-full mb-6 px-4 py-3 rounded-lg
               bg-white dark:bg-gray-800
               text-gray-800 dark:text-white
               placeholder-gray-500 dark:placeholder-gray-400
               border border-[#E9EEF5] dark:border-gray-700
               focus:outline-none
               focus:ring-2 focus:ring-[#81A6C6]
               transition"
      />

      <!-- Button -->
      <button
        class="w-full py-3 rounded-lg
               bg-[#81A6C6] text-white font-semibold
               hover:bg-[#AACDDC]
               active:scale-95
               transition"
      >
        Login
      </button>

    </div>

  </div>
</template>

<script setup lang="ts">
</script>
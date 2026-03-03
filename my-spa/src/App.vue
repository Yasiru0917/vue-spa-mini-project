<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
    <h1 class="text-5xl font-extrabold text-red-500 mb-4">
      Tailwind Working ✅
    </h1>

    <p class="text-lg text-gray-700 mb-6">
      This is a test of Tailwind utilities: spacing, colors, and typography.
    </p>

    <button class="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-colors">
      Click Me
    </button>

    <div class="mt-6 flex gap-4">
      <div class="w-16 h-16 bg-green-400 rounded-full"></div>
      <div class="w-16 h-16 bg-yellow-400 rounded-full"></div>
      <div class="w-16 h-16 bg-pink-400 rounded-full"></div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'App',
};
</script>
<template>
  <div class="min-h-screen flex items-center justify-center bg-[#F7F9FC] dark:bg-[#0F172A]">

    <div class="w-96 p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg">

      <h1 class="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        Login
      </h1>

      <!-- Username -->
      <input
        v-model="username"
        placeholder="Username"
        class="w-full mb-3 px-4 py-2 rounded border dark:bg-gray-800 dark:text-white"
      />

      <!-- Password -->
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full mb-4 px-4 py-2 rounded border dark:bg-gray-800 dark:text-white"
      />

      <!-- Button -->
      <button
        @click="handleLogin"
        class="w-full py-2 bg-[#81A6C6] text-white rounded hover:bg-[#6f97b8] transition"
      >
        Login
      </button>

      <!-- Error -->
      <p v-if="error" class="text-red-500 text-sm mt-3 text-center">
        {{ error }}
      </p>

    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginUser } from '../services/auth'
import { useAuthStore } from '../store/authStore'

const username = ref('kminchelle')
const password = ref('0lelplR')
const error = ref('')

const router = useRouter()
const auth = useAuthStore()

async function handleLogin() {
  try {
    error.value = ''

    const u = (username.value || '').trim()
    const p = (password.value || '').trim()

    console.log('FINAL SEND:', u, p)

    const data = await loginUser(u, p)

    auth.setUser(data)
    router.push('/')
  } catch (e: any) {
    console.log('LOGIN ERROR:', e.message)
    error.value = e.message || 'Invalid credentials'
  }
}
</script>
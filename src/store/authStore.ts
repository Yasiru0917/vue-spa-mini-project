import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    token: localStorage.getItem('token') || '',
    isLoggedIn: !!localStorage.getItem('token')
  }),

  actions: {
    setUser(data: any) {
      this.user = data
      this.token = data.token
      this.isLoggedIn = true

      localStorage.setItem('user', JSON.stringify(data))
      localStorage.setItem('token', data.token)
    },

    logout() {
      this.user = null
      this.token = ''
      this.isLoggedIn = false

      localStorage.removeItem('user')
      localStorage.removeItem('token')
    }
  }
})
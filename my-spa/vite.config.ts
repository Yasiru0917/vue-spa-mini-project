import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"; // <-- make sure this exists

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
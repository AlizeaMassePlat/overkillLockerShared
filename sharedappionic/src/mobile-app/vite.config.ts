/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  },
  define: {
    '__VUE_OPTIONS_API__': true,  // ou false, selon vos besoins
    '__VUE_PROD_DEVTOOLS__': false, // ou true, selon vos besoins
    '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__': true // Ajouter ce flag
  }
})

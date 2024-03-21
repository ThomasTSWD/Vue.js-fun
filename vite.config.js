import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // !!!
  //base: 'dist/' // local
  //base: '/Vue.js-fun/'// pour github pages
  //base vide pour Pour netlify 
  base: '/'
})

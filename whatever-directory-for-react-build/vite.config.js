import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
  ,
  server:{
    proxy:{
      '/': 'http://localhost:5173'
    }
  }
})

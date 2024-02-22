import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Using the "proxy" option to forward API requests to the Express server
      '/api': 'http://localhost:3001'
    }
  }
})

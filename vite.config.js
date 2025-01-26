import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8000, // Ensure it always runs on port 5173
  },
  plugins: [react()],
})

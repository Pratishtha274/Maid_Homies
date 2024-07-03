import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'client', // Ensure this is correctly set if your source files are in a subdirectory
  build: {
    outDir: 'dist',
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

//process.env.VITE_BASE_PATH || '/movie-react-app',
// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  plugins: [
    react()
  ],
})

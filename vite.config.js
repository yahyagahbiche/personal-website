import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this project at yahyagahbiche.github.io/personal-website/,
  // so built asset paths need this prefix. If you ever move to a custom domain
  // (served from the root), change this back to '/'.
  base: '/personal-website/',
})

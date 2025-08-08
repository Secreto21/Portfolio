import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Portfolio/",  // ¡Exacto! Mayúsculas, minúsculas y barra final
  plugins: [react()]
})

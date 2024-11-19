import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://SV-Hello.github.io/SV-Hello.github.io/",
  plugins: [react()],
})

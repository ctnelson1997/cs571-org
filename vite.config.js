import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import CS571Configurator from './src/config/configurator'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: CS571Configurator.BASE,
  build: {
    sourcemap: true,
},
})

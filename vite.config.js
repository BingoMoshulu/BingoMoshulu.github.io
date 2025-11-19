import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // 对于自定义域名，使用根路径
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
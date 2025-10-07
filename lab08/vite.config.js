import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // redirect node 'crypto' imports to the browser-friendly implementation
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      util: 'util/',
      buffer: 'buffer/',
    },
  },
  optimizeDeps: {
    include: ['crypto-browserify', 'buffer', 'stream-browserify']
  },
})

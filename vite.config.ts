import path from 'path'
import { defineConfig } from 'vite'
import loadPlugins from './build/plugin'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [...loadPlugins(command)],
}))

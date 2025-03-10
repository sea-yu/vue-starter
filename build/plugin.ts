import { compression } from 'vite-plugin-compression2'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

const commonPlugins = [
  vue(),
  Pages(),
  Components({
    dts: true,
  }),
  AutoImport({
    imports: [
      'vue',
      'vue/macros',
      'vue-router',
      '@vueuse/core',
    ],
    dts: true,
    dirs: [],
    vueTemplate: true,
  }),
]

const devPlugins = [
  ...commonPlugins,
]

const buildPlugins = [
  ...commonPlugins,
  compression(),
]

const loadPlugins = (command: 'build' | 'serve') => {
  return command == 'build' ? buildPlugins : devPlugins
}

export default loadPlugins

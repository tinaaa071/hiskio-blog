import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
// vite.components
import Components from 'unplugin-vue-components/vite'
// unplugin-icon
import Icons from 'unplugin-icons/vite'
// 自動解析 icon
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue(),
    Pages(),
    Components({
      resolvers: [
        IconsResolver({
          prefix: false,
          enabledCollections: [
            'heroicons-outline',
            'ri'
          ]
        }),
      ]
    }),
    Icons()
  ],
})

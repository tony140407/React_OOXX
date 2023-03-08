import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
// https://vitejs.dev/config/

import { resolve } from 'path'

export default defineConfig({
    plugins: [UnoCSS(), react()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            types: resolve(__dirname, 'types'),
        },
    },
})

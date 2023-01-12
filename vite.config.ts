import { defineConfig } from 'vite'

import solidPlugin from 'vite-plugin-solid'
import eslint from 'vite-plugin-eslint'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
    root: './src/client',
    plugins: [solidPlugin(), eslint(), tsconfigPaths()],
    server: {
        port: 3000,
        host: true,
        strictPort: true,
        hmr: {
            port: 3010,
        },
        watch: {
            usePolling: true,
        },
    },
    build: {
        target: 'esnext',
    },
})

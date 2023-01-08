import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
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
});

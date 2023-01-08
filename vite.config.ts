import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 3000,
    host: true,
    hmr: {
      host: '0.0.0.0',
      port: 3010,
    },
  },
  build: {
    target: 'esnext',
  },
});

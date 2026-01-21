import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { mockDevServerPlugin } from 'vite-plugin-mock-dev-server';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), mockDevServerPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5173',
      },
    },
  },
});

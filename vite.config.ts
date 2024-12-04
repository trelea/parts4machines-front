import path from 'path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 1600,
  },
  plugins: [react()],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});

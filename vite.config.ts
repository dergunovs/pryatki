import * as path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  server: { port: 3000 },
  build: { target: 'esnext' },
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
  plugins: [vue()],
});

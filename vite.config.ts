import { defineConfig } from 'vite';
import dns from 'dns';
import react from '@vitejs/plugin-react';
import * as path from 'path';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    port: 3000,
    host: 'localhost',
    open: '/',
    proxy: {
      '/api': {
        target: 'http://localhost:3008',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: [react()],
});

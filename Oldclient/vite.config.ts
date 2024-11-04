import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {}, // This allows Vite to use the postcss.config.js file automatically
  },
});

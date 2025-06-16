import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@assets': '/src/assets',
      '@store': '/src/store',
      '@utils': '/src/utils',
      '@constants': '/src/constants',
      '@context': '/src/context',
      '@pages': '/src/pages',
      '@styles': '/src/styles',
      '@router': '/src/router',
      '@ui': '/src/ui',
      '@hooks': '/src/hooks',
      '@api': '/src/api',
    },
  },
  base: '/ModsenMappie/',
});

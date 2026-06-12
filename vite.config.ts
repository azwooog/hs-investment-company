import { defineConfig } from 'vite';
import tanstack from '@tanstack/react-start/plugin';
import viteReact from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [tanstack(), viteReact()],
  nitro: {
    preset: 'vercel',   // ← critical for Vercel deployment
  },
});
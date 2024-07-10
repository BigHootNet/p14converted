import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/p14converted/', // Base URL pour GitHub Pages
  build: {
    outDir: 'dist' // Dossier de sortie pour le build
  }
});

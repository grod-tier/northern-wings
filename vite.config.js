import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  define: mode === 'agentation' ? { 'process.env.NODE_ENV': '"development"' } : {},
  build: mode === 'agentation'
    ? {
        outDir: 'public',
        emptyOutDir: false,
        lib: {
          entry: 'src/agentation-overlay.jsx',
          name: 'AgentationOverlay',
          fileName: () => 'agentation-bundle.js',
          formats: ['iife'],
        },
        rollupOptions: {
          output: {
            inlineDynamicImports: true,
            intro: 'var process = { env: { NODE_ENV: "development" } };',
          },
        },
      }
    : {
        outDir: 'public',
        emptyOutDir: true,
      },
}));

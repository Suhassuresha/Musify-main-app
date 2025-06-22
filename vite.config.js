import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'main_app',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthContext': './src/AuthContext.jsx',
      },
      remotes: {
        music_library: 'https://musify-music-library.vercel.app/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
      dev: true,
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});

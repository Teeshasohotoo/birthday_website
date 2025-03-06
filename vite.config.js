import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Add this if using React, remove if not

export default defineConfig({
  plugins: [react()], // Remove this line if not using React

  // ✅ Required for GitHub Pages Deployment
  base: '/your-repo-name/', // Replace with your actual GitHub repository name

  server: {
    port: 5173,          // Ensures the server runs on port 5173
    host: '0.0.0.0',     // Allows access from external networks (needed for ngrok)
    strictPort: true,    // Ensures Vite always uses the specified port
    cors: true,          // Enables Cross-Origin Resource Sharing (CORS)
    hmr: {
      clientPort: 443,   // Fixes WebSocket errors when using HTTPS with ngrok
    },
    allowedHosts: [
      '.ngrok-free.app'  // Allows all ngrok-generated URLs to access the site
    ]
  },

  // ✅ Ensures correct paths for assets in GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  }
});

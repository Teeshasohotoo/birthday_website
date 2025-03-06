import { defineConfig } from 'vite';

export default defineConfig({
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
  }
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Makes the dev server accessible over the network
    port: 5173        // Set the port to 5173 or any other port you prefer
  }
});

import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    // Enable hot module replacement (HMR) - this is what auto-refreshes the page
    watch: {
      usePolling: true, // Necessary for some environments (like Docker/ WSL) to detect file changes
    },
  },
});

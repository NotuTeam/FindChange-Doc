import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base path is empty for root deployment on Vercel.
// Change if deploying under a subpath.
export default defineConfig({
  plugins: [react()],
  base: '/',
});

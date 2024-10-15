import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Mouthful-Magic/', // Update this to match your GitHub repo name
  plugins: [react()],
});

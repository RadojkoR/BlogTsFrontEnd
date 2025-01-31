import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [react()],
  optimizeDeps: {
    include: ['dayjs'], // Ensure dayjs is properly bundled
  },
})

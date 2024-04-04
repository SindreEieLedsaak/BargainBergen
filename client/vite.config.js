import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig((props) => {
  const env = loadEnv(props.mode, process.cwd(), "VITE");
  const envWithProcessPrefix = {
    "process.env": `${JSON.stringify(env)}`,
  };
  return {
    plugins: [react()],
    define: envWithProcessPrefix,
    server: {
      proxy: {
        // Using the "proxy" option to forward API requests to the Express server
        '/api': 'http://localhost:3001'
      }
    }
  };
});

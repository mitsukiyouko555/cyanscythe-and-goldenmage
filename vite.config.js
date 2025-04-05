import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const isBuild = command === 'build'

  return {
    base: isBuild ? "/cyanscythe-and-goldenmage/" : "/",
    plugins: [react()],
  }
})
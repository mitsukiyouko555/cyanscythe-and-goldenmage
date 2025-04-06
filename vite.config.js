//This was written with Gemini's help so that i don't have to keep toggling between the 2 exports when developing vs deploying since sometimes i forget to switch and after deploying i see a blank page and troubleshoot for a bit before remembering that i should have switched it...

import { defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command}) => {
  const isBuild = command === 'build'

  return {
    base: isBuild ? "/cyanscythe-and-goldenmage/" : "/",
    plugins: [react()],
  }
})

// export default defineConfig({
// plugins: [react()],
// })

// export default defineConfig({
//   base: "/cyanscythe-and-goldenmage",
//   plugins: [react()],
//   })
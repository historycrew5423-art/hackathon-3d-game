import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const base = '/hackathon-3d-game/arcade/games/boxing/';
export default defineConfig({
  base,
  plugins: [
    { name: 'arcade-asset-paths', enforce: 'pre', transform(code, id) {
      if (!id.includes('/src/')) return;
      return code.replace(/(["'`])\/(models|audio|mediapipe|ui)\//g, `$1${base}$2/`);
    } },
    react()
  ]
});

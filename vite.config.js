import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";
import pluginRewriteAll from "vite-plugin-rewrite-all";

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react(), pluginRewriteAll()],
   css: {
      preprocessorOptions: {
         scss: {
            implementation: sass,
         },
      },
   },
});

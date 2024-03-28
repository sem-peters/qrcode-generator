import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { fileURLToPath } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "/",

  build: {
    outDir: "docs",
  },

  resolve: {
    alias: [
      {
        'find': '@public',
        'replacement': fileURLToPath(new URL('./public', import.meta.url))
      },
      {
        'find': '@src',
        'replacement': fileURLToPath(new URL('./src', import.meta.url))
      }
    ]
  }
});

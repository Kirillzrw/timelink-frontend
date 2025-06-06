import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import Inspect from "vite-plugin-inspect"
import { visualizer } from "rollup-plugin-visualizer"
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  dev: {
    sourcemap: false,
  },
  esbuild: {
    sourcemap: false,
  },
  plugins: [
    react(),
    tailwindcss(),
    Inspect(),
    visualizer({
      filename: "dist/stats.html",
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  cacheDir: "node_modules/.vite",
  optimizeDeps: {
    exclude: ["@mantine/core", "@mantine/hooks"],
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@features": path.resolve(__dirname, "src/features"),
      "@layouts": path.resolve(__dirname, "src/layouts"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@providers": path.resolve(__dirname, "src/providers"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@types": path.resolve(__dirname, "src/types"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@views": path.resolve(__dirname, "src/views"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
  logLevel: "info",
})

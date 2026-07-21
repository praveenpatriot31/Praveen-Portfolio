import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Maps your workspaces cleanly so you can use smooth absolute paths like "@/components/Hero"
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext", // Leverages modern JS execution limits for smaller bundle sizes
    sourcemap: false, // Disables production sourcemaps to keep build trees lightweight
    rollupOptions: {
      output: {
        // Separates massive libraries into isolated cache files to lower initial page-load sizes
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "vendor-motion";
            if (id.includes("react")) return "vendor-react-core";
            return "vendor-utilities";
          }
        },
      },
    },
    chunkSizeWarningLimit: 600, // Adjusted safely around premium motion asset thresholds
  },
});
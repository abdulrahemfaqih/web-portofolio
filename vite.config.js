import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
   base: "./", // Ini penting untuk relative paths
   build: {
      outDir: "dist",
      assetsDir: "assets",
   },
   define: {
      "process.env": process.env,
   },
});




import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Ensure this import is present

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Ensure this is correct
    },
  },
});
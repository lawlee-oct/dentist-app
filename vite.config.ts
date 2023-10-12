import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Định nghĩa alias cho đường dẫn gốc "src"
      'src': '/src',
    },
  },
});

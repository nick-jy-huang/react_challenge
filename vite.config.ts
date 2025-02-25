import { defineConfig } from "vite";
  import react from "@vitejs/plugin-react";
  
  // https://vitejs.dev/config/
  export default defineConfig({
      plugins: [react()],
      resolve: {
      alias: {
          "@": "/src",
          "@components": "/src/components",
          "@pages": "/src/pages",
          "@redux": "/src/redux",
          "@api": "/src/api",
          "@types": "/src/types",
          "@styles": "/src/styles",
          "@images": "/src/images",
      }
    }
  });
  
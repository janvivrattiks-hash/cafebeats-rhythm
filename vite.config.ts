import { defineConfig, ViteDevServer } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    proxy: {
      '/webhook': {
        target: 'https://jahnvivrattiks.app.n8n.cloud',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    {
      name: "pdf-rewrite",
      configureServer(server: ViteDevServer) {
        server.middlewares.use((req, res, next) => {
          if (req.url === "/menu/cafebeates-dumas") {
            req.url = "/menu/cafebeates-dumas.pdf";
          }
          next();
        });
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

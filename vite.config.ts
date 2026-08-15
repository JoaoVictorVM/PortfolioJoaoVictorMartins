import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  server: {
    port: Number(process.env.PORT) || 3000,
  },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      // Pré-renderiza a rota catch-all como 404.html, servido pelo GitHub Pages
      // em qualquer URL inexistente. O estado desidratado gerado aqui casa com
      // o que o cliente calcula nessas URLs, evitando erro de hidratação.
      pages: [
        {
          path: "/__not-found",
          prerender: { enabled: true, outputPath: "404.html" },
          sitemap: { exclude: true },
        },
      ],
      prerender: {
        enabled: true,
        crawlLinks: true,
        filter: ({ path }) => !path.startsWith("/pdf/"),
      },
    }),
    viteReact(),
  ],
});

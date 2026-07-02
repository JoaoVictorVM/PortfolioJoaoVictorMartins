import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    tsConfigPaths(),
    tailwindcss(),
    tanstackStart({
      prerender: {
        // HTML estático real por rota (SEO). Ver PRD §5.
        enabled: true,
        crawlLinks: true,
      },
    }),
    // O plugin do React deve vir depois do plugin do TanStack Start.
    viteReact(),
  ],
});

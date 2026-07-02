/// <reference types="vite/client" />
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { PreferenceProvider } from "@/context/PreferenceProvider";
import appCss from "@/shared/styles/globals.css?url";
import "@fontsource-variable/inter";

const preferenceScript = `(function(){try{var d=document.documentElement;var t=localStorage.getItem('portfolio-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}d.dataset.theme=t;var l=localStorage.getItem('portfolio-language');if(l==='pt'||l==='en'){d.dataset.language=l;d.lang=l==='pt'?'pt-BR':'en';}}catch(e){}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "João Victor Ventura Martins" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: () => (
    <main>
      <h1>404</h1>
    </main>
  ),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preferenceScript }} />
        <HeadContent />
      </head>
      <body>
        <PreferenceProvider>{children}</PreferenceProvider>
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}

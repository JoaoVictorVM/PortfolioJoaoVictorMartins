import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";

export function Shell({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="conteudo" className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}

"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/header/header";
import { Footer } from "@/components/layout/footer/footer";

export default function ConditionalShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname() || "";
  const hideShell = pathname.startsWith("/links");

  return (
    <>
      {!hideShell && <Header />}
      {children}
      {!hideShell && <Footer />}
    </>
  );
}

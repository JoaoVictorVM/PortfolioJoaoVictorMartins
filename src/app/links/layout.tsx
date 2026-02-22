import React from "react";

export default function LinksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Layout específico para /links — não inclui Header/Footers
  return <>{children}</>;
}

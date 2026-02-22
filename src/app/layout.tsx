import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import ConditionalShell from "@/components/layout/conditionalShell";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "João Victor Martins | Portfólio",
  description:
    "Desenvolvedor FullStack com foco em Frontend. Crio aplicações web modernas, responsivas e performáticas utilizando React, Next.js, Node.js e boas práticas de desenvolvimento.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className={`antialiased`}>
        <ConditionalShell>{children}</ConditionalShell>
      </body>
    </html>
  );
}

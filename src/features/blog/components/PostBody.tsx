import type { ReactNode } from "react";

interface PostBodyProps {
  children: ReactNode;
}

/**
 * Aplica a tipografia de leitura do post. As regras vivem em `.post-body`
 * (globals.css), então o conteúdo é escrito com HTML semântico puro.
 */
export function PostBody({ children }: PostBodyProps) {
  return <div className="post-body">{children}</div>;
}

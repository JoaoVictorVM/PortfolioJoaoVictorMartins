import { useMemo } from "react";

import {
  highlight,
  type CodeLanguage,
  type TokenKind,
} from "@/features/blog/lib/highlight";

const CLASS_BY_KIND: Record<TokenKind, string> = {
  plain: "text-syntax-plain",
  comment: "text-syntax-comment italic",
  keyword: "text-syntax-keyword",
  string: "text-syntax-string",
  function: "text-syntax-function",
  number: "text-syntax-number",
  punctuation: "text-syntax-punctuation",
};

interface CodeBlockProps {
  code: string;
  language?: CodeLanguage;
}

/**
 * Bloco de código do post com realce de sintaxe no tema Vesper. As cores são
 * tokens semânticos, então acompanham a troca de tema junto com o resto do site.
 */
export function CodeBlock({ code, language = "ts" }: CodeBlockProps) {
  const tokens = useMemo(() => highlight(code, language), [code, language]);

  return (
    <pre>
      <code>
        {tokens.map((token, index) => (
          <span key={index} className={CLASS_BY_KIND[token.kind]}>
            {token.value}
          </span>
        ))}
      </code>
    </pre>
  );
}

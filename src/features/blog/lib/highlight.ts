/**
 * Realce de sintaxe mínimo, feito à mão, para os blocos de código dos posts.
 * Roda no prerender: o HTML já sai colorido e nenhum JS de highlight vai pro
 * cliente. Cobre só o necessário (TypeScript/JavaScript e shell) — se algum dia
 * o blog tiver outras linguagens, vale trocar por um highlighter de verdade.
 */

export type CodeLanguage = "ts" | "shell";

export type TokenKind =
  | "plain"
  | "comment"
  | "keyword"
  | "string"
  | "function"
  | "number"
  | "punctuation";

export interface SyntaxToken {
  kind: TokenKind;
  value: string;
}

const TS_KEYWORDS = [
  "as",
  "async",
  "await",
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "declare",
  "default",
  "do",
  "else",
  "enum",
  "export",
  "extends",
  "false",
  "finally",
  "for",
  "from",
  "function",
  "if",
  "implements",
  "import",
  "in",
  "instanceof",
  "interface",
  "let",
  "new",
  "null",
  "of",
  "private",
  "protected",
  "public",
  "readonly",
  "return",
  "static",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "type",
  "typeof",
  "undefined",
  "var",
  "void",
  "while",
  "yield",
] as const;

/**
 * A ordem das alternativas é o que define a precedência: comentário e string
 * vêm primeiro para que nada dentro deles seja tokenizado de novo.
 */
const TS_PATTERN = new RegExp(
  [
    String.raw`(?<comment>\/\/[^\n]*|\/\*[\s\S]*?\*\/)`,
    String.raw`(?<string>'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|\`(?:\\.|[^\`\\])*\`)`,
    String.raw`(?<fn>@?[A-Za-z_$][\w$]*(?=\s*\())`,
    String.raw`(?<decorator>@[A-Za-z_$][\w$]*)`,
    String.raw`(?<keyword>\b(?:${TS_KEYWORDS.join("|")})\b)`,
    String.raw`(?<number>\b\d[\d_]*(?:\.\d+)?\b)`,
    String.raw`(?<punctuation>[{}()[\]<>.,;:?!=+\-*/%&|^~]+)`,
  ].join("|"),
  "g",
);

const SHELL_PATTERN = new RegExp(
  [
    String.raw`(?<comment>#[^\n]*)`,
    String.raw`(?<string>'(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")`,
    String.raw`(?<fn>(?<=^|\n)[A-Za-z_][\w.-]*)`,
    String.raw`(?<keyword>--?[A-Za-z][\w-]*)`,
  ].join("|"),
  "g",
);

const PATTERN_BY_LANGUAGE: Record<CodeLanguage, RegExp> = {
  ts: TS_PATTERN,
  shell: SHELL_PATTERN,
};

const KIND_BY_GROUP: Record<string, TokenKind> = {
  comment: "comment",
  string: "string",
  fn: "function",
  decorator: "function",
  keyword: "keyword",
  number: "number",
  punctuation: "punctuation",
};

function resolveKind(groups: Record<string, string | undefined>): TokenKind {
  for (const [name, value] of Object.entries(groups)) {
    if (value === undefined) continue;
    const kind = KIND_BY_GROUP[name];
    if (kind !== undefined) return kind;
  }
  return "plain";
}

/**
 * Quebra o código em tokens. O texto que não casa com nenhuma regra vira
 * `plain`, então a concatenação dos valores sempre reproduz o código original.
 */
export function highlight(code: string, language: CodeLanguage): SyntaxToken[] {
  const pattern = PATTERN_BY_LANGUAGE[language];
  const tokens: SyntaxToken[] = [];
  let cursor = 0;

  for (const match of code.matchAll(pattern)) {
    const value = match[0];
    if (value === "") continue;

    if (match.index > cursor) {
      tokens.push({ kind: "plain", value: code.slice(cursor, match.index) });
    }
    tokens.push({ kind: resolveKind(match.groups ?? {}), value });
    cursor = match.index + value.length;
  }

  if (cursor < code.length) {
    tokens.push({ kind: "plain", value: code.slice(cursor) });
  }

  return tokens;
}

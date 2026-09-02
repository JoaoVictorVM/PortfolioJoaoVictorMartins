import { isValidElement, type ReactNode } from "react";

const WORDS_PER_MINUTE = 200;

function hasChildren(props: unknown): props is { children?: ReactNode } {
  return typeof props === "object" && props !== null && "children" in props;
}

function isNodeList(node: ReactNode): node is readonly ReactNode[] {
  return Array.isArray(node);
}

function countWords(node: ReactNode): number {
  if (typeof node === "string") {
    return node.split(/\s+/).filter(Boolean).length;
  }

  if (isNodeList(node)) {
    return node.reduce<number>((total, child) => total + countWords(child), 0);
  }

  if (isValidElement(node) && hasChildren(node.props)) {
    return countWords(node.props.children);
  }

  return 0;
}

/**
 * Estima o tempo de leitura a partir do texto do próprio post. Só conta o que
 * está escrito diretamente no JSX — texto vindo de componentes aninhados fica
 * de fora.
 */
export function getReadingMinutes(content: ReactNode): number {
  return Math.max(1, Math.round(countWords(content) / WORDS_PER_MINUTE));
}

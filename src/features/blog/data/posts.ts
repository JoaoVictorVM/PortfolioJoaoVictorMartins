import type { ReactNode } from "react";
import { getReadingMinutes } from "@/features/blog/lib/readingTime";
import { npmTerrenoPerigoso } from "@/features/blog/posts/npm-terreno-perigoso";
import { postDeExemplo } from "@/features/blog/posts/post-de-exemplo";
import { typescriptEmGo } from "@/features/blog/posts/typescript-em-go";

/** O que cada arquivo de post declara. */
export interface BlogPostSource {
  /** Identificador do post na URL: /blog/{slug} */
  slug: string;
  title: string;
  /** Resumo usado na listagem e como description de SEO do post. */
  summary: string;
  /** Data de publicação em ISO (YYYY-MM-DD), formatada por locale na exibição. */
  date: string;
  /** Marca manualmente os posts que aparecem no bloco de blog da home. */
  featured: boolean;
  Content: () => ReactNode;
}

/** O post já com os metadados derivados do conteúdo. */
export interface BlogPost extends BlogPostSource {
  readingMinutes: number;
}

const sources: readonly BlogPostSource[] = [
  typescriptEmGo,
  npmTerrenoPerigoso,
  postDeExemplo,
];

export const blogPosts: readonly BlogPost[] = sources
  .map((source) => ({
    ...source,
    readingMinutes: getReadingMinutes(source.Content()),
  }))
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): readonly BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

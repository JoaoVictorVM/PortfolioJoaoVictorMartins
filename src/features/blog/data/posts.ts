import type { ReactNode } from "react";
import { postDeExemplo } from "@/features/blog/posts/post-de-exemplo";

export interface BlogPost {
  /** Identificador do post na URL: /blog/{slug} */
  slug: string;
  title: string;
  /** Resumo usado na listagem e como description de SEO do post. */
  summary: string;
  /** Data de publicação em ISO (YYYY-MM-DD), formatada por locale na exibição. */
  date: string;
  /** Marca manualmente os posts que aparecem no bloco Writing da home. */
  featured: boolean;
  Content: () => ReactNode;
}

const posts: readonly BlogPost[] = [postDeExemplo];

export const blogPosts: readonly BlogPost[] = [...posts].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): readonly BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

import { Link } from "@tanstack/react-router";
import { inlineLinkClass } from "@/components/ui/inlineLink";
import { blogPosts } from "@/features/blog/data/posts";
import { PostDate } from "@/features/blog/components/PostDate";

/**
 * Listagem provisória. O layout final ainda será definido — quando for, este é
 * o único arquivo que muda.
 */
export function PostList() {
  return (
    <ul className="space-y-6">
      {blogPosts.map((post) => (
        <li key={post.slug} className="space-y-1.5">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className={inlineLinkClass}
            >
              {post.title}
            </Link>
            <PostDate date={post.date} />
          </div>
          <p className="text-detail text-sm">{post.summary}</p>
        </li>
      ))}
    </ul>
  );
}

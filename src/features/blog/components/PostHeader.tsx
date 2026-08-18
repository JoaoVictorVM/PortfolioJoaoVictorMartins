import { BackLink } from "@/components/layout/BackLink";
import { PostDate } from "@/features/blog/components/PostDate";
import { useReveal } from "@/shared/hooks/useReveal";
import { cn } from "@/shared/lib/cn";

interface PostHeaderProps {
  title: string;
  date: string;
  backLabel: string;
}

export function PostHeader({ title, date, backLabel }: PostHeaderProps) {
  const { ref, isVisible } = useReveal();

  return (
    <div ref={ref} className="relative mb-10">
      <BackLink label={backLabel} to="/blog" />
      <div>
        <h1
          className={cn(
            "fast-fade-up text-text text-lg delay-200",
            isVisible && "visible",
          )}
        >
          {title}
        </h1>
        <PostDate
          date={date}
          className={cn("fast-fade-up block delay-250", isVisible && "visible")}
        />
      </div>
    </div>
  );
}

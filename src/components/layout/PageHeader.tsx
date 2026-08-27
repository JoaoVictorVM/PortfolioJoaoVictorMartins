import { useReveal } from "@/shared/hooks/useReveal";
import { cn } from "@/shared/lib/cn";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  const { ref, isVisible } = useReveal();

  return (
    <div ref={ref} className="mb-10">
      <h1
        className={cn(
          "fast-fade-up text-text text-lg delay-200",
          isVisible && "visible",
        )}
      >
        {title}
      </h1>
      <p
        className={cn(
          "fast-fade-up text-detail text-sm delay-250",
          isVisible && "visible",
        )}
      >
        {subtitle}
      </p>
    </div>
  );
}

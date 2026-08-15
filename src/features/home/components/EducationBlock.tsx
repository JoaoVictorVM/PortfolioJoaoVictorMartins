import { useI18n } from "@/shared/hooks/useI18n";
import { cn } from "@/shared/lib/cn";

interface EducationBlockProps {
  isVisible: boolean;
}

export function EducationBlock({ isVisible }: EducationBlockProps) {
  const { home } = useI18n();
  const { education } = home;

  return (
    <div
      className={cn(
        "text-appear flex flex-col gap-6 delay-200",
        isVisible && "visible",
      )}
    >
      <h2 className="text-detail text-sm font-normal">{education.title}</h2>

      <div className="grid gap-6 md:grid-cols-2 md:gap-12">
        {education.items.map((item) => (
          <article key={item.course} className="space-y-1.5">
            <h3 className="text-text font-normal">{item.course}</h3>
            <p className="text-detail text-sm">
              {item.institution} · {item.period}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

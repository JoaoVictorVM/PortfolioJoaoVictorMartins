import { usePreference } from "@/shared/hooks/usePreference";
import { formatDate } from "@/shared/lib/date";
import { cn } from "@/shared/lib/cn";

interface PostDateProps {
  date: string;
  className?: string;
}

export function PostDate({ date, className }: PostDateProps) {
  const { language } = usePreference();

  return (
    <time dateTime={date} className={cn("text-detail text-sm", className)}>
      {formatDate(date, language)}
    </time>
  );
}

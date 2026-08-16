export interface TimelineEntry {
  period: string;
  title: string;
  description: string;
}

interface AboutTimelineProps {
  entries: readonly TimelineEntry[];
}

export function AboutTimeline({ entries }: AboutTimelineProps) {
  return (
    <ol className="border-line space-y-6 border-l pl-6">
      {entries.map((entry) => (
        <li key={entry.title} className="space-y-1">
          <p className="text-detail text-sm">{entry.period}</p>
          <h3 className="text-text relative font-normal">
            <span
              aria-hidden
              className="bg-detail absolute top-1/2 -left-7 size-2 -translate-y-1/2 rounded-full"
            />
            {entry.title}
          </h3>
          <p className="text-detail text-sm">{entry.description}</p>
        </li>
      ))}
    </ol>
  );
}

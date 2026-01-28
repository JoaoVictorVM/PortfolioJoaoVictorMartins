interface AvailabilityBadgeProps {
  text?: string;
}

export function AvailabilityBadge({ 
  text = "Disponível para novos projetos" 
}: AvailabilityBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span className="text-sm text-emerald-400 font-medium">{text}</span>
    </div>
  );
}
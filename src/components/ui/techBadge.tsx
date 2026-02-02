interface TechBadgeProps {
  name: string;
  icon: string;
  size?: "sm" | "md";
}

export function TechBadge({ name, icon, size = "md" }: TechBadgeProps) {
  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
  };

  return (
    <div
      className={`flex items-center gap-2 bg-[var(--cor-escuro-6)] backdrop-blur-sm rounded-full border border-[var(--cor-escuro-7)] ${sizes[size]}`}
    >
      <img
        src={icon}
        alt={name}
        className={`${iconSizes[size]} object-contain`}
      />
      <span className="font-medium text-white">{name}</span>
    </div>
  );
}
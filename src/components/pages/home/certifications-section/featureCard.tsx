import type { ReactNode } from "react";

export type FeatureColor = "blue" | "purple" | "cyan" | "amber" | "green" | "rose";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  color?: FeatureColor;
}

const colorStyles: Record<FeatureColor, { icon: string; bg: string; border: string; gradient: string }> = {
  blue: {
    icon: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    gradient: "bg-gradient-to-br from-blue-500/5 via-transparent to-transparent",
  },
  purple: {
    icon: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    gradient: "bg-gradient-to-br from-purple-500/5 via-transparent to-transparent",
  },
  cyan: {
    icon: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    gradient: "bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent",
  },
  amber: {
    icon: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    gradient: "bg-gradient-to-br from-amber-500/5 via-transparent to-transparent",
  },
  green: {
    icon: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    gradient: "bg-gradient-to-br from-green-500/5 via-transparent to-transparent",
  },
  rose: {
    icon: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/30",
    gradient: "bg-gradient-to-br from-rose-500/5 via-transparent to-transparent",
  },
};

export function FeatureCard({ icon, title, color = "blue" }: FeatureCardProps) {
  const styles = colorStyles[color];

  return (
    <div className={`relative flex items-center gap-4 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800 hover:${styles.border} transition-all overflow-hidden group`}>
      {/* Gradient background effect */}
      <div className={`absolute inset-0 ${styles.gradient}`} />
      
      {/* Icon container */}
      <div className={`relative flex items-center justify-center w-12 h-12 rounded-xl ${styles.bg} ${styles.border} border ${styles.icon}`}>
        {icon}
      </div>
      
      <span className="relative text-white font-medium">{title}</span>
    </div>
  );
}

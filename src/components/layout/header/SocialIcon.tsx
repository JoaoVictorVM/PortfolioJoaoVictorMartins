import React from "react";
import { Instagram, Github, Linkedin } from "lucide-react";

type IconName = "instagram" | "github" | "linkedin";

interface SocialIconProps {
  href: string;
  label?: string;
  icon: IconName;
  size?: "sm" | "md" | "lg";
  className?: string;
  openInNewTab?: boolean;
}

export function SocialIcon({
  href,
  label,
  icon,
  size = "md",
  className = "",
  openInNewTab = true,
}: SocialIconProps) {
  const sizes: Record<typeof size, string> = {
    sm: "w-8 h-8",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const iconSizes: Record<typeof size, number> = {
    sm: 14,
    md: 16,
    lg: 20,
  };

  const ariaLabel = label ?? `Abrir ${icon}`;

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={`${sizes[size]} inline-flex items-center justify-center rounded-full
        bg-[rgba(255,255,255,0.03)] border border-white/10 text-white
        hover:bg-[rgba(255,255,255,0.06)] focus:outline-none focus:ring-2 focus:ring-[rgba(255,255,255,0.08)]
        transition-colors duration-200 ${className}`}
      {...(openInNewTab
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <SocialLucide icon={icon} size={iconSizes[size]} />
    </a>
  );
}

function SocialLucide({ icon, size }: { icon: IconName; size: number }) {
  const commonProps = {
    size,
    strokeWidth: 1.5,
    className: "text-white",
    "aria-hidden": true,
  } as const;

  switch (icon) {
    case "instagram":
      return <Instagram {...commonProps} />;

    case "github":
      return <Github {...commonProps} />;

    case "linkedin":
      return <Linkedin {...commonProps} />;

    default:
      return null;
  }
}

export function SocialIcons({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const links: { href: string; icon: IconName; label: string }[] = [
    {
      href: "https://www.instagram.com/yourprofile",
      icon: "instagram",
      label: "Instagram",
    },
    {
      href: "https://www.github.com/yourprofile",
      icon: "github",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/yourprofile",
      icon: "linkedin",
      label: "LinkedIn",
    },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {links.map((l) => (
        <SocialIcon
          key={l.icon}
          href={l.href}
          icon={l.icon}
          label={l.label}
          size={size}
        />
      ))}
    </div>
  );
}

export default SocialIcons;

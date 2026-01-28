import React from "react"
import { FeatureCard, type FeatureColor } from "./featureCard";
import {
  Shield,
  Sparkles,
  Smartphone,
  Zap,
  Users,
  Code2,
} from "lucide-react";

const FEATURES: { icon: React.ReactNode; title: string; color: FeatureColor }[] = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Código seguro e confiável",
    color: "blue",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Interfaces modernas e intuitivas",
    color: "purple",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Design responsivo e elegante",
    color: "cyan",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Performance otimizada",
    color: "amber",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Experiência do usuário excepcional",
    color: "green",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Código limpo e escalável",
    color: "rose",
  },
];

export function FeaturesList() {
  return (
    <div className="flex flex-col gap-3">
      {FEATURES.map((feature, index) => (
        <FeatureCard
          key={index}
          icon={feature.icon}
          title={feature.title}
          color={feature.color}
        />
      ))}
    </div>
  );
}

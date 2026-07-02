import type { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("max-w-column mx-auto w-full px-4", className)}>
      {children}
    </div>
  );
}

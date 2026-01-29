import { ChevronDown } from "lucide-react";

interface SectionDividerProps {
  text?: string;
}

export function SectionDivider({ text = "SCROLL" }: SectionDividerProps) {
  return (
    <div 
      className="flex flex-col items-center justify-center gap-2 animate-bounce"
      style={{ animationDuration: "5s" }}
    >
      <span className="text-gray-500 text-xs font-medium tracking-widest uppercase">
        {text}
      </span>
      <ChevronDown size={20} className="text-gray-500" />
    </div>
  );
}
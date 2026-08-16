import { asset } from "@/shared/lib/asset";

interface AboutPortraitProps {
  alt: string;
}

export function AboutPortrait({ alt }: AboutPortraitProps) {
  return (
    <img
      src={asset("images/perfil.webp")}
      alt={alt}
      width={320}
      height={320}
      className="border-line w-40 shrink-0 rounded-lg border object-cover sm:w-44"
    />
  );
}

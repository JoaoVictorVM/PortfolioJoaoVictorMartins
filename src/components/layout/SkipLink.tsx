import { useI18n } from "@/shared/hooks/useI18n";

export function SkipLink() {
  const t = useI18n();

  return (
    <a
      href="#conteudo"
      className="focus:bg-text focus:text-bg sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:px-4 focus:py-2"
    >
      {t.skipToContent}
    </a>
  );
}

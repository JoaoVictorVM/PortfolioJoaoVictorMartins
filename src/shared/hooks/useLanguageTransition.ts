import { useEffect, useRef } from "react";
import { usePreference } from "@/shared/hooks/usePreference";

export function useLanguageTransition<
  T extends HTMLElement = HTMLDivElement,
>() {
  const ref = useRef<T>(null);
  const { language } = usePreference();
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    node.animate(
      reduced
        ? [{ opacity: 0.4 }, { opacity: 1 }]
        : [
            { opacity: 0.4, transform: "translateY(6px)" },
            { opacity: 1, transform: "translateY(0)" },
          ],
      { duration: 300, easing: "cubic-bezier(0.4, 0, 0.2, 1)" },
    );
  }, [language]);

  return ref;
}

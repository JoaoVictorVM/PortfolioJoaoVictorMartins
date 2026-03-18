"use client";

import { useEffect, useState } from "react";

export function useReveal(trigger?: unknown) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setRevealed(false);
    const frame = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(frame);
  }, [trigger]);

  return revealed;
}

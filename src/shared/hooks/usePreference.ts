import { useContext } from "react";
import {
  PreferenceContext,
  type PreferenceContextValue,
} from "@/context/preferenceContext";

export function usePreference(): PreferenceContextValue {
  const context = useContext(PreferenceContext);

  if (!context) {
    throw new Error(
      "usePreference deve ser usado dentro de PreferenceProvider.",
    );
  }

  return context;
}

"use client";

import { useCallback, useRef } from "react";
import { logEvent } from "@/lib/research";

export function useHoverLogger(elementId: string) {
  const startTimeRef = useRef<number | null>(null);

  const onMouseEnter = useCallback(() => {
    startTimeRef.current = Date.now();
  }, []);

  const onMouseLeave = useCallback(() => {
    if (startTimeRef.current === null) {
      return;
    }
    const durationMs = Date.now() - startTimeRef.current;
    startTimeRef.current = null;
    logEvent("ui_interaction", {
      element: elementId,
      action: "hover_duration",
      durationMs,
    });
  }, [elementId]);

  return { onMouseEnter, onMouseLeave };
}

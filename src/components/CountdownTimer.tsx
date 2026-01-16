"use client";

import { useEffect, useMemo, useState } from "react";
import { logEvent } from "@/lib/research";

type CountdownTimerProps = {
  id: string;
  label: string;
  seconds: number;
};

const formatTime = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export function CountdownTimer({ id, label, seconds }: CountdownTimerProps) {
  const [remaining, setRemaining] = useState(seconds);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (remaining <= 0 || isPaused) {
      return;
    }
    const interval = setInterval(() => {
      setRemaining((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [isPaused, remaining]);

  useEffect(() => {
    logEvent("intervention_trigger", {
      element: id,
      action: "timer_initialized",
    });
  }, [id]);

  const warningId = useMemo(() => `${id}-warning`, [id]);

  return (
    <div
      className="rounded-xl border border-amber-200 bg-amber-50 p-5 shadow-sm"
      onMouseEnter={() => {
        setIsPaused(true);
        logEvent("intervention_trigger", {
          element: id,
          action: "timer_paused_on_hover",
        });
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        logEvent("ui_interaction", { element: id, action: "timer_resume" });
      }}
    >
      {/* Dark pattern: countdown timer. Intervention: freeze on hover + warning. */}
      <div className="flex items-center justify-between" id={id}>
        <div>
          <p className="text-sm font-semibold text-amber-900">{label}</p>
          <p className="text-3xl font-semibold text-amber-800">
            {formatTime(remaining)}
          </p>
        </div>
        <div className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-amber-800">
          Flash timer
        </div>
      </div>
      <p className="mt-2 text-xs text-amber-800" id={warningId}>
        This timer is a promotional interface element and does not reflect
        actual stock availability. Hovering pauses the countdown for review.
      </p>
    </div>
  );
}

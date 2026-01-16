"use client";

import { useEffect, useState } from "react";
import { logEvent } from "@/lib/research";

type ExitIntentModalProps = {
  id: string;
};

export function ExitIntentModal({ id }: ExitIntentModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [cooldown, setCooldown] = useState(3);

  useEffect(() => {
    const onMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0 && !isOpen) {
        setIsOpen(true);
        setCooldown(3);
        logEvent("intervention_trigger", {
          element: id,
          action: "exit_intent_shown",
        });
      }
    };
    document.addEventListener("mouseleave", onMouseLeave);
    return () => document.removeEventListener("mouseleave", onMouseLeave);
  }, [id, isOpen]);

  useEffect(() => {
    if (!isOpen || cooldown <= 0) {
      return;
    }
    const timer = setInterval(() => {
      setCooldown((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown, isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-slate-900/50 p-6"
      role="dialog"
      aria-modal="true"
      id={id}
    >
      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-lg">
        {/* Dark pattern: exit-intent popup. Intervention: reflection pause + review cue. */}
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Simulated exit prompt
        </p>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">
          Before leaving, review your cart choices
        </h2>
        <p className="mt-3 text-sm text-slate-600">
          This prompt is part of a research simulation. You can leave or stay
          without penalty.
        </p>
        <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
          Reflection pause: the "Continue" button is enabled after {cooldown}{" "}
          seconds.
        </div>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <button
            id={`${id}-stay`}
            className="flex-1 rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
            onClick={() => {
              setIsOpen(false);
              logEvent("ui_interaction", {
                element: id,
                action: "stay_in_cart",
              });
            }}
          >
            Stay in cart
          </button>
          <button
            id={`${id}-leave`}
            className="flex-1 rounded-md border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
            disabled={cooldown > 0}
            onClick={() => {
              setIsOpen(false);
              logEvent("decision_timestamp", {
                element: id,
                action: "exit_after_prompt",
              });
            }}
          >
            Continue to checkout
          </button>
        </div>
        <p className="mt-3 text-xs text-slate-500">
          Research hook: IF user hesitation detected THEN display reflective
          prompt.
        </p>
      </div>
    </div>
  );
}

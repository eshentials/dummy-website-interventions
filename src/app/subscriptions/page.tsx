"use client";

import { useState } from "react";
import { logEvent } from "@/lib/research";

export default function SubscriptionsPage() {
  const [showCancelFlow, setShowCancelFlow] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Subscription management
        </h2>
        <p className="text-sm text-slate-600">
          Manage a simulated device protection subscription.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-6">
          <div className="space-y-3">
            {/* Dark pattern: confirmshaming. Intervention: neutral alternative. */}
            <h3 className="text-lg font-semibold text-slate-900">
              Start Device Care Plus
            </h3>
            <p className="text-sm text-slate-600">
              ₹399/month subscription for device protection.
            </p>
            <button
              id="subscription-start"
              className="w-full rounded-md border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
              onClick={() =>
                logEvent("decision_timestamp", {
                  element: "subscription-start",
                  action: "subscribe",
                })
              }
            >
              Subscribe now
            </button>
            <button
              id="subscription-confirmshame-decline"
              className="w-full rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-500"
              onClick={() =>
                logEvent("ui_interaction", {
                  element: "subscription-confirmshame-decline",
                  action: "confirmshame_decline",
                })
              }
            >
              No thanks, I prefer risking repair costs
            </button>
            <div className="rounded-md border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
              <p className="font-semibold text-slate-900">
                Intervention: neutral opt-out
              </p>
              <button
                id="subscription-neutral-decline"
                className="mt-2 w-full rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
                onClick={() =>
                  logEvent("ui_interaction", {
                    element: "subscription-neutral-decline",
                    action: "neutral_decline",
                  })
                }
              >
                No, do not subscribe
              </button>
            </div>
          </div>

          <div className="h-px w-full bg-slate-200" />

          <h3 className="text-lg font-semibold text-slate-900">
            Current plan: Device Care Plus
          </h3>
          <p className="text-sm text-slate-600">
            ₹399/month. Canceling takes effect at the end of the billing cycle.
          </p>

          {/* Dark pattern: asymmetric friction (easy keep, hard cancel). */}
          <div className="mt-4 space-y-3">
            <button
              id="subscription-keep"
              className="w-full rounded-md border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
              onClick={() =>
                logEvent("ui_interaction", {
                  element: "subscription-keep",
                  action: "keep_subscription",
                })
              }
            >
              Keep subscription
            </button>
            <button
              id="subscription-cancel-start"
              className="w-full rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-500"
              onClick={() => {
                setShowCancelFlow(true);
                logEvent("ui_interaction", {
                  element: "subscription-cancel-start",
                  action: "start_cancel_flow",
                });
              }}
            >
              Cancel subscription (requires additional steps)
            </button>
          </div>

          {showCancelFlow && (
            <div className="mt-4 space-y-3 rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
              <p className="font-semibold">
                Cancelation steps (simulated friction)
              </p>
              <label className="flex items-start gap-2 text-xs text-rose-700">
                <input
                  id="subscription-cancel-confirm"
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-rose-300"
                  onChange={() =>
                    logEvent("ui_interaction", {
                      element: "subscription-cancel-confirm",
                      action: "confirm_cancel_checkbox",
                    })
                  }
                />
                I understand I will lose coverage at the end of the cycle.
              </label>
              <button
                id="subscription-cancel-final"
                className="w-full rounded-md border border-rose-300 px-4 py-2 text-sm font-semibold text-rose-800"
                onClick={() =>
                  logEvent("decision_timestamp", {
                    element: "subscription-cancel-final",
                    action: "cancel_subscription",
                  })
                }
              >
                Confirm cancellation
              </button>
            </div>
          )}
        </div>

        <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Intervention
          </p>
          <p className="text-sm text-slate-600">
            Balanced cancellation option with equal effort and visibility.
          </p>
          <button
            id="subscription-direct-cancel"
            className="w-full rounded-md border border-slate-400 px-4 py-2 text-sm font-semibold text-slate-700"
            onClick={() =>
              logEvent("choice_reversal", {
                element: "subscription-direct-cancel",
                action: "direct_cancel_intervention",
              })
            }
          >
            Cancel subscription directly (intervention)
          </button>
          <p className="text-xs text-slate-500">
            Research hook: IF rapid clicks detected THEN show cancellation
            clarity prompt.
          </p>
        </div>
      </div>
    </div>
  );
}

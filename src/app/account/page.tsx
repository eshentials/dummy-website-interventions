"use client";

import { logEvent } from "@/lib/research";

export default function AccountPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Create account
        </h2>
        <p className="text-sm text-slate-600">
          Account creation is simulated for research purposes.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">
            Basic information
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              id="account-first-name"
              className="rounded-md border border-slate-300 px-3 py-2 text-sm"
              placeholder="First name"
            />
            <input
              id="account-last-name"
              className="rounded-md border border-slate-300 px-3 py-2 text-sm"
              placeholder="Last name"
            />
            <input
              id="account-email"
              className="rounded-md border border-slate-300 px-3 py-2 text-sm md:col-span-2"
              placeholder="Email address"
            />
          </div>
        </div>

        <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">
            Communication preferences
          </h3>
          <p className="text-sm text-slate-600">
            Choose whether to receive product updates and research notices.
          </p>
          <div className="space-y-3">
            <button
              id="account-accept-updates"
              className="w-full rounded-md border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
              onClick={() =>
                logEvent("ui_interaction", {
                  element: "account-accept-updates",
                  action: "opt_in_updates",
                })
              }
            >
              Yes, send me updates
            </button>
            <button
              id="account-neutral-optout"
              className="w-full rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
              onClick={() =>
                logEvent("ui_interaction", {
                  element: "account-neutral-optout",
                  action: "neutral_opt_out",
                })
              }
              title="Opting out will not affect access to products."
            >
              No, do not send updates
            </button>
            <p className="text-xs text-slate-500">
              Tooltip: opting out does not change eligibility or access.
            </p>
          </div>
          <p className="text-xs text-slate-500">
            Research hook: IF repeated gaze shifts detected THEN show clarity
            prompt.
          </p>
        </div>
      </div>
    </div>
  );
}

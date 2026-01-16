"use client";

import { logEvent } from "@/lib/research";

export default function PrivacyPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Privacy & cookie settings
        </h2>
        <p className="text-sm text-slate-600">
          Manage data settings for this simulated storefront.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-6">
          {/* Dark pattern: ambiguous privacy wording. Intervention: tooltip + clear disclosure. */}
          <h3 className="text-lg font-semibold text-slate-900">
            Data sharing summary
          </h3>
          <p className="text-sm text-slate-600" id="privacy-ambiguous-text">
            We may share some information to enhance your experience and provide
            better services.
          </p>
          <p
            className="text-xs text-slate-500"
            title="In this simulation, analytics data is not sent to third parties."
          >
            Tooltip: clarifies that no third-party sharing occurs in this
            simulation.
          </p>
          <div className="mt-4 space-y-3">
            <label className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-sm">
              Functional cookies (required)
              <span className="text-xs font-semibold text-slate-500">
                Always on
              </span>
            </label>
            <label className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-sm">
              Analytics cookies
              <input
                id="privacy-analytics-toggle"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300"
                onChange={(event) =>
                  logEvent("ui_interaction", {
                    element: "privacy-analytics-toggle",
                    action: event.target.checked
                      ? "analytics_on"
                      : "analytics_off",
                  })
                }
              />
            </label>
            <label className="flex items-center justify-between rounded-md border border-slate-200 px-3 py-2 text-sm">
              Personalization cookies
              <input
                id="privacy-personalization-toggle"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300"
                onChange={(event) =>
                  logEvent("ui_interaction", {
                    element: "privacy-personalization-toggle",
                    action: event.target.checked
                      ? "personalization_on"
                      : "personalization_off",
                  })
                }
              />
            </label>
          </div>
        </div>

        <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">
            Clear disclosure (intervention)
          </p>
          <p>
            Analytics and personalization settings are optional and do not
            affect access to products or research participation.
          </p>
          <p className="text-xs text-slate-500">
            Research hook: IF user hesitation detected THEN display privacy
            clarity prompt.
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { logEvent } from "@/lib/research";

export default function ConfirmationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Final confirmation
        </h2>
        <p className="text-sm text-slate-600">
          This is the last step in the simulated checkout flow.
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <p className="text-sm font-semibold text-slate-900">Order summary</p>
        <div className="mt-3 grid gap-2 text-sm text-slate-600">
          <div className="flex items-center justify-between">
            <span>Items</span>
            <span>₹1,04,800</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Shipping</span>
            <span>₹1,199</span>
          </div>
          <div className="flex items-center justify-between">
            <span>Processing fee</span>
            <span>₹499</span>
          </div>
          <div className="flex items-center justify-between text-base font-semibold text-slate-900">
            <span>Total</span>
            <span>₹1,06,498</span>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            id="confirmation-finalize"
            className="rounded-md border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
            onClick={() =>
              logEvent("decision_timestamp", {
                element: "confirmation-finalize",
                action: "final_confirmation",
              })
            }
          >
            Confirm and finish (simulated)
          </button>
          <button
            id="confirmation-undo"
            className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700"
            onClick={() =>
              logEvent("choice_reversal", {
                element: "confirmation-undo",
                action: "undo_after_confirmation",
              })
            }
          >
            Undo and return to cart
          </button>
          <Link
            id="confirmation-home"
            href="/"
            className="rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700"
          >
            Return to home
          </Link>
        </div>
      </div>

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
        Final confirmation task: document decision timestamps and reversals.
      </div>
    </div>
  );
}

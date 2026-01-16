"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { logEvent } from "@/lib/research";

export default function CheckoutPage() {
  const [pauseRemaining, setPauseRemaining] = useState(3);
  const router = useRouter();

  useEffect(() => {
    if (pauseRemaining <= 0) {
      return;
    }
    const timer = setInterval(() => {
      setPauseRemaining((prev) => Math.max(prev - 1, 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [pauseRemaining]);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-slate-900">Checkout</h2>
        <p className="text-sm text-slate-600">
          Complete the simulated checkout. No payment is processed.
        </p>
      </div>

      {/* Dark pattern: progress-based pressure cue. Intervention: review checkpoint. */}
      <div className="rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span id="checkout-progress-label">Step 3 of 3</span>
          <span className="text-xs font-semibold text-amber-700">
            You are almost done
          </span>
        </div>
        <div className="mt-3 h-2 w-full rounded-full bg-slate-200">
          <div
            className="h-2 w-11/12 rounded-full bg-amber-400"
            id="checkout-progress-bar"
          />
        </div>
        <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
          Review checkpoint: you can revisit the cart or product details without
          penalty.
          <div className="mt-2 flex flex-wrap gap-2">
            <Link
              id="checkout-review-cart"
              href="/cart"
              className="rounded-md border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700"
            >
              Review cart
            </Link>
            <Link
              id="checkout-review-products"
              href="/products"
              className="rounded-md border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700"
            >
              Review products
            </Link>
          </div>
        </div>
      </div>

      {/* Dark pattern: hidden costs revealed late. Intervention: disclosure upfront. */}
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-800">
        <p className="font-semibold">Upfront fee disclosure (intervention)</p>
        <p className="mt-2">
          A ₹499 processing fee applies to this simulated order and is displayed
          here before confirmation.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">
            Shipping details (simulated)
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              id="checkout-name"
              className="rounded-md border border-slate-300 px-3 py-2 text-sm"
              placeholder="Full name"
            />
            <input
              id="checkout-email"
              className="rounded-md border border-slate-300 px-3 py-2 text-sm"
              placeholder="Email address"
            />
            <input
              id="checkout-address"
              className="rounded-md border border-slate-300 px-3 py-2 text-sm md:col-span-2"
              placeholder="Shipping address"
            />
          </div>
          <p className="text-xs text-slate-500">
            Research hook: IF user hesitation detected THEN display reflective
            prompt.
          </p>
        </div>

        <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Order summary</h3>
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Items</span>
            <span>₹1,04,800</span>
          </div>
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Shipping</span>
            <span>₹1,199</span>
          </div>
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Processing fee</span>
            <span>₹499</span>
          </div>
          <p className="text-xs text-slate-500">
            This processing fee is revealed at checkout for the research
            baseline.
          </p>
          <div className="flex items-center justify-between text-base font-semibold text-slate-900">
            <span>Total</span>
            <span>₹1,06,498</span>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-6">
        {/* Dark pattern: visual salience bias in CTAs. */}
        <p className="text-sm font-semibold text-slate-900">
          Primary action (biased visual weight)
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          <button
            id="checkout-place-order"
            className="rounded-md border border-slate-900 bg-slate-900 px-5 py-3 text-sm font-semibold text-white disabled:opacity-60"
            disabled={pauseRemaining > 0}
            onClick={() => {
              logEvent("decision_timestamp", {
                element: "checkout-place-order",
                action: "place_order",
              });
              router.push("/confirmation");
            }}
          >
            Place simulated order
          </button>
          <button
            id="checkout-cancel-order"
            className="rounded-md border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-400"
            onClick={() =>
              logEvent("ui_interaction", {
                element: "checkout-cancel-order",
                action: "cancel_order",
              })
            }
          >
            Cancel
          </button>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Reflection pause: order button activates after {pauseRemaining}{" "}
          seconds.
        </p>

        {/* Intervention: equal visual weight for accept/decline CTAs. */}
        <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Intervention: balanced choice
          </p>
          <div className="mt-3 flex flex-wrap gap-3">
            <button
              id="checkout-balanced-confirm"
              className="rounded-md border border-slate-400 px-5 py-2 text-sm font-semibold text-slate-700"
              onClick={() =>
                logEvent("ui_interaction", {
                  element: "checkout-balanced-confirm",
                  action: "confirm_choice",
                })
              }
            >
              Confirm order
            </button>
            <button
              id="checkout-balanced-decline"
              className="rounded-md border border-slate-400 px-5 py-2 text-sm font-semibold text-slate-700"
              onClick={() =>
                logEvent("ui_interaction", {
                  element: "checkout-balanced-decline",
                  action: "decline_choice",
                })
              }
            >
              Decline order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

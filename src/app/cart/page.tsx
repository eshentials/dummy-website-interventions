"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ExitIntentModal } from "@/components/ExitIntentModal";
import { products } from "@/lib/products";
import { logEvent } from "@/lib/research";

type CartItem = {
  id: string;
  quantity: number;
};

const initialItems: CartItem[] = [
  { id: "aerophone-x1", quantity: 1 },
  { id: "silentwave-pro", quantity: 1 },
];

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [removedItem, setRemovedItem] = useState<CartItem | null>(null);

  const cartRows = useMemo(
    () =>
      items.map((item) => {
        const product = products.find((entry) => entry.id === item.id);
        return {
          ...item,
          product,
          total: product ? product.price * item.quantity : 0,
        };
      }),
    [items]
  );

  const subtotal = cartRows.reduce((acc, row) => acc + row.total, 0);

  return (
    <div className="space-y-8">
      <ExitIntentModal id="cart-exit-intent-modal" />
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Cart</h2>
          <p className="text-sm text-slate-600">
            Review items. Removals can be undone for research observation.
          </p>
        </div>
        <Link
          id="cart-continue-shopping"
          href="/products"
          className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700"
        >
          Continue shopping
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-4">
          {cartRows.map((row) => (
            <div
              key={row.id}
              className="rounded-xl border border-slate-200 bg-white p-5"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    {row.product?.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Qty: {row.quantity}
                  </p>
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  ₹{row.total.toLocaleString("en-IN")}
                </p>
              </div>
              <button
                id={`cart-remove-${row.id}`}
                className="mt-3 text-xs font-semibold text-rose-700 underline underline-offset-4"
                onClick={() => {
                  setItems((prev) => prev.filter((item) => item.id !== row.id));
                  setRemovedItem({ id: row.id, quantity: row.quantity });
                  logEvent("ui_interaction", {
                    element: `cart-remove-${row.id}`,
                    action: "remove_item",
                  });
                }}
              >
                Remove item
              </button>
            </div>
          ))}

          {removedItem && (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800">
              {/* Intervention: ability to undo actions without penalty. */}
              Item removed. You can undo without penalty.
              <button
                id="cart-undo-remove"
                className="ml-3 text-sm font-semibold underline underline-offset-4"
                onClick={() => {
                  setItems((prev) => [...prev, removedItem]);
                  setRemovedItem(null);
                  logEvent("choice_reversal", {
                    element: "cart-undo-remove",
                    action: "undo_remove",
                  });
                }}
              >
                Undo
              </button>
            </div>
          )}
        </div>

        <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-5">
          <h3 className="text-sm font-semibold text-slate-900">
            Cart summary
          </h3>
          <div className="flex items-center justify-between text-sm text-slate-600">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString("en-IN")}</span>
          </div>
          <p className="text-xs text-slate-500">
            Additional fees are shown during checkout.
          </p>
          <Link
            id="cart-subscription-link"
            href="/subscriptions"
            className="inline-flex w-full items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
          >
            Add device protection (subscription)
          </Link>
          <Link
            id="cart-to-checkout"
            href="/checkout"
            className="inline-flex w-full items-center justify-center rounded-md border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
          >
            Proceed to checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

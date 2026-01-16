"use client";

import { logEvent } from "@/lib/research";
import { useHoverLogger } from "@/components/useHoverLogger";

type AddToCartButtonProps = {
  id: string;
  productId: string;
};

export function AddToCartButton({ id, productId }: AddToCartButtonProps) {
  const hoverHandlers = useHoverLogger(id);

  return (
    <button
      id={id}
      className="rounded-md border border-slate-900 bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
      {...hoverHandlers}
      onClick={() => {
        logEvent("decision_timestamp", {
          element: id,
          action: "add_to_cart",
          productId,
        });
        logEvent("ui_interaction", {
          element: id,
          action: "cart_simulated",
        });
      }}
    >
      Add to cart (simulated)
    </button>
  );
}

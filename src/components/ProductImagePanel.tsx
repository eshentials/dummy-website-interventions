"use client";

import Image from "next/image";
import { Product } from "@/lib/products";
import { useHoverLogger } from "@/components/useHoverLogger";
import { logEvent } from "@/lib/research";

type ProductImagePanelProps = {
  product: Product;
};

export function ProductImagePanel({ product }: ProductImagePanelProps) {
  const hoverHandlers = useHoverLogger(`pdp-image-${product.id}`);

  return (
    <div
      className="rounded-xl border border-slate-200 bg-white p-5"
      data-aoi="product-image"
      {...hoverHandlers}
    >
      <div className="relative">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={700}
          height={520}
          className="h-72 w-full rounded-lg object-cover"
          id={`pdp-image-${product.id}`}
        />
        <span
          id={`pdp-badge-${product.id}`}
          className="absolute left-3 top-3 rounded-sm bg-red-600 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white"
        >
          {product.badge}
        </span>
        <span
          id={`pdp-discount-${product.id}`}
          className="absolute right-3 top-3 rounded-sm bg-amber-400 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-900"
        >
          {product.discountPercent}% off
        </span>
      </div>

      <div className="mt-4 grid gap-3 text-xs text-slate-600 md:grid-cols-2">
        {/* Flash-sale UI elements: stock indicator + viewers. */}
        <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase text-slate-500">
            Stock indicator
          </p>
          <p id={`pdp-stock-${product.id}`} className="mt-1 font-semibold">
            {product.stockLabel}
          </p>
          <p className="mt-1 text-[11px] text-slate-500">
            Promotional cue. This count is simulated.
          </p>
        </div>
        <div className="rounded-md border border-slate-200 bg-slate-50 p-3">
          <p className="text-xs font-semibold uppercase text-slate-500">
            People viewing
          </p>
          <p id={`pdp-viewers-${product.id}`} className="mt-1 font-semibold">
            {product.viewers} viewing this item
          </p>
          <p className="mt-1 text-[11px] text-slate-500">
            Promotional cue. This count is simulated.
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
        <p className="font-semibold text-slate-900">Product Image Prompt</p>
        <p className="mt-2">{product.imagePrompt}</p>
        <button
          id={`pdp-copy-prompt-${product.id}`}
          className="mt-3 rounded-md border border-slate-300 px-3 py-1 text-xs font-semibold text-slate-700"
          onClick={() =>
            logEvent("ui_interaction", {
              element: `pdp-copy-prompt-${product.id}`,
              action: "copy_image_prompt",
            })
          }
        >
          Copy prompt (simulated)
        </button>
      </div>
    </div>
  );
}

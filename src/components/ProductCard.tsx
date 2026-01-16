"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";
import { useHoverLogger } from "@/components/useHoverLogger";

type ProductCardProps = {
  product: Product;
  idPrefix: string;
};

export function ProductCard({ product, idPrefix }: ProductCardProps) {
  const cardId = `${idPrefix}-${product.id}`;
  const hoverHandlers = useHoverLogger(cardId);

  return (
    <div
      className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
      id={cardId}
      data-aoi="product-card"
      {...hoverHandlers}
    >
      <div className="relative">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={400}
          height={300}
          className="h-48 w-full rounded-lg object-cover"
        />
        <span
          id={`${cardId}-badge`}
          className="absolute left-2 top-2 rounded-sm bg-red-600 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow"
        >
          {product.badge}
        </span>
        <span
          id={`${cardId}-discount`}
          className="absolute right-2 top-2 rounded-sm bg-amber-400 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-slate-900 shadow"
        >
          {product.discountPercent}% off
        </span>
      </div>
      <p className="mt-2 text-[11px] font-semibold uppercase text-slate-500">
        {product.category}
      </p>
      <h3 className="text-base font-semibold text-slate-900">
        {product.name}
      </h3>
      <div className="mt-2 flex items-center gap-2">
        <span className="text-lg font-semibold text-slate-900">
          ₹{product.price.toLocaleString("en-IN")}
        </span>
        <span className="text-sm text-slate-400 line-through">
          ₹{product.mrp.toLocaleString("en-IN")}
        </span>
      </div>
      <div className="mt-auto pt-3">
        <Link
          id={`${cardId}-cta`}
          href={`/products/${product.id}`}
          className="flex w-full items-center justify-center rounded-md border border-slate-900 bg-slate-900 px-3 py-2 text-sm font-semibold text-white"
        >
          View deal
        </Link>
      </div>
    </div>
  );
}

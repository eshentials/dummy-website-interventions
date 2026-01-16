import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Product Listing
            </h2>
            <p className="text-sm text-slate-600">
              High-density grid inspired by modern marketplaces.
            </p>
          </div>
          <Link
            id="plp-back-home"
            href="/"
            className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700"
          >
            Back to flash sale
          </Link>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {[
            "Smartphones",
            "Laptops",
            "Wireless Earbuds",
            "Smartwatches",
            "Power Banks",
            "Accessories",
          ].map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-slate-600"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            idPrefix="plp-card"
          />
        ))}
      </div>

      <div className="rounded-lg border border-rose-200 bg-rose-50 p-4 text-sm text-rose-800">
        {/* Dark pattern: false scarcity indicator. Intervention: warning. */}
        <p id="plp-scarcity-indicator" className="font-semibold">
          Only 3 left in stock
        </p>
        <p className="mt-1 text-xs text-rose-700">
          Warning: This scarcity cue is simulated and does not reflect real
          inventory levels.
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { CountdownTimer } from "@/components/CountdownTimer";
import { AddToCartButton } from "@/components/AddToCartButton";
import { PdpOptions } from "@/components/PdpOptions";
import { ProductImagePanel } from "@/components/ProductImagePanel";
import { getProductById } from "@/lib/products";

type ProductDetailPageProps = {
  params: { id: string };
};

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
        <Link href="/products" className="underline underline-offset-4">
          Back to products
        </Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <ProductImagePanel product={product} />
          <div className="rounded-2xl border border-slate-200 bg-white p-6">
            <p className="text-xs font-semibold uppercase text-slate-500">
              {product.category}
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-900">
              {product.name}
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              {product.description}
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-slate-600">
              {product.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div
              className="mt-6 flex flex-wrap items-center gap-4"
              data-aoi="price-cta"
            >
              <div>
                <p className="text-2xl font-semibold text-slate-900">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>
                <p className="text-sm text-slate-400 line-through">
                  ₹{product.mrp.toLocaleString("en-IN")}
                </p>
              </div>
              <AddToCartButton
                id="pdp-add-to-cart"
                productId={product.id}
              />
              <Link
                id="pdp-subscribe-link"
                href="/subscriptions"
                className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                Add device protection
              </Link>
            </div>
          </div>

          <PdpOptions id="pdp-addon-checkbox" />
        </div>

        <div className="space-y-6">
          <CountdownTimer
            id="pdp-countdown-timer"
            label="Limited-time promotion"
            seconds={420}
          />
          <div className="rounded-xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Review checkpoint</p>
            <p className="mt-2">
              You can compare alternatives or return to the listing without
              penalty before continuing.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                id="pdp-review-products"
                href="/products"
                className="rounded-md border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700"
              >
                Review alternatives
              </Link>
              <Link
                id="pdp-review-cart"
                href="/cart"
                className="rounded-md border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700"
              >
                Review cart
              </Link>
            </div>
          </div>
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-700">
            {/*
              Visual urgency reinforcement with disclosure. Avoids adding new
              dark patterns by keeping explicit warning text.
            */}
            <p className="font-semibold text-rose-800">
              Deal intensity: high
            </p>
            <p className="mt-1">
              Urgency visuals are intentionally amplified for realism. Review
              prompts remain active to reduce manipulation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

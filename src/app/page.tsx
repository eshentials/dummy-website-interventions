import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="space-y-10">
      <section
        className="grid gap-6 rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-10 text-white shadow-xl lg:grid-cols-[1.4fr_0.6fr]"
        data-aoi="hero-banner"
      >
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-300">
            Flash Sale • Limited Time Deals • Ends Tonight
          </p>
          <h2 className="text-4xl font-semibold">
            High-energy gadget marketplace (simulation)
          </h2>
          <p className="text-base text-slate-200">
            Persuasive visuals are intentionally preserved to mirror mainstream
            e-commerce experiences, while interventions reduce manipulation.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              id="home-start-shopping"
              href="/products"
              className="rounded-md bg-amber-400 px-6 py-3 text-base font-semibold text-slate-900"
            >
              Explore flash deals
            </Link>
            <Link
              id="home-subscribe-link"
              href="/subscriptions"
              className="rounded-md border border-white/40 px-6 py-3 text-base font-semibold text-white"
            >
              View protection plan
            </Link>
          </div>
        </div>
        <div className="rounded-xl border border-white/20 bg-white/10 p-5 text-xs">
          <p className="font-semibold uppercase text-amber-300">
            Research AOIs
          </p>
          <ul className="mt-2 space-y-2 text-sm text-slate-100">
            <li>CTA clusters and price blocks</li>
            <li>Urgency cues and reflection prompts</li>
            <li>Privacy, subscription, and confirmation steps</li>
          </ul>
          <p className="mt-3 text-[11px] text-slate-200">
            Research hook: IF hesitation &gt; 5s THEN show reflective prompt.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-slate-900">
            Flash sale grid
          </h3>
          <div className="flex items-center gap-2 text-xs text-slate-600">
            <span className="rounded-sm bg-amber-400 px-2 py-1 font-semibold text-slate-900">
              Deals live
            </span>
            <span>Dense product view for research observation</span>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              idPrefix="home-card"
            />
          ))}
        </div>
      </section>

      <section className="grid gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">
            Experimental task flow
          </h3>
          <ol className="list-decimal space-y-1 pl-5 text-sm text-slate-600">
            <li>Purchase a product</li>
            <li>Decline add-ons</li>
            <li>Subscribe to a service</li>
            <li>Attempt to cancel or opt-out</li>
            <li>Manage privacy settings</li>
            <li>Final confirmation</li>
          </ol>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
          <p className="font-semibold text-slate-900">
            Simulation disclosure
          </p>
          <p className="mt-2">
            This environment is a treatment condition for dark pattern research.
            No data is sent to external services.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Link
              id="home-privacy-settings"
              href="/privacy"
              className="rounded-md border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700"
            >
              Privacy settings
            </Link>
            <Link
              id="home-confirmation-link"
              href="/confirmation"
              className="rounded-md border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700"
            >
              Final confirmation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

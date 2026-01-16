import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neutral Tech Lab | Research Simulation Store",
  description:
    "A controlled experimental e-commerce simulation for academic research.",
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
  { href: "/subscriptions", label: "Subscriptions" },
  { href: "/privacy", label: "Privacy & Cookies" },
  { href: "/confirmation", label: "Confirmation" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white text-slate-900 antialiased`}
      >
        <div className="min-h-screen bg-slate-100">
          <div className="sticky top-0 z-40">
            <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white">
              <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-2 text-xs font-semibold uppercase tracking-wide">
                <span id="flash-banner-label">Mega Flash Deals</span>
                <span id="flash-banner-note">
                  Simulation only • No real payments
                </span>
              </div>
            </div>
            <header className="border-b border-slate-200 bg-white shadow-sm">
              <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-4">
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Research Simulation
                  </p>
                  <h1 className="text-xl font-semibold text-slate-900">
                    Neutral Tech Lab Store
                  </h1>
                </div>
                <div className="hidden flex-1 items-center gap-3 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-500 md:flex">
                  Search gadgets, accessories, and flash deals (simulation)
                </div>
                <nav className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-md px-3 py-2 font-semibold transition hover:bg-slate-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </header>
            <div className="border-b border-slate-200 bg-slate-50">
              <div className="mx-auto w-full max-w-6xl px-6 py-2 text-xs text-slate-600">
                This site is a controlled academic simulation. No real purchases
                or payments are processed.
              </div>
            </div>
          </div>
          <main className="mx-auto w-full max-w-6xl px-6 pb-24 pt-8">
            {children}
          </main>
          <footer className="sticky bottom-0 z-30 border-t border-slate-200 bg-white">
            <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3 text-xs text-slate-500">
              <span>
                Neutral branding. Data collection is limited to interaction logs
                for research demonstration.
              </span>
              <span id="footer-task-reminder">
                Tasks: purchase, decline add-ons, subscribe, cancel, privacy,
                confirm.
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

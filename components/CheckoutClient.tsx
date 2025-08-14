"use client";

import { useCart } from "@/app/providers";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutClient() {
  const { items, total, clearCart } = useCart();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    clearCart();
    router.push("/checkout/success");
  }

  if (items.length === 0) {
    return <p className="text-foreground/70">Your cart is empty.</p>;
  }

  return (
    <div className="grid gap-8 sm:grid-cols-3">
      <form onSubmit={onSubmit} className="card sm:col-span-2 grid gap-4 rounded-lg border border-foreground/10 p-6">
        <h1 className="text-2xl font-bold tracking-tight">Checkout</h1>
        <label className="grid gap-1 text-sm">
          <span>Name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="rounded-md border border-foreground/20 bg-transparent px-3 py-2"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-1 text-sm">
          <span>Email</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-md border border-foreground/20 bg-transparent px-3 py-2"
            placeholder="you@example.com"
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="btn-ghost mt-2 rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 disabled:opacity-50"
        >
          {loading ? "Processing…" : "Pay & Complete"}
        </button>
        <p className="text-xs text-foreground/60">Payment is simulated. Integrate Stripe later by adding API routes.</p>
      </form>

      <aside className="card grid gap-3 rounded-lg border border-foreground/10 p-6 h-fit">
        <h2 className="font-semibold">Order Summary</h2>
        <ul className="grid gap-2 text-sm">
          {items.map((it) => (
            <li key={it.id} className="flex justify-between">
              <span>
                {it.title} × {it.quantity}
              </span>
              <span>${(it.price * it.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between border-t border-foreground/10 pt-3 font-medium">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </aside>
    </div>
  );
}



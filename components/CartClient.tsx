"use client";

import Link from "next/link";
import { useCart } from "@/app/providers";

export default function CartClient() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart();
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Your Cart</h1>

      {items.length === 0 ? (
        <div className="rounded-lg border border-foreground/10 p-6 text-center text-foreground/70">
          Your cart is empty. <Link className="underline" href="/projects">Browse projects</Link> or <Link className="underline" href="/courses">courses</Link>.
        </div>
      ) : (
        <div className="grid gap-4">
          {items.map((it) => (
            <div key={it.id} className="flex items-center justify-between gap-3 rounded-md border border-foreground/10 p-4">
              <div>
                <div className="font-medium">{it.title}</div>
                <div className="text-xs text-foreground/60">{it.kind} • ${it.price}</div>
              </div>
              <div className="flex items-center gap-3">
                <label className="text-sm text-foreground/70" htmlFor={`qty-${it.id}`}>Qty</label>
                <input
                  id={`qty-${it.id}`}
                  type="number"
                  min={1}
                  value={it.quantity}
                  onChange={(e) => updateQuantity(it.id, Math.max(1, Number(e.target.value)))}
                  className="w-16 rounded border border-foreground/20 bg-transparent px-2 py-1 text-sm"
                />
                <button className="text-sm underline" onClick={() => removeItem(it.id)}>Remove</button>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-between border-t border-foreground/10 pt-4">
            <div className="text-sm text-foreground/70">Total</div>
            <div className="text-lg font-semibold">${total.toFixed(2)}</div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/checkout" className="rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90">
              Checkout
            </Link>
            <button onClick={clearCart} className="rounded-md border border-foreground/20 px-4 py-2 text-sm font-medium hover:bg-foreground/5">
              Clear cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}



"use client";

import { CatalogItem } from "@/lib/data";
import { useCart } from "@/app/providers";

export default function ItemCard({ item }: { item: CatalogItem }) {
  const { addItem } = useCart();
  return (
    <div className="card rounded-lg border border-foreground/10 p-4 bg-background/60 flex flex-col">
      <div className="flex-1">
        <h3 className="text-base font-semibold mb-1">{item.title}</h3>
        <p className="text-sm text-foreground/70 mb-3">{item.description}</p>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm font-medium">${item.price}</span>
        <button
          className="btn-ghost text-sm rounded-md border border-foreground/20 px-3 py-1.5 hover:bg-foreground/5"
          onClick={() => addItem({ id: item.id, title: item.title, price: item.price, kind: item.kind })}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}



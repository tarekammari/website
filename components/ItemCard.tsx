"use client";

import { CatalogItem } from "@/lib/data";
import { useCart } from "@/app/providers";

export default function ItemCard({ item }: { item: CatalogItem }) {
  const { addItem } = useCart();
  return (
    <div className="card h-full rounded-lg border border-foreground/10 p-4 bg-background/60 flex flex-col">
      <a
        href={item.url || '#'}
        target={item.url ? '_blank' : undefined}
        rel={item.url ? 'noopener noreferrer' : undefined}
        className="block -mx-4 -mt-4 mb-3 rounded-t-lg overflow-hidden hover:opacity-95"
        aria-label={item.title}
      >
        <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
          {item.category === 'wordpress' && (
            <span
              className="absolute left-2 top-2 z-10 inline-flex items-center justify-center h-12 w-12"
              aria-label="WordPress"
              title="WordPress"
            >
              <img
                src="https://s.w.org/style/images/about/WordPress-logotype-wmark-white.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 select-none drop-shadow"
                loading="lazy"
              />
            </span>
          )}
          <img
            src={item.image || '/images/placeholder-project.svg'}
            alt={item.title}
            className="h-full w-full object-cover object-top bg-foreground/[0.04]"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              const fallback = '/images/placeholder-project.svg';
              if (target.src.endsWith('placeholder-project.svg')) return;
              target.src = fallback;
            }}
          />
        </div>
      </a>
      <div className="flex-1">
        <h3 className="text-base font-semibold mb-1">{item.title}</h3>
        <p className="text-sm text-foreground/70 mb-3 min-h-10">{item.description}</p>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">${item.price}</span>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/80 hover:underline"
            >
              Visit
            </a>
          )}
        </div>
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



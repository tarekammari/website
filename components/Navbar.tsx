"use client";

import Link from "next/link";
import { useCart, useTheme } from "@/app/providers";
import ThemeToggle from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/courses", label: "Courses" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { items } = useCart();
  const pathname = usePathname();
  const activeClass =
    "text-foreground/90 hover:text-foreground font-medium border-b-2 border-transparent hover:border-foreground/30";
  const currentClass = "text-foreground font-semibold border-b-2 border-foreground";

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/90 border-b border-foreground/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg sm:text-xl font-semibold tracking-tight">
          TAREK AMMARI
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={pathname === l.href ? currentClass : activeClass}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/cart"
            className="relative rounded-full border border-foreground/20 px-3 py-1.5 text-sm hover:bg-foreground/5"
            aria-label="Cart"
          >
            <span>Cart</span>
            <span className="ml-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground/10 px-2 text-xs">
              {items.reduce((sum, it) => sum + it.quantity, 0)}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden border-t border-foreground/10">
        <nav className="container mx-auto px-4 py-3 flex gap-4 overflow-x-auto">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                "whitespace-nowrap px-1 " + (pathname === l.href ? currentClass : activeClass)
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}



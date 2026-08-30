"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ZentraMark } from "./brand";

const navigation = [
  ["Products", "/products"],
  ["Capabilities", "/capabilities"],
  ["Industries", "/industries"],
  ["Company", "/about"],
];

export function SiteHeader() {
  const pathname = usePathname();
  const isCurrent = (href: string) => href === "/products" ? pathname.startsWith("/products") : pathname === href;

  return (
    <header className="global-header">
      <div className="site-header">
        <Link className="brand" href="/" aria-label="Zentra Technologies home">
          <ZentraMark compact />
          <span>Zentra</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([label, href]) => <a href={href} key={href} aria-current={isCurrent(href) ? "page" : undefined}>{label}</a>)}
        </nav>

        <a className="header-cta" href="/products">
          Explore products
          <ArrowRight />
        </a>

        <details className="mobile-menu">
          <summary aria-label="Open navigation"><span>Menu</span><i aria-hidden="true" /></summary>
          <nav aria-label="Mobile navigation">
            {navigation.map(([label, href]) => <a href={href} key={href} aria-current={isCurrent(href) ? "page" : undefined}>{label}</a>)}
          </nav>
        </details>
      </div>
    </header>
  );
}

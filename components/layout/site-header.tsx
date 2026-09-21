"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

import { site } from "@/content/site";
import { QuoteTrigger } from "@/components/quote/quote-modal";

const navigation = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#portfolio", label: "Portfólio" },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="page-shell site-header__inner">
        <Link
          className="site-header__brand"
          href="/"
          aria-label={`${site.brand.name} — página inicial`}
          onClick={closeMenu}
        >
          <picture>
            <source srcSet={site.brand.logo.svg} type="image/svg+xml" />
            <img
              src={site.brand.logo.png}
              alt=""
              className="site-header__logo"
              width="240"
              height="96"
            />
          </picture>
        </Link>

        <button
          className="site-header__toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className="sr-only">
            {isMenuOpen ? "Fechar menu" : "Abrir menu"}
          </span>
          <span aria-hidden="true" className="site-header__toggle-icon">
            <span />
            <span />
          </span>
        </button>

        <nav
          className="site-header__navigation"
          data-open={isMenuOpen}
          id={menuId}
          aria-label="Navegação principal"
        >
          <div className="site-header__menu">
            <ul className="site-header__links">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} onClick={closeMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <QuoteTrigger
              className="button button--primary site-header__cta"
              onClick={closeMenu}
            >
              {site.cta.quote}
            </QuoteTrigger>
          </div>
        </nav>
      </div>
    </header>
  );
}

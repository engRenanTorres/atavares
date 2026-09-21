"use client";

import { useState } from "react";

import type { PortfolioEvent } from "@/content/portfolio";

import { PortfolioGallery } from "./portfolio-gallery";

export function PortfolioSwitcher({
  events,
}: {
  events: readonly PortfolioEvent[];
}) {
  const [activeSlug, setActiveSlug] = useState(events[0].slug);
  const activeEvent = events.find((event) => event.slug === activeSlug);
  const isPlaceholder = activeEvent?.status !== "publicado";

  return (
    <>
      <div className="portfolio-switcher" role="tablist" aria-label="Portfólios">
        {events.map((event) => (
          <button
            aria-selected={activeSlug === event.slug}
            className="portfolio-switcher__tab"
            key={event.slug}
            onClick={() => setActiveSlug(event.slug)}
            role="tab"
            type="button"
          >
            {event.title}
            {event.status === "em-breve" ? (
              <span className="portfolio-switcher__badge">Em breve</span>
            ) : null}
          </button>
        ))}
      </div>

      {activeEvent ? (
        <div className="portfolio-switcher__content">
          <div className="portfolio-page__gallery-heading">
            <div>
              <p className="eyebrow">Galeria completa</p>
              <h2 className="heading-2 mt-4">
                {activeEvent.title}.
              </h2>
            </div>
            <p>{activeEvent.summary}</p>
          </div>

          {isPlaceholder ? (
            <div className="portfolio-switcher__placeholder">
              <p className="heading-3">Em preparação.</p>
              <p>
                As fotos desta celebração ainda estão em curadoria e serão
                publicadas em breve. Enquanto isso, conheça o Casamento
                Jéssica e Renan.
              </p>
            </div>
          ) : (
            <PortfolioGallery images={activeEvent.images} />
          )}
        </div>
      ) : null}
    </>
  );
}

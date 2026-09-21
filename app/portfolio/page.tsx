import { PortfolioSwitcher } from "@/components/portfolio/portfolio-switcher";
import { portfolioEvents } from "@/content/portfolio";

export default function PortfolioPage() {
  return (
    <>
      <section className="portfolio-page__intro section-space" aria-labelledby="portfolio-page-title">
        <div className="page-shell portfolio-page__intro-grid">
          <div>
            <p className="eyebrow">Portfólio</p>
            <h1 className="heading-1 mt-4" id="portfolio-page-title">
              Histórias que ganharam cenário.
            </h1>
          </div>
          <p className="portfolio-page__summary">
            Conheça as celebrações decoradas pela AZ Tavares Eventos. Escolha
            um evento e explore cada composição em tamanho ampliado.
          </p>
        </div>
      </section>

      <section className="portfolio-page__gallery section-space" aria-labelledby="gallery-title">
        <div className="page-shell">
          <PortfolioSwitcher events={portfolioEvents} />
        </div>
      </section>
    </>
  );
}

import { PortfolioGallery } from "@/components/portfolio/portfolio-gallery";
import { portfolioEvents } from "@/content/portfolio";

const casamentoJessicaRenan = portfolioEvents[0];

export default function PortfolioPage() {
  return (
    <>
      <section className="portfolio-page__intro section-space" aria-labelledby="portfolio-page-title">
        <div className="page-shell portfolio-page__intro-grid">
          <div>
            <p className="eyebrow">Portfólio</p>
            <h1 className="heading-1 mt-4" id="portfolio-page-title">
              {casamentoJessicaRenan.title}.
            </h1>
          </div>
          <p className="portfolio-page__summary">
            {casamentoJessicaRenan.summary}
          </p>
        </div>
      </section>

      <section className="portfolio-page__gallery section-space" aria-labelledby="gallery-title">
        <div className="page-shell">
          <div className="portfolio-page__gallery-heading">
            <div>
              <p className="eyebrow">Galeria completa</p>
              <h2 className="heading-2 mt-4" id="gallery-title">
                Detalhes que dão forma à celebração.
              </h2>
            </div>
            <p>
              Explore cada composição e selecione uma imagem para vê-la em
              tamanho ampliado.
            </p>
          </div>
          <PortfolioGallery images={casamentoJessicaRenan.images} />
        </div>
      </section>
    </>
  );
}

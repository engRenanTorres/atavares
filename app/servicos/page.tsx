import { QuoteTrigger } from "@/components/quote/quote-modal";
import { Reveal } from "@/components/sections/reveal";
import { site } from "@/content/site";

export default function ServicesPage() {
  return (
    <>
      <section
        className="services-page__intro section-space"
        aria-labelledby="services-page-title"
      >
        <Reveal className="page-shell services-page__intro-grid">
          <div>
            <p className="eyebrow">Serviços</p>
            <h1 className="heading-1 mt-4" id="services-page-title">
              Cenários pensados para celebrar o que importa.
            </h1>
          </div>
          <p className="services-page__summary">
            Cada celebração parte de uma conversa. A partir dela, criamos uma
            composição que dá forma à sua ideia e acolhe os momentos do evento.
          </p>
        </Reveal>
      </section>

      <section
        className="services-page__list section-space"
        aria-labelledby="services-list-title"
      >
        <Reveal className="page-shell">
          <div className="services-page__heading">
            <p className="eyebrow">O que criamos</p>
            <h2 className="heading-2 mt-4" id="services-list-title">
              Detalhes que formam uma celebração inteira.
            </h2>
          </div>

          <ol className="services-page__items">
            {site.services.map((service, index) => (
              <li className="services-page__item" key={service.title}>
                <span className="services-page__number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="heading-3">{service.title}</h3>
                  <p>{service.details}</p>
                </div>
                <p className="services-page__service-summary">
                  {service.description}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section
        className="services-page__cta section-space"
        aria-labelledby="services-cta-title"
      >
        <Reveal className="page-shell services-page__cta-content">
          <p className="eyebrow">Vamos conversar</p>
          <h2 className="heading-2" id="services-cta-title">
            Conte como você imagina o seu evento.
          </h2>
          <p>
            Compartilhe a ocasião e as suas referências para começarmos uma
            proposta feita para a sua celebração.
          </p>
          <QuoteTrigger className="button button--primary">
            {site.cta.quote}
          </QuoteTrigger>
        </Reveal>
      </section>
    </>
  );
}

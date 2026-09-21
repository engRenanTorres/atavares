import { QuoteTrigger } from "@/components/quote/quote-modal";
import { Reveal } from "@/components/sections/reveal";
import { site } from "@/content/site";

export default function AboutPage() {
  return (
    <>
      <section
        className="about-page__intro section-space"
        aria-labelledby="about-page-title"
      >
        <Reveal className="page-shell about-page__intro-grid">
          <div>
            <p className="eyebrow">Sobre a AZ Tavares Eventos</p>
            <h1 className="heading-1 mt-4" id="about-page-title">
              Cenários para guardar na memória.
            </h1>
          </div>
          <p className="about-page__summary">
            A AZ Tavares Eventos acredita que cada celebração merece uma
            atmosfera própria, criada com escuta, cuidado e atenção aos
            detalhes.
          </p>
        </Reveal>
      </section>

      <section
        className="about-page__story section-space"
        aria-labelledby="about-story-title"
      >
        <Reveal className="page-shell about-page__story-grid">
          <div>
            <p className="eyebrow">Nossa história</p>
            <h2 className="heading-2 mt-4" id="about-story-title">
              Uma história em construção, com cada celebração.
            </h2>
          </div>
          <div className="about-page__story-copy">
            <p>
              A história, os diferenciais e o percurso da AZ Tavares Eventos
              serão apresentados aqui assim que o conteúdo institucional for
              confirmado.
            </p>
            <p className="about-page__notice">
              Conteúdo institucional em aprovação.
            </p>
          </div>
        </Reveal>
      </section>

      <section
        className="about-page__process section-space"
        aria-labelledby="about-process-title"
      >
        <Reveal className="page-shell">
          <div className="about-page__process-heading">
            <p className="eyebrow">Nosso processo</p>
            <h2 className="heading-2 mt-4" id="about-process-title">
              Da primeira conversa à montagem final.
            </h2>
          </div>
          <ol className="about-page__steps">
            {site.process.map((item) => (
              <li className="about-page__step" key={item.step}>
                <span className="about-page__number" aria-hidden="true">
                  {item.step}
                </span>
                <div>
                  <h3 className="heading-3">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      <section
        className="about-page__cta section-space"
        aria-labelledby="about-cta-title"
      >
        <Reveal className="page-shell about-page__cta-content">
          <p className="eyebrow">{site.location}</p>
          <h2 className="heading-2" id="about-cta-title">
            Sua ideia merece um cenário à altura.
          </h2>
          <p>
            Conte-nos sobre a sua celebração e dê o primeiro passo para uma
            proposta personalizada.
          </p>
          <QuoteTrigger className="button button--primary">
            {site.cta.quote}
          </QuoteTrigger>
        </Reveal>
      </section>
    </>
  );
}

import Image from "next/image";
import {
  Armchair,
  BriefcaseBusiness,
  CakeSlice,
  Flower2,
  Heart,
  PartyPopper,
  type LucideIcon,
} from "lucide-react";

import {
  heroImageId,
  homeHighlightImageIds,
  casamentoJessicaRenanImages,
} from "@/content/portfolio-images";
import { site } from "@/content/site";
import { QuoteTrigger } from "@/components/quote/quote-modal";
import Link from "next/link";

const serviceIcons = {
  "Decoração completa": Flower2,
  "Decoração floral": Flower2,
  "Mesa de doces": CakeSlice,
  Locação: Armchair,
  Cerimônia: Heart,
  Aniversários: PartyPopper,
  "Eventos corporativos": BriefcaseBusiness,
} satisfies Record<(typeof site.services)[number]["title"], LucideIcon>;

function getHeroImage() {
  const image = casamentoJessicaRenanImages.find(
    (item) => item.id === heroImageId,
  );

  if (!image) {
    throw new Error("A imagem de destaque da home não foi encontrada.");
  }

  return image;
}

export default function Home() {
  const heroImage = getHeroImage();
  const highlightImages = homeHighlightImageIds
    .filter((id) => id !== heroImageId)
    .map((id) => {
      const image = casamentoJessicaRenanImages.find((item) => item.id === id);

      if (!image) {
        throw new Error(`A imagem em destaque "${id}" não foi encontrada.`);
      }

      return image;
    });

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <Image
          alt={heroImage.alt}
          className="hero__image"
          fill
          preload
          sizes="100vw"
          src={heroImage.src}
        />
        <div className="hero__overlay" aria-hidden="true" />
        <div className="page-shell hero__content">
          <p className="eyebrow hero__eyebrow">{site.location}</p>
          <h1 className="heading-1 hero__title" id="hero-title">
            Cenários que celebram histórias inesquecíveis.
          </h1>
          <p className="hero__description">
            Transformamos celebrações em cenários memoráveis, pensados para
            acolher cada momento especial.
          </p>
          <QuoteTrigger className="button button--primary">
            {site.cta.quote}
          </QuoteTrigger>
        </div>
      </section>

      <section className="introduction section-space" id="sobre" aria-labelledby="sobre-title">
        <div className="page-shell introduction__grid">
          <div>
            <p className="eyebrow">AZ Tavares Eventos</p>
            <h2 className="heading-2 mt-4" id="sobre-title">
              Celebrações com identidade, beleza e presença.
            </h2>
          </div>
          <div className="introduction__copy">
            <p>
              A história e os diferenciais da AZ Tavares Eventos serão
              apresentados aqui assim que o conteúdo institucional for
              confirmado.
            </p>
            <p className="introduction__notice">
              Conteúdo institucional em aprovação.
            </p>
          </div>
        </div>
      </section>

      <section className="services section-space" id="servicos" aria-labelledby="servicos-title">
        <div className="page-shell">
          <div className="services__heading">
            <div>
              <p className="eyebrow services__eyebrow">Serviços</p>
              <h2 className="heading-2 services__title" id="servicos-title">
                Cada detalhe encontra o seu lugar.
              </h2>
            </div>
            <p className="services__intro">
              Da primeira ideia à composição final, criamos cenários que fazem
              a celebração ser lembrada.
            </p>
          </div>

          <ul className="services__grid">
            {site.services.map((service) => {
              const Icon = serviceIcons[service.title];

              return (
                <li className="service-card" key={service.title}>
                  <Icon aria-hidden="true" className="service-card__icon" />
                  <h3 className="heading-3 service-card__title">
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="process section-space" aria-labelledby="processo-title">
        <div className="page-shell">
          <div className="process__heading">
            <p className="eyebrow">Como acontece</p>
            <h2 className="heading-2 mt-4" id="processo-title">
              Um caminho leve, do sonho ao cenário.
            </h2>
          </div>
          <ol className="process__steps">
            {site.process.map((item) => (
              <li className="process__step" key={item.step}>
                <span className="process__number" aria-hidden="true">
                  {item.step}
                </span>
                <div>
                  <h3 className="heading-3">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="portfolio section-space"
        id="portfolio"
        aria-labelledby="portfolio-title"
      >
        <div className="page-shell">
          <div className="portfolio__heading">
            <div>
              <p className="eyebrow portfolio__eyebrow">Portfólio</p>
              <h2 className="heading-2 portfolio__title" id="portfolio-title">
                Casamento Jéssica e Renan.
              </h2>
            </div>
            <div className="portfolio__intro">
              <p>
                Uma celebração em tons quentes, com flores, mesa de doces,
                bolo e velas. Texto curatorial temporário até a confirmação
                do conteúdo do evento.
              </p>
              <Link className="button button--secondary" href="/portfolio">
                {site.cta.portfolio}
              </Link>
            </div>
          </div>

          <ul className="portfolio__grid">
            {highlightImages.map((image) => (
              <li
                className={`portfolio__item${
                  image.height > image.width ? " portfolio__item--portrait" : ""
                }`}
                key={image.id}
              >
                <Image
                  alt={image.alt}
                  className="portfolio__image"
                  height={image.height}
                  sizes="(min-width: 48rem) 66vw, 100vw"
                  src={image.src}
                  width={image.width}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="faq section-space" aria-labelledby="faq-title">
        <div className="page-shell faq__layout">
          <div>
            <p className="eyebrow">Perguntas frequentes</p>
            <h2 className="heading-2 mt-4" id="faq-title">
              O que você precisa saber.
            </h2>
          </div>
          <div className="faq__list">
            {site.faqs.map((faq) => (
              <details className="faq__item" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta section-space" aria-labelledby="cta-title">
        <div className="page-shell final-cta__content">
          <p className="eyebrow final-cta__eyebrow">{site.location}</p>
          <h2 className="heading-2 final-cta__title" id="cta-title">
            Sua celebração começa com uma boa conversa.
          </h2>
          <p className="final-cta__description">
            Conte a sua ideia e receba uma proposta pensada para o seu evento.
          </p>
          <QuoteTrigger className="button button--primary">
            {site.cta.quote}
          </QuoteTrigger>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";

import { heroImageId, casamentoJessicaRenanImages } from "@/content/portfolio-images";
import { site } from "@/content/site";

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
          <a className="button button--primary" href={site.contact.whatsappUrl}>
            {site.cta.quote}
          </a>
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
    </>
  );
}

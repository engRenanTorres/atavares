import { site } from "@/content/site";
import { Reveal } from "./reveal";

export function Testimonials() {
  if (!site.testimonials.enabled) {
    return null;
  }

  return (
    <section className="testimonials section-space" aria-labelledby="testimonials-title">
      <Reveal className="page-shell">
        <div className="testimonials__heading">
          <div>
            <p className="eyebrow testimonials__eyebrow">Depoimentos</p>
            <h2 className="heading-2 testimonials__title" id="testimonials-title">
              Histórias que ainda vamos contar.
            </h2>
          </div>
          <p>
            Enquanto reunimos depoimentos autorizados, esta seção apresenta
            textos temporários.
          </p>
        </div>

        <div className="testimonials__list">
          {site.testimonials.items.map((testimonial, index) => (
            <figure className="testimonial" key={testimonial.quote}>
              <blockquote>
                <p>“{testimonial.quote}”</p>
              </blockquote>
              <figcaption>
                <span aria-hidden="true">0{index + 1}</span>
                {testimonial.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

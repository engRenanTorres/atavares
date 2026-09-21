import Link from "next/link";

import { site } from "@/content/site";
import { QuoteTrigger } from "@/components/quote/quote-modal";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <div>
          <Link className="site-footer__brand" href="/">
            {site.brand.name}
          </Link>
          <p className="site-footer__location">{site.location}</p>
        </div>

        <nav className="site-footer__navigation" aria-label="Links institucionais">
          <QuoteTrigger>{site.cta.whatsapp}</QuoteTrigger>
          <a
            href={site.contact.instagramUrl}
            rel="noreferrer"
            target="_blank"
          >
            Instagram {site.contact.instagramHandle}
          </a>
          <Link href="/politica-de-privacidade">Política de privacidade</Link>
        </nav>

        <p className="site-footer__copyright">
          © {new Date().getFullYear()} {site.brand.name}
        </p>
      </div>
    </footer>
  );
}

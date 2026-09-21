import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { QuoteModalProvider } from "@/components/quote/quote-modal";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "AZ Tavares Eventos",
  description: "Decoração para celebrações em Niterói e região.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${playfairDisplay.variable} ${lato.variable}`}
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <a className="skip-link" href="#main-content">
          Pular para o conteúdo
        </a>
        <QuoteModalProvider>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </QuoteModalProvider>
      </body>
    </html>
  );
}

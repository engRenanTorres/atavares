export default function Home() {
  return (
    <main>
      <section className="section-space">
        <div className="page-shell">
          <p className="eyebrow">Base visual · AZ Tavares Eventos</p>
          <h1 className="heading-1 mt-4 max-w-3xl">
            Uma direção editorial para celebrações memoráveis.
          </h1>
          <p className="mt-6 max-w-2xl">
            Prévia dos tokens que vão orientar cada página: contraste
            acolhedor, tipografia com presença e espaço para a fotografia ser
            protagonista.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a className="button button--primary" href="#acoes">
              Solicite um orçamento
            </a>
            <a className="button button--secondary" href="#tipografia">
              Ver a tipografia
            </a>
          </div>

          <hr className="token-divider" />

          <section aria-labelledby="cores">
            <p className="eyebrow">Paleta</p>
            <h2 className="heading-2 mt-3" id="cores">
              Cores oficiais, usadas com intenção.
            </h2>
            <div className="mt-8 grid gap-px overflow-hidden border border-[var(--border-subtle)] bg-[var(--border-subtle)] sm:grid-cols-2 lg:grid-cols-4">
              <ColorToken name="Cream" value="#F5F0E7" className="bg-cream text-body" />
              <ColorToken name="Ink" value="#191515" className="bg-ink text-cream" />
              <ColorToken name="Wine" value="#651C25" className="bg-wine text-cream" />
              <ColorToken
                name="Terracotta"
                value="#B85C4A"
                className="bg-terracotta text-[var(--text-on-terracotta)]"
              />
              <ColorToken name="Forest" value="#263D32" className="bg-forest text-cream" />
              <ColorToken name="Gold" value="#A77B42" className="bg-gold text-[var(--text-on-terracotta)]" />
              <ColorToken name="Body" value="#2B2320" className="bg-body text-cream" />
              <ColorToken name="Muted" value="#6D625C" className="bg-muted text-cream" />
            </div>
          </section>

          <hr className="token-divider" />

          <section id="tipografia" aria-labelledby="tipografia-titulo">
            <p className="eyebrow">Tipografia</p>
            <h2 className="heading-2 mt-3" id="tipografia-titulo">
              Playfair Display encontra Lato.
            </h2>
            <div className="mt-8 grid gap-10 border-l border-[var(--border-subtle)] pl-6 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
              <div>
                <h3 className="heading-1">Celebrações que ganham cenário.</h3>
                <h4 className="heading-2 mt-5">
                  Editorial, caloroso e sofisticado.
                </h4>
                <h5 className="heading-3 mt-5">
                  Detalhes que acolhem cada história.
                </h5>
              </div>
              <div>
                <p>
                  Lato conduz a leitura com clareza e proximidade, deixando a
                  presença expressiva da Playfair Display para os momentos de
                  maior destaque.
                </p>
                <p className="mt-4 text-[var(--text-muted)]">
                  Corpo responsivo de 1rem a 1.125rem, com entrelinha de 1.65
                  para preservar o ritmo em telas pequenas.
                </p>
              </div>
            </div>
          </section>

          <hr className="token-divider" />

          <section id="acoes" aria-labelledby="acoes-titulo">
            <p className="eyebrow">Ações e foco</p>
            <h2 className="heading-2 mt-3" id="acoes-titulo">
              Interações simples, com foco sempre visível.
            </h2>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a className="button button--primary" href="#acoes">
                Ação principal
              </a>
              <a className="button button--secondary" href="#acoes">
                Ação secundária
              </a>
              <a className="px-2 py-3 font-bold text-wine underline decoration-gold decoration-1 underline-offset-4" href="#cores">
                Link de texto
              </a>
            </div>
            <p className="mt-6 max-w-2xl text-[var(--text-muted)]">
              Navegue com a tecla Tab para conferir o anel de foco em
              terracotta. O fundo terracotta recebe texto escuro exclusivo
              para manter contraste AA.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

function ColorToken({
  name,
  value,
  className,
}: {
  name: string;
  value: string;
  className: string;
}) {
  return (
    <div className={`min-h-40 p-5 ${className}`}>
      <p className="font-bold">{name}</p>
      <p className="mt-1 text-sm">{value}</p>
    </div>
  );
}

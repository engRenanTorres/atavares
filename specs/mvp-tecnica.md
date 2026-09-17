# SPEC Técnica: MVP - AZ Tavares Eventos

**Status:** pronto para implementação  
**Stack aprovada:** Next.js, TypeScript, Tailwind CSS e Vercel  
**Persistência:** nenhuma no MVP

**Documentos relacionados:** [`mvp-produto.md`](mvp-produto.md) · [`design-direction.md`](design-direction.md) · [`tasks.md`](tasks.md)

## 1. Arquitetura

Next.js com App Router e páginas estáticas, compatível com deploy zero-config na Vercel.

```text
app/
  page.tsx
  portfolio/page.tsx
  servicos/page.tsx
  sobre/page.tsx
  politica-de-privacidade/page.tsx
  layout.tsx
components/
  layout/
  sections/
  portfolio/
  quote/
content/
  site.ts
  portfolio.ts
public/
  images/
```

Os nomes atuais de imagens do portfólio (em `public/portifolio-casamento-jessica-renan/`) devem ser migrados para nomes semânticos antes de serem referenciados. Exemplos: `casamento-jessica-renan-bolo-floral-01.jpg`, `casamento-jessica-renan-mesa-doces-01.jpg`.

**Assets de marca:**
- `public/logo-az-tavares.svg` — versão primária (vetorizada, fundo removido): header, footer e demais usos em UI.
- `public/logo-az-tavares.png` — Open Graph, favicon derivado e fallback para contextos sem SVG.

## 2. Modelo de Conteúdo

Conteúdo estático e tipado em arquivos TypeScript. Elimina backend e permite adicionar portfólios futuros com um objeto de conteúdo e imagens.

```ts
type PortfolioImage = {
  src: string;
  alt: string;
  category: "floral" | "bolo" | "mesa-doces" | "detalhes" | "ambiente";
  width: number;
  height: number;
};

type PortfolioEvent = {
  slug: string;
  title: string;
  summary: string;
  coverImage: PortfolioImage;
  images: PortfolioImage[];
  location?: string;
  date?: string;
};

type QuoteFormData = {
  name: string;
  eventType: "Casamento" | "Aniversário" | "Corporativo" | "Outro";
  eventDate?: string;
  location?: string;
  guestCount?: string;
  details?: string;
  privacyAccepted: boolean;
};
```

Dados de marca e contato centralizados em `content/site.ts`:

- nome exibido e caminhos do logo (SVG primário, PNG fallback);
- cidade/região;
- telefone do WhatsApp em formato E.164 (`5521998760845`);
- URL do Instagram;
- textos de CTA;
- serviços;
- perguntas e respostas de FAQ;
- mensagem base do WhatsApp.

## 3. Formulário de Orçamento

Componente client-side dentro de modal.

- Validar campos obrigatórios no navegador antes de gerar a URL.
- Labels visíveis, descrições de erro associadas com `aria-describedby`.
- Focus trap no modal aberto, devolver foco ao CTA de origem ao fechar, `Escape` fecha.
- Gerar a mensagem por função pura; `encodeURIComponent` em toda a mensagem.
- Abrir a URL somente como consequência explícita do clique em "Continuar no WhatsApp".
- Fallback: âncora direta para `https://wa.me/5521998760845` no rodapé/CTA.

Não integrar formulários de terceiros, analytics de captura, banco ou e-mail nesta fase.

## 4. Imagens e Desempenho

- Inventariar imagens com largura, altura e assunto antes de criar a galeria.
- Converter originais para formatos modernos quando apropriado; conservar originais fora do bundle se não necessários.
- Usar `next/image` com `sizes`, largura e altura para prevenir layout shift.
- Imagem de capa forte no hero; lazy load para fotos abaixo da dobra.
- `alt` descritivo em português; nunca "imagem 1" ou nome de arquivo.
- Respeitar proporção original; `object-fit: cover` apenas em molduras predefinidas (ver `design-direction.md` §5).

## 5. Design System Mínimo

Tokens e regras visuais definidos em [`design-direction.md`](design-direction.md) — fonte única da verdade para cores, tipografia, espaçamento e movimento. Qualquer divergência deve atualizar aquele arquivo antes da implementação.

## 6. SEO, Metadados e Privacidade

- Metadados por rota com título único, descrição e URL canônica quando houver domínio.
- Antes do domínio, metadados sem canônica absoluta; atualizar `NEXT_PUBLIC_SITE_URL` no deploy definitivo.
- Open Graph com imagem representativa autorizada; incluir o logo PNG como `og:logo`/imagem secundária quando fizer sentido.
- JSON-LD `LocalBusiness` somente com dados reais confirmados: nome, área atendida, telefone e URL social. Não inventar endereço, horário, preço ou avaliações.
- Página curta de privacidade esclarecendo que os dados do modal apenas montam localmente a mensagem que o usuário escolhe enviar ao WhatsApp.

## 7. Deploy Vercel

1. Criar repositório Git com o projeto Next.js.
2. Importar na Vercel e selecionar preset Next.js.
3. Preview para cada pull request; produção na branch principal.
4. Com domínio próprio: adicionar ao projeto, configurar DNS e atualizar `NEXT_PUBLIC_SITE_URL`.
5. Redirecionar `www` para o domínio canônico, quando aplicável.

Nenhuma variável secreta é necessária no MVP. Telefone de WhatsApp e links sociais são dados públicos versionados.

## 8. Execução

A implementação segue `tasks.md` — tasks atômicas, cada uma com entrega revisável e critério de pronto. Não acumular pendências entre tasks.

## 9. Validação de Aceite Técnico

- Build de produção Next.js sem erros de tipos ou lint existentes.
- Links internos, menu mobile, lightbox e todos os CTAs de WhatsApp funcionando.
- URL final do WhatsApp com mensagem codificada; nenhum campo interpolado como HTML.
- Modal inteiramente utilizável por teclado e leitor de tela.
- Imagens com dimensões reservadas e `alt` significativo.
- Nenhuma rota depende de API, variável secreta ou serviço de backend.

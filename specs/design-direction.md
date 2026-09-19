# Design Direction: AZ Tavares Eventos

**Status:** paleta atualizada com as cores oficiais do logo — demais itens aguardam aprovação antes da Task 3 (base visual)  
**Derivado de:** [`mvp-produto.md`](mvp-produto.md) §2 + análise das fotos autorizadas do Casamento Jéssica e Renan + logo oficial (`public/logo-az-tavares.png` / `.svg`)

Este documento é o contrato visual do projeto. Nenhuma task de UI deve divergir daqui sem atualizar este arquivo antes.

## 1. Mood

**Editorial, caloroso e sofisticado.** A sensação deve ser a de folhear uma revista de casamento impressa: fotos grandes, texto com espaço para respirar, nada disputando atenção com as imagens.

## 2. Paleta de Cores

Cores oficiais extraídas do logo, alinhadas com as fotos do portfólio (vinho das rosas, coral das astromélias, verde das folhagens, dourado envelhecido, marfim do bolo):

| Token | Hex | Uso |
|---|---|---|
| `surface.cream` | `#F5F0E7` | Fundo principal das seções claras (marfim oficial do logo) |
| `surface.ink` | `#191515` | Fundo de seções escuras (hero, CTA final) |
| `brand.wine` | `#651C25` | Destaques, títulos em seções claras, hover de links (vinho oficial) |
| `brand.terracotta` | `#B85C4A` | Acento principal: botões, detalhes, linhas (coral/terracota oficial) |
| `brand.forest` | `#263D32` | Acento secundário: ícones, selos, categorias da galeria (verde oficial) |
| `accent.gold` | `#A77B42` | Dourado envelhecido oficial: micro-detalhes, divisores, underlines — com parcimônia |
| `text.body` | `#2B2320` | Texto corrido sobre fundo claro |
| `text.muted` | `#6D625C` | Legendas, metadados, placeholders |

**Regras de contraste:**
- Texto sobre `cream`: usar `body` ou `wine` — nunca `terracotta` em texto pequeno (falha WCAG AA).
- Botões primários: fundo `terracotta`, texto `on-terracotta` (`#0E0B0A`) para contraste AA; hover escurece para `wine` com texto `cream`. O `cream` sobre `terracotta` tem contraste de 3,96:1 e não atende a texto normal.
- Seções escuras alternam com claras para ritmo editorial; nunca duas escuras seguidas.

## 3. Tipografia

| Papel | Fonte | Peso | Observação |
|---|---|---|---|
| Títulos (H1–H3) | **Playfair Display** | 500–700 | Serifada de alto contraste; harmonia direta com a serifada do monograma do logo. Google Fonts. |
| Texto e UI | **Lato** | 400–700 | Humanista, ótima legibilidade em mobile; par clássico do Playfair. |
| Overline/etiquetas | Lato | 700, caps, tracking +0.15em | "PORTFÓLIO", "NITERÓI E REGIÃO" etc. |

**Escala (mobile → desktop):** H1 `2.25rem → 4rem`, H2 `1.75rem → 2.75rem`, H3 `1.25rem → 1.5rem`, corpo `1rem–1.125rem`, line-height corpo `1.65`.

**Alternativa mais romântica:** Cormorant Garamond nos títulos. Mais delicado, menos legível em tamanhos pequenos — decidir na revisão da Task 4.

## 4. Layout

- Grid de 12 colunas em desktop, container máximo `72rem`, padding lateral `1.25rem → 2rem`.
- **Ritmo vertical generoso:** seções com `py` de `5rem → 8rem`. Espaço é o principal sinal de luxo.
- Assimetria controlada: blocos de texto deslocados da imagem, grids de galeria quebrando a coluna (estilo editorial); nunca tudo centralizado.
- Bordas retas ou `rounded` mínimo (`2px–4px`). **Sem** cantos muito arredondados — quebram o tom editorial.
- Divisores: linhas finas `1px` em `terracotta` a 40% de opacidade, ou ornamentos tipográficos discretos.

## 5. Tratamento de Imagem

- Fotos em `object-fit: cover` dentro de molduras de proporção fixa (3:2, 4:5, 1:1) conforme o slot — nunca distorcer.
- Sem filtros pesados nem overlays coloridos; no máximo gradiente escuro de 40–60% sobre o hero para legibilidade.
- Molduras com `border` fino `cream` em seções escuras, ou sombra difusa sutil em seções claras.
- Sem carrossel automático. Galeria estática + lightbox sob demanda.

## 6. Ícones

**Lucide**, stroke `1.5px`, `20px` em UI e `28px` em cards de serviço. Apenas outlined — ícones preenchidos quebrariam a leveza. WhatsApp usa o ícone oficial de marca.

## 7. Movimento

- Revelação de seções: `fade + translateY(12px)`, `300–400ms`, `ease-out`, via IntersectionObserver.
- Hover em imagens da galeria: zoom `1.03` suave (`500ms`).
- **`prefers-reduced-motion` desliga tudo acima.**
- Sem parallax, autoplay ou animações em loop.

## 8. Referências Aplicadas

| Referência | O que aproveitamos | O que NÃO aproveitamos |
|---|---|---|
| zefiroeventos.com.br | Prova social e tom acolhedor de casa de eventos | Estrutura datada, textos longos |
| ballroom.com.br | Foto como protagonista, navegação enxuta | Formato portal/vitrine de casas — somos decoradora |
| casamentosemniteroi.com.br | SEO local e clareza sobre serviços | Densidade de texto e tom comercial direto |

## 9. Decisões Autorais (intencionalmente diferentes)

1. **Modal de orçamento antes do WhatsApp** — nenhuma referência faz isso; é o diferencial de qualificação de lead.
2. **Logo oficial desde o lançamento** — usar preferencialmente `logo-az-tavares.svg` (vetorizado, fundo removido) no header; `logo-az-tavares.png` para Open Graph e contextos sem suporte a SVG. Sobre fundos escuros, avaliar variante com marca em `cream`/`gold` (o SVG tem fundo transparente, mas o vinho escuro pode perder contraste sobre `ink` — testar na Task 4).
3. **Seções alternadas claro/escuro** criando capítulos visuais, como uma revista.
4. **Portfólio nomeado** ("Casamento Jéssica e Renan") em vez de galeria anônima — humaniza e ajuda SEO.

## 10. Acessibilidade (não negociável)

- Contraste mínimo AA: 4.5:1 texto normal, 3:1 texto grande.
- Foco visível em todos os interativos (outline `terracotta` 2px).
- `alt` descritivo em português em todas as fotos.
- Modal com focus trap, `Escape` fecha, foco retorna ao CTA de origem.

## 11. Aprovação Pendente

Antes de codar a Task 3 (base visual), confirmar:

- [x] Paleta definida — cores oficiais do logo (§2)
- [x] Logo oficial entregue (`public/logo-az-tavares.png` e `.svg`)
- [x] Acento principal: `terracotta` nos botões
- [x] Par tipográfico: Playfair Display + Lato
- [x] Ritmo claro/escuro alternado nas seções

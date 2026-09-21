# Tasks de Implementação: MVP - AZ Tavares Eventos

**Princípio:** entrega atômica. Cada task produz algo revisável; aprovação da task N libera a N+1. Não acumular "ajusto depois".

**Legenda:** 🔲 pendente · 🔶 em andamento · ✅ aprovada  
**Dependências** indicam a task que precisa estar ✅ antes de começar.

---

## Fase A — Fundação

### Task 1 — Setup do projeto ✅
- **Dep:** nenhuma
- **Escopo:** `create-next-app` com TypeScript, Tailwind, App Router, ESLint. Estrutura de pastas conforme `mvp-tecnica.md` §1. Repositório Git inicializado.
- **Entrega revisável:** projeto roda com `npm run dev`; build de produção passa.
- **Fora de escopo:** qualquer estilo ou conteúdo visual.

### Task 2 — Curadoria e otimização das imagens ✅
- **Dep:** nenhuma (pode rodar em paralelo com a Task 1)
- **Escopo:** revisar os 41 arquivos de `public/portifolio-casamento-jessica-renan/`, selecionar/curar por categoria (floral, bolo, mesa de doces, detalhes, ambiente), renomear semanticamente, converter para formato moderno e registrar dimensões. Originais ficam fora do bundle. Sugestão: corrigir o nome da pasta para `portfolio-` (sem "i") ao migrar para `public/images/`.
- **Entrega revisável:** `public/images/` com nomes semânticos + planilha/objeto de inventário (src, alt sugerido, categoria, width, height).
- **Ponto de decisão:** quais 6–8 fotos viram destaque na home; qual vira capa do hero. **Requer aprovação do responsável.**
- **Seleção aprovada:** `ambiente-mesa-bolo-luzes-04` como hero; os oito destaques da home estão em `content/portfolio-images.ts`.

### Task 3 — Tokens e base visual ✅
- **Dep:** Task 1 · requer aprovação da §11 de `design-direction.md`
- **Escopo:** configurar tokens de cor, tipografia (Playfair + Lato via `next/font`), escala de espaçamento e classes utilitárias conforme `design-direction.md`. Criar `content/site.ts` com dados de marca/contato.
- **Entrega revisável:** página de preview interna (ou home em branco) exibindo todos os tokens aplicados — cores, escala tipográfica, botões, foco visível.
- **Ponto de decisão:** aprovar contraste real dos tokens nos componentes base.

## Fase B — Estrutura e Home

### Task 4 — Layout global: header, footer, navegação mobile ✅
- **Dep:** Task 3
- **Escopo:** logo oficial SVG no header (testar contraste sobre fundos escuros; se o vinho sumir sobre `ink`, aplicar variante ou fundo `cream` na barra), menu desktop/mobile acessível, CTA "Solicite um orçamento" (ainda sem modal — link de fallback para wa.me), rodapé com Instagram e política.
- **Entrega revisável:** navegação completa funcional em desktop e mobile, com foco por teclado.

### Task 5 — Hero + seção de apresentação ✅
- **Dep:** Tasks 2 e 4
- **Escopo:** hero com foto de impacto aprovada, frase de valor, overline "Niterói e região", CTA; bloco institucional com texto pendente sinalizado.
- **Entrega revisável:** primeira dobra completa da home.

### Task 6 — Serviços + Processo 🔶
- **Dep:** Task 4
- **Escopo:** cards dos 7 serviços com ícones Lucide; seção de processo em 3 etapas.
- **Entrega revisável:** duas seções completas na home.

### Task 7 — Modal de orçamento → WhatsApp 🔲
- **Dep:** Task 4
- **Escopo:** modal acessível (focus trap, `Escape`, retorno de foco), formulário com validação, função pura geradora da mensagem, `encodeURIComponent`, fallback sem JS. Substituir todos os CTAs para abrir o modal.
- **Entrega revisável:** fluxo completo: CTA → formulário → WhatsApp com mensagem montada conforme modelo de `mvp-produto.md` §6.
- **Teste manual obrigatório:** mensagem recebida no número real com campos preenchidos e "não informado" nos opcionais vazios.

### Task 8 — Portfólio em destaque + FAQ + CTA final na home 🔲
- **Dep:** Tasks 2, 6 e 7
- **Escopo:** seleção curada 6–8 fotos aprovadas na Task 2 com link para `/portfolio`; FAQ com conteúdo confirmado; CTA final em seção escura.
- **Entrega revisável:** home completa de ponta a ponta.

## Fase C — Páginas Complementares

### Task 9 — Galeria `/portfolio` + lightbox 🔲
- **Dep:** Tasks 2 e 7
- **Escopo:** `content/portfolio.ts` tipado, grid editorial, filtros por categoria, lightbox acessível (teclado, `alt` contextual).
- **Entrega revisável:** galeria completa do Casamento Jéssica e Renan.

### Task 10 — `/servicos` e `/sobre` 🔲
- **Dep:** Task 6
- **Escopo:** detalhamento dos serviços; página institucional com história (texto pendente sinalizado) e processo expandido.
- **Entrega revisável:** duas rotas completas.

### Task 11 — Depoimentos (placeholder) + política de privacidade 🔲
- **Dep:** Task 8
- **Escopo:** componente de depoimentos com Lorem Ipsum e flag para ocultar; página de privacidade explicando uso local dos dados do formulário.
- **Entrega revisável:** seção e rota completas.

## Fase D — Publicação

### Task 12 — SEO, metadados e JSON-LD 🔲
- **Dep:** Tasks 8–11
- **Escopo:** metadados por rota, Open Graph com imagem autorizada, `LocalBusiness` apenas com dados reais, sitemap.
- **Entrega revisável:** validação com inspetor de metadados (ex.: view-source + validador de rich results).

### Task 13 — Revisão de qualidade 🔲
- **Dep:** todas anteriores
- **Escopo:** auditoria de acessibilidade (teclado, contraste, `alt`), `prefers-reduced-motion`, desempenho de imagens, responsividade real em celular, critérios de aceite de `mvp-produto.md` §10.
- **Entrega revisável:** checklist §10 integralmente verificado.

### Task 14 — Deploy Vercel 🔲
- **Dep:** Task 13
- **Escopo:** importar repositório, produção na branch principal, preview por PR. Sem domínio nesta fase.
- **Entrega revisável:** URL `*.vercel.app` pública e funcional.

---

## Pendências externas (bloqueiam publicação, não o desenvolvimento)

- [ ] Texto institucional e diferenciais reais (alimenta Tasks 5 e 10)
- [ ] Aprovação das fotos de destaque (Task 2)
- [ ] Aprovação do Design Direction §11 (Task 3)
- [ ] Depoimentos reais autorizados (substituem placeholder da Task 11)
- [ ] Domínio próprio (pós Task 14)

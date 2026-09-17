# SPEC de Produto: MVP - AZ Tavares Eventos

**Status:** pronto para implementação  
**Plataforma inicial:** Vercel  
**Público principal:** pessoas planejando casamentos em Niterói e região  
**Público secundário:** clientes de aniversários e eventos corporativos  
**Conversão principal:** início de conversa qualificada pelo WhatsApp

**Documentos relacionados:** [`design-direction.md`](design-direction.md) · [`tasks.md`](tasks.md) · [`mvp-tecnica.md`](mvp-tecnica.md)

## 1. Objetivo

Apresentar a AZ Tavares Eventos como empresa de decoração para eventos, com ênfase em casamentos, transformando o portfólio fotográfico existente em pedidos de orçamento pelo WhatsApp.

O MVP não terá backend, banco de dados, login ou painel administrativo. Conteúdo, imagens, textos e configurações de contato serão mantidos no repositório e publicados pela Vercel.

## 2. Direção de Marca e Interface

| Elemento | Decisão |
|---|---|
| Tom | Editorial, luxuoso, romântico e acolhedor |
| Fotografia | Protagonista; imagens em tela cheia, recortes verticais e grids assimétricos |
| Paleta | Vinho escuro, coral/terracota, verde floresta, marfim e dourado envelhecido |
| Tipografia | Serif editorial expressiva para títulos + sans-serif legível para textos e interface |
| Composição | Muito respiro, linhas finas, bordas discretas e blocos de alto contraste |
| Movimento | Transições suaves ao revelar seções; sem carrosséis automáticos ou animações que prejudiquem desempenho |

Detalhamento e tokens em [`design-direction.md`](design-direction.md). As fotos fornecidas (flores em vermelho, vinho, rosa e laranja; madeira; iluminação quente) são a referência visual primária. Os sites indicados servem como referência de mercado; o resultado deve preservar identidade própria.

## 3. Arquitetura de Informação

| Rota | Função |
|---|---|
| `/` | Página institucional completa, conversão e amostra do portfólio |
| `/portfolio` | Galeria completa e página de detalhe do casamento Jéssica e Renan |
| `/servicos` | Detalhamento dos serviços e CTA |
| `/sobre` | História, processo e área institucional |
| `/politica-de-privacidade` | Aviso de tratamento de dados do formulário |

O menu superior aponta para as seções relevantes na home e mantém CTA de orçamento visível. Em mobile, abre em menu acessível.

## 4. Conteúdo da Home

1. **Cabeçalho:** logo oficial (`public/logo-az-tavares.svg`, preferencial; PNG como fallback), navegação e botão "Solicite um orçamento".
2. **Hero:** fotografia de impacto, frase de valor focada em transformar celebrações em cenários memoráveis, local de atendimento "Niterói e região" e CTA para abrir o formulário.
3. **Apresentação:** bloco curto sobre a empresa. Texto temporário marcado como pendente até que a história e os diferenciais sejam fornecidos.
4. **Serviços:** cards para decoração completa, decoração floral, mesa de doces, locação, cerimônia, aniversários e eventos corporativos.
5. **Portfólio em destaque:** chamada para "Casamento Jéssica e Renan", com seleção curada de fotos e link para a galeria completa.
6. **Processo:** três etapas claras: conte sua ideia, proposta personalizada e montagem no dia do evento.
7. **Depoimentos:** componente preparado, exibindo placeholder Lorem Ipsum até haver depoimentos reais autorizados. Deve ser removível por configuração.
8. **FAQ:** respostas objetivas sobre região atendida, tipos de evento, personalização, antecedência e como pedir orçamento. Informações comerciais não confirmadas permanecem pendentes — nunca inventadas.
9. **CTA final:** reforço do convite para solicitar orçamento.
10. **Rodapé:** AZ Tavares Eventos, Niterói e região, link de WhatsApp, Instagram `@aztavares`, política de privacidade e espaço para links futuros.

## 5. Portfólio

### Caso inicial

- **Título:** Casamento Jéssica e Renan
- **Descrição:** texto curatorial temporário sobre uma celebração em tons quentes, com flores, mesa de doces, bolo e velas. Substituir por dados confirmados quando disponíveis.
- **Imagens:** curadoria das fotos em `public/portifolio-casamento-jessica-renan/` (41 arquivos).
- **Categorias internas:** floral, bolo, mesa de doces, detalhes e ambiente.

A galeria abre imagens ampliadas em lightbox acessível, com descrição alternativa contextual. Não expor nomes de arquivos originados do WhatsApp na interface.

## 6. Jornada de Orçamento no WhatsApp

1. O visitante seleciona qualquer CTA "Solicite um orçamento".
2. Um modal acessível e responsivo abre, em vez de redirecionar imediatamente.
3. O formulário coleta:
   - nome (obrigatório);
   - tipo de evento (obrigatório: casamento, aniversário, corporativo ou outro);
   - data prevista;
   - local/região;
   - quantidade aproximada de convidados;
   - detalhes adicionais;
   - aceite de privacidade.
4. Ao enviar, o navegador abre nova aba para `https://wa.me/5521998760845`, com mensagem URI-encoded.
5. Nenhum dado é armazenado ou enviado a servidor pelo site.

### Modelo da mensagem

```text
Olá! Sou {nome} e gostaria de mais informações sobre decoração para {tipoDeEvento}.

Data prevista: {dataOuNaoInformada}
Local/região: {localOuNaoInformado}
Convidados: {convidadosOuNaoInformado}
Detalhes: {detalhesOuNaoInformados}
```

Campos opcionais sem valor apresentam "não informado". O texto fica centralizado em configuração para ajustes futuros.

## 7. Requisitos Funcionais

- Todos os CTAs de orçamento abrem o mesmo modal e produzem a mensagem de WhatsApp.
- O telefone aparece apenas em links clicáveis; exibir o número por extenso é opcional.
- O Instagram aponta para `https://instagram.com/aztavares`.
- O cabeçalho usa o logo oficial; o SVG (fundo removido) é a versão primária e o PNG serve para Open Graph e fallbacks.
- O portfólio permite inclusão de novos eventos por arquivo de conteúdo, sem alterar componentes.
- Responsivo, com prioridade para navegação e formulário em celular.
- Meta título, descrição, Open Graph e dados locais básicos voltados a "decoração de casamentos em Niterói".

## 8. Requisitos Não Funcionais

- Imagens convertidas/otimizadas com dimensões apropriadas.
- Navegação por teclado, foco no modal, contraste adequado e `alt` em todas as imagens.
- Respeitar `prefers-reduced-motion`.
- Sem dependências que exijam backend no primeiro deploy.
- Publicar somente fotos autorizadas do diretório `public` (autorização confirmada pelo responsável).

## 9. Fora de Escopo do MVP

- Painel administrativo e autenticação.
- CMS ou edição visual sem deploy.
- Captura de leads em banco, e-mail, CRM ou automação.
- Pagamentos, agenda em tempo real e consulta de disponibilidade.
- Blog autogerenciável (área editorial estática pode vir em iteração posterior).
- Avaliações e números institucionais fictícios.

## 10. Critérios de Aceite

- Visitante em mobile navega pelo portfólio e inicia conversa de orçamento em até três interações a partir da home.
- O envio do formulário abre o WhatsApp com nome e tipo de evento preenchidos, incluindo campos opcionais fornecidos.
- Sem JavaScript, links diretos de WhatsApp continuam disponíveis como alternativa aos CTAs modais.
- Nenhuma informação do formulário persiste no navegador ou é enviada a terceiros antes de o usuário confirmar a conversa no WhatsApp.
- Todas as páginas navegáveis em desktop e celular, sem corte de texto ou imagens distorcidas.
- O portfólio usa apenas arquivos autorizados do diretório público.

## 11. Pendências de Conteúdo Antes da Publicação

- ~~Logo definitivo~~ ✅ entregue em 16/09/2026 (`public/logo-az-tavares.png` / `.svg`).
- Variante do logo para fundos escuros, caso o teste de contraste da Task 4 indique necessidade.
- Texto institucional, história e diferenciais reais.
- Depoimentos autorizados para substituir Lorem Ipsum.
- Informações de antecedência, cobertura geográfica detalhada e perguntas comerciais do FAQ.
- Domínio próprio e e-mail corporativo, se desejado.

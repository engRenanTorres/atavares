import { Reveal } from "@/components/sections/reveal";

const privacyTopics = [
  {
    title: "Dados informados no orçamento",
    content:
      "Ao preencher o formulário de orçamento, você pode informar nome, tipo de evento, data prevista, local ou região, quantidade de convidados e detalhes adicionais.",
  },
  {
    title: "Uso local no navegador",
    content:
      "Essas informações são usadas apenas no seu navegador para montar a mensagem de orçamento. O site não envia os dados para servidor, banco de dados, e-mail, CRM ou serviço de terceiros.",
  },
  {
    title: "Envio pelo WhatsApp",
    content:
      "A mensagem só é aberta no WhatsApp quando você seleciona “Continuar no WhatsApp”. A partir desse momento, o tratamento da conversa segue as políticas do WhatsApp e a relação direta com a AZ Tavares Eventos.",
  },
  {
    title: "Armazenamento",
    content:
      "O site não salva os dados preenchidos no formulário no navegador. Se preferir, você também pode iniciar a conversa diretamente pelo link de WhatsApp disponível no rodapé.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section
        className="privacy-page__intro section-space"
        aria-labelledby="privacy-page-title"
      >
        <Reveal className="page-shell privacy-page__intro-content">
          <p className="eyebrow">Privacidade</p>
          <h1 className="heading-1 mt-4" id="privacy-page-title">
            Seu pedido de orçamento começa no seu navegador.
          </h1>
          <p>
            Explicamos de forma simples como as informações do formulário são
            usadas antes de você decidir iniciar uma conversa no WhatsApp.
          </p>
        </Reveal>
      </section>

      <section
        className="privacy-page__content section-space"
        aria-labelledby="privacy-topics-title"
      >
        <Reveal className="page-shell privacy-page__layout">
          <div>
            <p className="eyebrow">Como funciona</p>
            <h2 className="heading-2 mt-4" id="privacy-topics-title">
              Sem cadastro e sem envio automático.
            </h2>
          </div>

          <ol className="privacy-page__topics">
            {privacyTopics.map((topic, index) => (
              <li className="privacy-page__topic" key={topic.title}>
                <span aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="heading-3">{topic.title}</h3>
                  <p>{topic.content}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>
    </>
  );
}

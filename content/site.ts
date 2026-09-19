export const site = {
  brand: {
    name: "AZ Tavares Eventos",
    logo: {
      svg: "/logo-az-tavares.svg",
      png: "/logo-az-tavares.png",
    },
  },
  location: "Niterói e região",
  contact: {
    whatsappE164: "5521998760845",
    whatsappUrl: "https://wa.me/5521998760845",
    instagramUrl: "https://instagram.com/aztavares",
    instagramHandle: "@aztavares",
  },
  cta: {
    quote: "Solicite um orçamento",
    whatsapp: "Falar pelo WhatsApp",
    portfolio: "Conheça o portfólio",
  },
  services: [
    "Decoração completa",
    "Decoração floral",
    "Mesa de doces",
    "Locação",
    "Cerimônia",
    "Aniversários",
    "Eventos corporativos",
  ],
  faqs: [
    {
      question: "Quais regiões vocês atendem?",
      answer: "Atendemos Niterói e região.",
    },
    {
      question: "Quais tipos de evento vocês decoram?",
      answer:
        "Trabalhamos com casamentos, aniversários e eventos corporativos.",
    },
    {
      question: "A decoração é personalizada?",
      answer:
        "Cada proposta é pensada de acordo com a celebração e as referências compartilhadas.",
    },
    {
      question: "Com que antecedência devo pedir um orçamento?",
      answer:
        "Estamos confirmando esta informação. Fale conosco pelo WhatsApp para receber a orientação mais adequada.",
    },
  ],
  whatsappMessageTemplate: `Olá! Sou {nome} e gostaria de mais informações sobre decoração para {tipoDeEvento}.

Data prevista: {dataOuNaoInformada}
Local/região: {localOuNaoInformado}
Convidados: {convidadosOuNaoInformado}
Detalhes: {detalhesOuNaoInformados}`,
} as const;


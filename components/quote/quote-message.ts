import { site } from "@/content/site";

export type QuoteFormData = {
  name: string;
  eventType: "Casamento" | "Aniversário" | "Corporativo" | "Outro";
  eventDate: string;
  location: string;
  guestCount: string;
  details: string;
};

function valueOrNotProvided(value: string) {
  return value.trim() || "não informado";
}

export function createWhatsAppMessage(data: QuoteFormData) {
  return site.whatsappMessageTemplate
    .replace("{nome}", data.name.trim())
    .replace("{tipoDeEvento}", data.eventType)
    .replace("{dataOuNaoInformada}", valueOrNotProvided(data.eventDate))
    .replace("{localOuNaoInformado}", valueOrNotProvided(data.location))
    .replace("{convidadosOuNaoInformado}", valueOrNotProvided(data.guestCount))
    .replace(
      "{detalhesOuNaoInformados}",
      valueOrNotProvided(data.details),
    );
}

export function createWhatsAppUrl(data: QuoteFormData) {
  return `${site.contact.whatsappUrl}?text=${encodeURIComponent(
    createWhatsAppMessage(data),
  )}`;
}

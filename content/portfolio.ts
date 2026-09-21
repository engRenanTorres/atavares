import {
  casamentoJessicaRenanImages,
  heroImageId,
  type PortfolioImageInventoryItem,
} from "./portfolio-images";

export type PortfolioEvent = {
  slug: string;
  title: string;
  summary: string;
  status: "publicado" | "em-breve";
  coverImage?: PortfolioImageInventoryItem;
  images: readonly PortfolioImageInventoryItem[];
};

const coverImage = casamentoJessicaRenanImages.find(
  (image) => image.id === heroImageId,
);

if (!coverImage) {
  throw new Error("A capa do Casamento Jéssica e Renan não foi encontrada.");
}

export const portfolioEvents = [
  {
    slug: "casamento-jessica-e-renan",
    title: "Casamento Jéssica e Renan",
    summary:
      "Uma celebração em tons quentes, onde flores, doces, velas e luzes criaram uma atmosfera acolhedora para celebrar o encontro do casal.",
    status: "publicado",
    coverImage,
    images: casamentoJessicaRenanImages,
  },
  {
    slug: "casamento-monique-e-leo",
    title: "Casamento Monique e Leo",
    summary:
      "Novas histórias em preparação. Em breve, este casamento será apresentado aqui com a mesma curadoria de imagens.",
    status: "em-breve",
    images: [],
  },
] as const satisfies readonly PortfolioEvent[];

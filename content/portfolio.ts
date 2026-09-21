import {
  casamentoJessicaRenanImages,
  heroImageId,
  type PortfolioImageInventoryItem,
} from "./portfolio-images";

export type PortfolioEvent = {
  slug: string;
  title: string;
  summary: string;
  coverImage: PortfolioImageInventoryItem;
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
    coverImage,
    images: casamentoJessicaRenanImages,
  },
] as const satisfies readonly PortfolioEvent[];

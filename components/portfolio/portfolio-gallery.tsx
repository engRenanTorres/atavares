"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import type {
  PortfolioImageCategory,
  PortfolioImageInventoryItem,
} from "@/content/portfolio-images";

type GalleryFilter = PortfolioImageCategory | "todos";

type PortfolioGalleryProps = {
  images: readonly PortfolioImageInventoryItem[];
};

const filters: readonly { id: GalleryFilter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "ambiente", label: "Ambientes" },
  { id: "floral", label: "Floral" },
  { id: "bolo", label: "Bolos" },
  { id: "mesa-doces", label: "Mesa de doces" },
  { id: "detalhes", label: "Detalhes" },
];

export function PortfolioGallery({ images }: PortfolioGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("todos");
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const visibleImages =
    activeFilter === "todos"
      ? images
      : images.filter((image) => image.category === activeFilter);
  const selectedImage = images.find((image) => image.id === selectedImageId);
  const selectedIndex = selectedImage
    ? visibleImages.findIndex((image) => image.id === selectedImage.id)
    : -1;

  function openLightbox(
    image: PortfolioImageInventoryItem,
    trigger: HTMLButtonElement,
  ) {
    triggerRef.current = trigger;
    setSelectedImageId(image.id);
  }

  function closeLightbox() {
    setSelectedImageId(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }

  function showAdjacentImage(direction: -1 | 1) {
    if (selectedIndex < 0) {
      return;
    }

    const nextIndex =
      (selectedIndex + direction + visibleImages.length) % visibleImages.length;
    setSelectedImageId(visibleImages[nextIndex].id);
  }

  return (
    <>
      <div className="portfolio-gallery__filters" aria-label="Filtrar fotos">
        {filters.map((filter) => (
          <button
            aria-pressed={activeFilter === filter.id}
            className="portfolio-gallery__filter"
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            type="button"
          >
            {filter.label}
          </button>
        ))}
      </div>

      <p aria-live="polite" className="sr-only">
        {visibleImages.length}{" "}
        {visibleImages.length === 1 ? "foto exibida" : "fotos exibidas"}
      </p>

      <ul className="portfolio-gallery__grid">
        {visibleImages.map((image, index) => (
          <li
            className={`portfolio-gallery__item ${
              image.height > image.width
                ? "portfolio-gallery__item--portrait"
                : ""
            } ${index % 7 === 0 ? "portfolio-gallery__item--wide" : ""}`}
            key={image.id}
          >
            <button
              aria-label={`Ampliar foto: ${image.alt}`}
              className="portfolio-gallery__image-button"
              onClick={(event) => openLightbox(image, event.currentTarget)}
              type="button"
            >
              <Image
                alt={image.alt}
                className="portfolio-gallery__image"
                height={image.height}
                sizes="(min-width: 75rem) 23rem, (min-width: 48rem) 30vw, 100vw"
                src={image.src}
                width={image.width}
              />
              <span className="portfolio-gallery__expand" aria-hidden="true">
                <Expand />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {selectedImage ? (
        <PortfolioLightbox
          image={selectedImage}
          imagePosition={selectedIndex + 1}
          imageTotal={visibleImages.length}
          onClose={closeLightbox}
          onNext={() => showAdjacentImage(1)}
          onPrevious={() => showAdjacentImage(-1)}
        />
      ) : null}
    </>
  );
}

function PortfolioLightbox({
  image,
  imagePosition,
  imageTotal,
  onClose,
  onNext,
  onPrevious,
}: {
  image: PortfolioImageInventoryItem;
  imagePosition: number;
  imageTotal: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        onPrevious();
        return;
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        onNext();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>("button:not([disabled])"),
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements.at(-1);

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  return (
    <div
      className="portfolio-lightbox"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        aria-describedby={descriptionId}
        aria-labelledby={titleId}
        aria-modal="true"
        className="portfolio-lightbox__dialog"
        ref={dialogRef}
        role="dialog"
      >
        <div className="portfolio-lightbox__toolbar">
          <p className="portfolio-lightbox__count">
            {imagePosition} de {imageTotal}
          </p>
          <button
            aria-label="Fechar foto ampliada"
            className="portfolio-lightbox__close"
            onClick={onClose}
            ref={closeButtonRef}
            type="button"
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <div className="portfolio-lightbox__media">
          <Image
            alt={image.alt}
            className="portfolio-lightbox__image"
            height={image.height}
            priority
            sizes="100vw"
            src={image.src}
            width={image.width}
          />
        </div>
        <p className="portfolio-lightbox__description" id={descriptionId}>
          <span className="sr-only" id={titleId}>
            Foto ampliada.
          </span>
          {image.alt}
        </p>
        <div className="portfolio-lightbox__navigation">
          <button
            aria-label="Ver foto anterior"
            className="portfolio-lightbox__navigation-button"
            onClick={onPrevious}
            type="button"
          >
            <ChevronLeft aria-hidden="true" />
            Anterior
          </button>
          <button
            aria-label="Ver próxima foto"
            className="portfolio-lightbox__navigation-button"
            onClick={onNext}
            type="button"
          >
            Próxima
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

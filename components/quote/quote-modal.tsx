"use client";

import {
  createContext,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import { site } from "@/content/site";

import {
  createWhatsAppUrl,
  type QuoteFormData,
} from "./quote-message";

type QuoteModalContextValue = {
  openModal: (trigger: HTMLElement) => void;
};

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null);

const initialFormData: QuoteFormData = {
  name: "",
  eventType: "Casamento",
  eventDate: "",
  location: "",
  guestCount: "",
  details: "",
  privacyAccepted: false,
};

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [trigger, setTrigger] = useState<HTMLElement | null>(null);

  const openModal = useCallback((nextTrigger: HTMLElement) => {
    setTrigger(nextTrigger);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    window.setTimeout(() => trigger?.focus(), 0);
  }, [trigger]);

  return (
    <QuoteModalContext.Provider value={{ openModal }}>
      {children}
      <QuoteModal isOpen={isOpen} onClose={closeModal} />
    </QuoteModalContext.Provider>
  );
}

export function QuoteTrigger({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) {
  const context = useContext(QuoteModalContext);

  if (!context) {
    throw new Error("QuoteTrigger deve ser usado dentro de QuoteModalProvider.");
  }

  const { openModal } = context;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.();
    event.preventDefault();
    openModal(event.currentTarget);
  }

  return (
    <a
      className={className}
      href={site.contact.whatsappUrl}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}

function QuoteModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");
  const titleId = useId();
  const descriptionId = useId();
  const errorId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const dialog = dialogRef.current;
    nameInputRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialog) {
        return;
      }

      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])',
        ),
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
  }, [isOpen, onClose]);

  function updateField<Key extends keyof QuoteFormData>(
    field: Key,
    value: QuoteFormData[Key],
  ) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formData.name.trim() || !formData.privacyAccepted) {
      setError(
        "Informe seu nome e aceite a política de privacidade para continuar.",
      );
      return;
    }

    setError("");
    window.open(createWhatsAppUrl(formData), "_blank", "noopener,noreferrer");
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="quote-modal"
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
        className="quote-modal__dialog"
        ref={dialogRef}
        role="dialog"
      >
        <div className="quote-modal__heading">
          <div>
            <p className="eyebrow">Orçamento</p>
            <h2 className="heading-2 mt-4" id={titleId}>
              Vamos imaginar seu evento?
            </h2>
          </div>
          <button
            aria-label="Fechar formulário de orçamento"
            className="quote-modal__close"
            onClick={onClose}
            type="button"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <p className="quote-modal__description" id={descriptionId}>
          Conte um pouco sobre a celebração. Ao continuar, você escolhe enviar
          essas informações pelo WhatsApp.
        </p>

        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="quote-form__field">
            <label htmlFor="quote-name">Seu nome</label>
            <input
              aria-describedby={error ? errorId : undefined}
              aria-invalid={error && !formData.name.trim() ? true : undefined}
              autoComplete="name"
              id="quote-name"
              onChange={(event) => updateField("name", event.target.value)}
              ref={nameInputRef}
              required
              type="text"
              value={formData.name}
            />
          </div>

          <div className="quote-form__field">
            <label htmlFor="quote-event-type">Tipo de evento</label>
            <select
              id="quote-event-type"
              onChange={(event) =>
                updateField(
                  "eventType",
                  event.target.value as QuoteFormData["eventType"],
                )
              }
              value={formData.eventType}
            >
              <option value="Casamento">Casamento</option>
              <option value="Aniversário">Aniversário</option>
              <option value="Corporativo">Corporativo</option>
              <option value="Outro">Outro</option>
            </select>
          </div>

          <div className="quote-form__columns">
            <div className="quote-form__field">
              <label htmlFor="quote-event-date">Data prevista</label>
              <input
                id="quote-event-date"
                onChange={(event) =>
                  updateField("eventDate", event.target.value)
                }
                type="date"
                value={formData.eventDate}
              />
            </div>
            <div className="quote-form__field">
              <label htmlFor="quote-guest-count">Convidados</label>
              <input
                id="quote-guest-count"
                inputMode="numeric"
                onChange={(event) =>
                  updateField("guestCount", event.target.value)
                }
                placeholder="Ex.: 80"
                type="text"
                value={formData.guestCount}
              />
            </div>
          </div>

          <div className="quote-form__field">
            <label htmlFor="quote-location">Local ou região</label>
            <input
              id="quote-location"
              onChange={(event) => updateField("location", event.target.value)}
              type="text"
              value={formData.location}
            />
          </div>

          <div className="quote-form__field">
            <label htmlFor="quote-details">Detalhes adicionais</label>
            <textarea
              id="quote-details"
              onChange={(event) => updateField("details", event.target.value)}
              rows={4}
              value={formData.details}
            />
          </div>

          <label className="quote-form__privacy">
            <input
              aria-describedby={error ? errorId : undefined}
              aria-invalid={
                error && !formData.privacyAccepted ? true : undefined
              }
              checked={formData.privacyAccepted}
              onChange={(event) =>
                updateField("privacyAccepted", event.target.checked)
              }
              required
              type="checkbox"
            />
            <span>
              Li e concordo que estas informações serão usadas somente para
              montar a mensagem que escolherei enviar pelo WhatsApp.
            </span>
          </label>

          {error ? (
            <p aria-live="polite" className="quote-form__error" id={errorId}>
              {error}
            </p>
          ) : null}

          <button className="button button--primary quote-form__submit" type="submit">
            Continuar no WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

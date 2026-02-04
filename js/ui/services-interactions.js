import { getLang } from "../core/language.js";

const LABELS = {
  es: { more: "Ver más", less: "Ver menos" },
  en: { more: "See more", less: "See less" },
};

export function initServiceInteractions() {
  const buttons = document.querySelectorAll(".service-toggle");
  if (!buttons.length) return;

  const lang = getLang();
  const { more, less } = LABELS[lang] || LABELS.es;

  // Ensure initial button label is correct
  buttons.forEach((button) => {
    const card = button.closest(".service-card");
    const isOpen = card.classList.contains("open");
    button.textContent = isOpen ? less : more;
    button.setAttribute("aria-expanded", isOpen ? "true" : "false");

    button.addEventListener("click", () => {
      const card = button.closest(".service-card");
      const wasOpen = card.classList.contains("open");

      // close all
      document.querySelectorAll(".service-card.open").forEach((c) => {
        c.classList.remove("open");
        const b = c.querySelector(".service-toggle");
        if (b) {
          b.setAttribute("aria-expanded", "false");
          b.textContent = more;
        }
      });

      // open clicked if it was closed
      if (!wasOpen) {
        card.classList.add("open");
        button.setAttribute("aria-expanded", "true");
        button.textContent = less;
      }
    });
  });
}
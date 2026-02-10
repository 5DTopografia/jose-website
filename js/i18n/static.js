import { getLang } from "../core/language.js";

const DICT = {
  es: {
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.technology": "Tecnología",

    "pages.services.title": "Servicios",
    "pages.services.area":
    "Trabajamos en el ámbito de las Islas Baleares (Ibiza, Formentera, Mallorca y Menorca)",
    "pages.projects.title": "Proyectos",
    "pages.technology.title": "Tecnología y equipos",
    "pages.technology.intro":
    "Equipos de precisión y tecnología avanzada para garantizar fiabilidad, rapidez y entregas profesionales.",
  },
  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.technology": "Technology",

    "pages.services.title": "Services",
    "pages.services.area":
    "We operate throughout the Balearic Islands (Ibiza, Formentera, Mallorca and Menorca)",
    "pages.projects.title": "Projects",
    "pages.technology.title": "Technology & equipment",
    "pages.technology.intro":
    "Precision instruments and advanced technology to ensure reliability, speed, and professional delivery.",
  },
};

export function applyStaticI18n(lang = getLang()) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = DICT[lang]?.[key];
    if (value) el.textContent = value;
  });
} 
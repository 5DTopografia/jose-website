import { getLang } from "../core/language.js";

const DICT = {
  es: {
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",
    "nav.technology": "Tecnología",

    "pages.services.title": "Servicios",
    "pages.projects.title": "Proyectos",
    "pages.technology.title": "Tecnología y equipos",
  },
  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.technology": "Technology",

    "pages.services.title": "Services",
    "pages.projects.title": "Projects",
    "pages.technology.title": "Technology & equipment",
  },
};

export function applyStaticI18n(lang = getLang()) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = DICT[lang]?.[key];
    if (value) el.textContent = value;
  });
} 
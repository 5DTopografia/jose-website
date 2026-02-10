import { getLang, setLang } from "../core/language.js";
import { applyStaticI18n } from "../i18n/static.js";
import { renderServices } from "./services.js";
import { renderProjects } from "./projects.js";
import { renderTechnology } from "./technology.js";
import { initServiceInteractions } from "./services-interactions.js";
import { initProjectFilters } from "./filters-ui.js";
import { renderHome } from "./home.js";

export function initLanguageToggle(getProjects) {
  const switcher = document.getElementById("langSwitch");
  if (!switcher) return;

  const buttons = switcher.querySelectorAll(".lang-btn");
  if (!buttons.length) return;

  function updateUI(lang) {
    document.documentElement.lang = lang;

    applyStaticI18n(lang);

    buttons.forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive);
    });

    const page = document
      .getElementById("mainContent")
      ?.getAttribute("data-page");

    switch (page) {
      case "home":
        renderHome(lang);
        break;

      case "services":
        renderServices(lang);
        initServiceInteractions();
        break;

      case "projects": {
        const projects =
          typeof getProjects === "function" ? getProjects() : [];
        renderProjects(projects, lang);
        initProjectFilters(lang, projects);
        break;
      }

      case "technology":
        renderTechnology(lang);
        break;
    }
  }

  // Initial render
  updateUI(getLang());

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (lang === getLang()) return;

      setLang(lang);
      updateUI(lang);
    });
  });
}
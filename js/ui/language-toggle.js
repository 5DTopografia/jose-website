import { getLang, setLang } from "../core/language.js";
import { applyStaticI18n } from "../i18n/static.js";
import { renderServices } from "./services.js";
import { renderProjects } from "./projects.js";
import { initServiceInteractions } from "./services-interactions.js";
import { initProjectFilters } from "./filters-ui.js";
import { renderHome } from "./home.js";

export function initLanguageToggle(getProjects) {
  const switcher = document.getElementById("langSwitch");
  if (!switcher) return;

  const buttons = switcher.querySelectorAll(".lang-btn");
  if (!buttons.length) return;

  function updateUI(lang) {
    applyStaticI18n(lang); 
    
    document.documentElement.lang = lang;

    buttons.forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive);
    });

    renderServices(lang);
    initServiceInteractions();

    const projectsList =
      typeof getProjects === "function" ? getProjects() : [];

    renderProjects(projectsList, lang);
    initProjectFilters(lang, projectsList);
    renderHome(lang);
  }

  // Initial render
  updateUI(getLang());

  // Switch handling
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (lang === getLang()) return;

      setLang(lang);
      updateUI(lang);
    });

  });
}
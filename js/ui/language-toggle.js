console.error("LANGUAGE TOGGLE FILE LOADED v2026-02-09");

import { getLang, setLang } from "../core/language.js";
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
    document.documentElement.lang = lang;

    buttons.forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive);
    });

    // Re-render dynamic sections
    renderServices(lang);
    initServiceInteractions();

    const projectsList =
    typeof getProjects === "function" ? getProjects() : [];

    initProjectFilters(lang, projectsList);
    renderProjects(projectsList, lang);
    renderHome(lang);
  }

  // Initial state (on page load)
  updateUI(getLang());


  // Click handling
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;
      if (lang === getLang()) return;

      setLang(lang);
      updateUI(lang);
    });
  });
}
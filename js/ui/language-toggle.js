import { getLang, setLang } from "../core/language.js";
import { renderServices } from "./services.js";
import { renderProjects } from "./projects.js";
import { initServiceInteractions } from "./services-interactions.js";
import { projects } from "../data/project.js";

export function initLanguageToggle() {
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
    renderProjects(projects, lang);
  }

  // Initial state (on page load)
  const currentLang = getLang();
  updateUI(currentLang);

  // Click handling
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.dataset.lang;
      if (selectedLang === getLang()) return;

      setLang(selectedLang);
      updateUI(selectedLang);
    });
  });
}
import { getLang, setLang } from "../core/language.js";
import { renderServices } from "./services.js";
import { renderProjects } from "./projects.js";
import { initServiceInteractions } from "./services-interactions.js";
import { projects } from "../data/project.js";

export function initLanguageToggle() {
  const btn = document.getElementById("langToggle");
  if (!btn) return;

  // Set initial label
  btn.textContent = getLang().toUpperCase();

  btn.addEventListener("click", () => {
    const nextLang = getLang() === "es" ? "en" : "es";
    setLang(nextLang);
    btn.textContent = nextLang.toUpperCase();

    // Re-render UI sections
    renderServices(nextLang);
    initServiceInteractions(); 
    renderProjects(projects, nextLang);
  });
}
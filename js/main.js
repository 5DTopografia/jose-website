import { initHeader } from "./ui/header.js";
import { initFilters } from "./core/filters.js";
import { initLanguage } from "./core/language.js";
import { renderServices } from "./ui/services.js";
import { initServiceInteractions } from "./ui/services-interactions.js";
import { renderProjects } from "./ui/projects.js";
import { initProjectFilters } from "./ui/filters-ui.js";


document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initFilters();
  initLanguage();
  renderServices("es");
  initServiceInteractions();
  renderProjects();
  initProjectFilters();

});
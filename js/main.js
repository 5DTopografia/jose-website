import { initHeader } from "./ui/header.js";
import { initFilters } from "./core/filters.js";
import { initLanguage } from "./core/language.js";
import { renderServices } from "./ui/services.js";
import { initServiceInteractions } from "./ui/services-interactions.js";


document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initFilters();
  initLanguage();
  renderServices("es");
  initServiceInteractions();

});
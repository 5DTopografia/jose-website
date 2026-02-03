import { initHeader } from "./ui/header.js";
import { initFilters } from "./core/filters.js";
import { initLanguage } from "./core/language.js";

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initFilters();
  initLanguage();
});
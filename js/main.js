import { initHeader } from "./ui/header.js";
import { initFilters } from "./core/filters.js";
import { initLanguage } from "./core/language.js";
import { renderServices } from "./ui/services.js";
import { initServiceInteractions } from "./ui/services-interactions.js";

import { loadProjectsFromCMS } from "./data/projects-api.js";
import { renderProjects } from "./ui/projects.js";
import { initProjectFilters } from "./ui/filters-ui.js";
import { initLanguageToggle } from "./ui/language-toggle.js";
import { getLang } from "./core/language.js";
import { renderHome } from "./ui/home.js";
import { renderContact } from "./ui/contact.js";
import { renderTechnology } from "./ui/technology.js";

document.addEventListener("DOMContentLoaded", () => {

  initLanguage();
  initHeader();
  initFilters();
  
  const lang = getLang();

  const page = document
  .getElementById("mainContent")
  ?.getAttribute("data-page");

if (page === "home") {
  renderHome(lang);
}

if (page === "services") {
  renderServices(lang);
  initServiceInteractions();
}

if (page === "contact") {
  renderContact(lang);
}

if (page === "technology") {
  renderTechnology(lang);
}

  initServiceInteractions();

  let cmsProjects = [];

  loadProjectsFromCMS().then((list) => {
    cmsProjects = list;
    
    renderProjects(cmsProjects, lang);
    initProjectFilters(lang, cmsProjects);
  });
  initLanguageToggle(() => cmsProjects);

}); 


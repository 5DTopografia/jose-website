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


document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initHeader();
  initFilters();
  

  const lang = getLang();
  renderHome(lang);

  renderServices(lang);
  initServiceInteractions();

  renderContact(lang);

  let cmsProjects = [];

  loadProjectsFromCMS().then((list) => {
    cmsProjects = list;
    renderProjects(cmsProjects, lang);
    initProjectFilters(lang, cmsProjects);
  });
  initLanguageToggle(() => cmsProjects);

});
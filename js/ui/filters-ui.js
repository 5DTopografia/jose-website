import { services } from "../data/services.js";
import { filterProjectsByService } from "../core/filters.js";
import { renderProjects } from "./projects.js";

export function initProjectFilters(lang = "es", projectsList = []) {
  const desktop = document.getElementById("projectFilters");
  if (!desktop) return;

  const LABELS = {
    es: { all: "Todos" },
    en: { all: "All" },
  };

  // Desktop buttons
  desktop.innerHTML = `
    <button class="filter-btn is-active" data-filter="all">
      ${LABELS[lang].all}
    </button>
    ${services
      .map(
        (s) => `
          <button class="filter-btn" data-filter="${s.id}">
            ${s.title[lang]}
          </button>`
      )
      .join("")}
  `;

  // Initial render (ALL)
  renderProjects(projectsList, lang);

  // Desktop click
  desktop.onclick = (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;

    desktop
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    const type = btn.dataset.filter;
    const filtered =
      type === "all"
        ? projectsList
        : filterProjectsByService(projectsList, type);

    renderProjects(filtered, lang);
  };
}
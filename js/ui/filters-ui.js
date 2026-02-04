import { services } from "../data/services.js";
import { projects } from "../data/project.js";
import { filterProjectsByService } from "../core/filters.js";
import { renderProjects } from "./projects.js";

export function initProjectFilters(lang = "es") {
  const desktop = document.getElementById("projectFilters");
  const mobile = document.getElementById("projectFiltersMobile");
  if (!desktop || !mobile) return;

  const LABELS = {
    es: { all: "Todos" },
    en: { all: "All" }
  };

  // Desktop buttons
  desktop.innerHTML = `
    <button class="filter-btn is-active" data-filter="all">
      ${LABELS[lang].all}
    </button>
    ${services.map(
        (s) =>
          `<button class="filter-btn" data-filter="${s.id}">
            ${s.title[lang]}
          </button>`
      )
      .join("")}
  `;

  // Mobile dropdown
  mobile.innerHTML = `
    <option value="all">${LABELS[lang].all}</option>
    ${services.map(
        (s) =>
          `<option value="${s.id}">
            ${s.title[lang]}
          </option>`
      )
      .join("")}
  `;

  // Initial render
  renderProjects(projects);

  // Desktop click
  desktop.onclick = (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;

    desktop.querySelectorAll(".filter-btn")
      .forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    const type = btn.dataset.filter;
    renderProjects(
      filterProjectsByService(projects, type),
      lang
    );
  };

  // Mobile change
  mobile.onchange = (e) => {
    renderProjects(
      filterProjectsByService(projects, e.target.value),
      lang
    );
  };
}
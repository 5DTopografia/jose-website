import { services } from "../data/services.js";
import { projects } from "../data/project.js";
import { filterProjectsByService } from "../core/filters.js";
import { renderProjects } from "./projects.js";

export function initProjectFilters() {
  const desktop = document.getElementById("projectFilters");
  const mobile = document.getElementById("projectFiltersMobile");

  if (!desktop || !mobile) return;

  // Desktop buttons
  desktop.innerHTML = `
    <button class="filter-btn is-active" data-filter="all">Todos</button>
    ${services.map(s => `
      <button class="filter-btn" data-filter="${s.id}">${s.label}</button>
    `).join("")}
  `;

  // Mobile dropdown
  mobile.innerHTML = `
    <option value="all">Todos</option>
    ${services.map(s => `<option value="${s.id}">${s.label}</option>`).join("")}
  `;

  // Initial render
  renderProjects(projects);

  // Desktop click
  desktop.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;

    setActiveButton(desktop, btn);
    const type = btn.dataset.filter;

    const filtered = filterProjectsByService(projects, type);
    renderProjects(filtered);
  });

  // Mobile change
  mobile.addEventListener("change", (e) => {
    const type = e.target.value;
    const filtered = filterProjectsByService(projects, type);
    renderProjects(filtered);
  });
}

function setActiveButton(container, activeBtn) {
  container.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("is-active");
  });
  activeBtn.classList.add("is-active");
}
import { projects } from "../data/project.js";
import { applyImageFallbacks } from "./image-fallback.js";


export function renderProjects(list = projects, lang = "es") {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  const visibleProjects = list
    .filter((p) => p.visible)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  visibleProjects.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    card.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
      </div>

      <div class="project-content">
        <h3>${project.title[lang] ?? project.title}</h3>
        <p>${project.description[lang] ?? project.description}</p>
        <span class="project-date">
          ${formatDate(project.date)}
        </span>
      </div>
    `;

    grid.appendChild(card);
  });
    applyImageFallbacks(grid);
}

function formatDate(dateStr) {
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
}

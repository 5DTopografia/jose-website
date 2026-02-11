import { openProjectModal } from "./project-modal.js";

export function renderProjects(list = [], lang = "es") {
  const grid = document.getElementById("projectsGrid");
  if (!grid || !Array.isArray(list)) return;

  grid.innerHTML = "";

  const visibleProjects = list
    .filter(p => p.visible !== false)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  visibleProjects.forEach(project => {
    const imgSrc = project.images?.[0] ?? "";

    const card = document.createElement("article");
    card.className = "project-card";
  
    card.innerHTML = `
      <div class="project-image">
        <img src="${imgSrc}" alt="">
      </div>
      <div class="project-content">
        <h3>${project.title?.[lang] ?? ""}</h3>
        <p>${project.description?.[lang] ?? ""}</p>
        <span class="project-date">${formatDate(project.date)}</span>
      </div>
    `;
  
    card.addEventListener("click", () => {
      openProjectModal(project, lang);
    });
  
    grid.appendChild(card);
  });
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  const [year, month, day] = dateStr.split("-");
  return `${day}/${month}/${year}`;
}
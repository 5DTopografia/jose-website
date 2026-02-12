import { instruments } from "../data/instruments.js";

export function renderTechnology(lang = "es") {
  const container = document.getElementById("technologyList");
  if (!container) return;

  container.innerHTML = "";

  instruments.forEach((item) => {
    const article = document.createElement("article");
    article.className = "technology-item";

    article.innerHTML = `
      <div class="technology-content">
        <h3>${item.title?.[lang] || ""}</h3>
        <p>${item.description?.[lang] || ""}</p>
      </div>
    `;

    container.appendChild(article);
  });
}
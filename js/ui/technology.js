import { instruments } from "../data/instruments.js";
import { applyImageFallbacks } from "./image-fallback.js";

export function renderTechnology(lang = "es") {
  const container = document.getElementById("technologyList");
  if (!container) return;

  container.innerHTML = "";

  instruments.forEach((item, index) => {
    const reversed = index % 2 !== 0;

    const article = document.createElement("article");
    article.className = `technology-item ${
      reversed ? "is-reversed" : ""
    }`;

    article.innerHTML = `
      <div class="technology-media">
        <img src="${item.image}" alt="${item.title?.[lang] || ""}">
      </div>
      <div class="technology-content">
        <h3>${item.title?.[lang] || ""}</h3>
        <p>${item.description?.[lang] || ""}</p>
      </div>
    `;

    container.appendChild(article);
  });

  applyImageFallbacks(container);
}
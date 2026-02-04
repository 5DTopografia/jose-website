import { services } from "../data/services.js";
import { applyImageFallbacks } from "./image-fallback.js";

export function renderServices(lang = "es") {
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  grid.innerHTML = services.map(service => `
    <article class="service-card" data-id="${service.id}">
      <img src="${service.image}" alt="${service.title[lang]}">

      <div class="service-card-content">
        <h3>${service.title[lang]}</h3>

        <p class="service-description">
          ${service.description[lang]}
        </p>

        <button class="service-toggle" aria-expanded="false">
          Ver más
        </button>
      </div>
    </article>
  `).join("");

  applyImageFallbacks(grid);
}

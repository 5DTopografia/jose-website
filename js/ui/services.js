import { services } from "../data/services.js";
import { applyImageFallbacks } from "./image-fallback.js";

/**
 * Safely resolve translated or plain string values
 */
function tValue(value, lang) {
  if (value && typeof value === "object") {
    return value[lang] ?? value.es ?? value.en ?? "";
  }
  return value ?? "";
}

function tLabel(key, lang) {
  const labels = {
    more: { es: "Ver más", en: "See more" },
    less: { es: "Ver menos", en: "See less" },
  };
  return labels[key][lang];
}

export function renderServices(lang = "es") {

  const grid = document.getElementById("servicesGrid");
  if (!grid) return;

  grid.innerHTML = services
    .map(
      (service) => `
    <article class="service-card" data-id="${service.id}">
      <img 
        src="${service.image}" 
        alt="${tValue(service.title, lang)}"
      >

      <div class="service-card-content">
        <h3>${tValue(service.title, lang)}</h3>

        <p class="service-description">
          ${tValue(service.description, lang)}
        </p>

        <button 
          class="service-toggle"
          aria-expanded="false"
          data-more="${tLabel("more", lang)}"
          data-less="${tLabel("less", lang)}"
        >
          ${tLabel("more", lang)}
        </button>
      </div>
    </article>
  `
    )
    .join("");

  applyImageFallbacks(grid);
}
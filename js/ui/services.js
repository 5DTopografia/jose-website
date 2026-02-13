import { services } from "../data/services.js";

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

            <p class="service-intro">
              ${tValue(service.intro, lang)}
            </p>

            <ul class="service-bullets">
              ${
                service.bullets?.[lang]
                  ?.map((item) => `<li>${item}</li>`)
                  .join("") || ""
              }
            </ul>

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
}

export async function loadServiceImagesFromCMS() {
  try {
    const res = await fetch("/.netlify/functions/services-settings");
    if (!res.ok) return;

    const data = await res.json();
    const cmsServices = Array.isArray(data.services)
      ? data.services
      : [];

    cmsServices.forEach((cmsItem) => {
      const local = services.find((s) => s.id === cmsItem.id);
      if (local && cmsItem.image) {
        local.image = cmsItem.image;
      }
    });
  } catch (err) {
    console.error("Service image CMS load failed:", err);
  }
}
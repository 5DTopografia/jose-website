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

/* CMS SLIDER LOADER */
export async function loadTechnologySlider() {
  try {
    const res = await fetch("/.netlify/functions/settings");
    const data = await res.json();

    const slidesContainer = document.getElementById("technologySlides");
    if (!slidesContainer) return;

    slidesContainer.innerHTML = "";

    (data.slides || []).forEach((slide) => {
      const li = document.createElement("li");
      li.className = "glide__slide";
      li.innerHTML = `<img src="${slide.image}" alt="">`;
      slidesContainer.appendChild(li);
    });

    // IMPORTANT: mount AFTER injecting slides
    new Glide("#technologyGlide", {
      type: "carousel",
      autoplay: 4000,
      hoverpause: true,
      animationDuration: 800,
    }).mount();

  } catch (error) {
    console.error("Technology slider failed:", error);
  }
}
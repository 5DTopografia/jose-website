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
let technologyGlideInstance = null;

export async function loadTechnologySlider() {
  try {
    const res = await fetch("/.netlify/functions/settings");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    const slides = Array.isArray(data.slides) ? data.slides : [];
  
    const slidesContainer = document.getElementById("technologySlides");
    const bulletsContainer = document.getElementById("technologyBullets");
    if (!slidesContainer) return;

    slidesContainer.innerHTML = "";
    if (bulletsContainer) bulletsContainer.innerHTML = "";

    // Inject slides (slide is a STRING path)
    slides.forEach((src) => {
      const li = document.createElement("li");
      li.className = "glide__slide";
      li.innerHTML = `<img src="${src}" alt="">`;
      slidesContainer.appendChild(li);
    });

    // Inject bullets
    if (bulletsContainer) {
      slides.forEach((_, i) => {
        const b = document.createElement("button");
        b.className = "glide__bullet";
        b.setAttribute("data-glide-dir", `=${i}`);
        bulletsContainer.appendChild(b);
      });
    }

    if (technologyGlideInstance) {
      technologyGlideInstance.destroy();
      technologyGlideInstance = null;
    }

    technologyGlideInstance = new Glide("#technologyGlide", {
      type: "carousel",
      autoplay: 4000,
      hoverpause: true,
      animationDuration: 800,
      perView: 1
    });

    technologyGlideInstance.mount();

  } catch (error) {
    console.error("Technology slider failed:", error);
  }
}
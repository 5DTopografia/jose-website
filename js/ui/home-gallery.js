export function initHomeGallery(lang = "es") {
    const glideRoot = document.getElementById("heroGlide");
    const slidesEl = document.getElementById("heroGlideSlides");
    const bulletsEl = document.getElementById("heroGlideBullets");
  
    if (!glideRoot || !slidesEl || !bulletsEl) return;
  
    // Replace these with Jose real photos when ready
    const heroImages = [
      "/assets/images/hero/hero-1.jpg",
      "/assets/images/hero/hero-2.jpg",
      "/assets/images/hero/hero-3.jpg",
    ];
  
    // Guard: if no images, hide section
    if (!heroImages.length) {
      glideRoot.closest(".home-gallery")?.classList.add("hidden");
      return;
    }
  
    slidesEl.innerHTML = heroImages
      .map(
        (src) => `
        <li class="glide__slide">
          <img src="${src}" alt="">
        </li>
      `
      )
      .join("");
  
    bulletsEl.innerHTML = heroImages
      .map(
        (_, i) => `
        <button class="glide__bullet" data-glide-dir="=${i}" aria-label="Slide ${i + 1}"></button>
      `
      )
      .join("");
  
    // eslint-disable-next-line no-undef
    const glide = new Glide(glideRoot, {
      type: "carousel",
      perView: 1,
      gap: 0,
      autoplay: 5500,
      hoverpause: true,
      animationDuration: 850,
    });
  
    glide.mount();
  }
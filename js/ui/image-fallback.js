const FALLBACK_IMAGE = "/assets/images/fallback.jpg";

export function applyImageFallbacks(scope = document) {
  const images = scope.querySelectorAll("img");

  images.forEach(img => {
    // prevent infinite loop
    if (img.dataset.fallbackBound) return;
    img.dataset.fallbackBound = "true";

    img.addEventListener("error", () => {
      if (img.src.endsWith(FALLBACK_IMAGE)) return;
      img.src = FALLBACK_IMAGE;
    });
  });
}
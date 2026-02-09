const FALLBACK_IMAGE = "/assets/images/fallback.jpg";

export function applyImageFallbacks(scope = document) {
  const images = scope.querySelectorAll("img");

  images.forEach((img) => {
    if (img.dataset.fallbackApplied) return;

    img.addEventListener("error", () => {
      // prevent infinite loop
      img.dataset.fallbackApplied = "true";

      // last-resort safety
      if (img.src.includes("fallback")) return;

      img.src = FALLBACK_IMAGE;
    });
  });
}
const FALLBACK_IMAGE = "assets/images/fallback.jpg";

export function applyImageFallbacks(scope = document) {
  const images = scope.querySelectorAll("img");

  images.forEach(img => {
    img.addEventListener("error", () => {
      img.src = FALLBACK_IMAGE;
    });
  });
}
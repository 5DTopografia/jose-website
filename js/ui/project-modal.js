export function openProjectModal(project, lang = "es") {
    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modalBody");
  
    if (!modal || !modalBody) return;
  
    const images =
    project.galleryImages ||
    project.images ||
    [];
    const videos = project.videos || [];
  
    modalBody.innerHTML = `
      <div class="modal-content-inner">
        <h2 class="modal-title">
          ${project.title?.[lang] ?? ""}
        </h2>
  
        <p class="modal-description">
          ${project.description?.[lang] ?? ""}
        </p>
  
        ${images.length > 0 ? `
          <div class="glide">
            <div class="glide__track" data-glide-el="track">
              <ul class="glide__slides">
                ${images.map(img => `
                  <li class="glide__slide">
                    <img src="${img}" alt="">
                  </li>
                `).join("")}
              </ul>
            </div>
  
            <div class="glide__arrows" data-glide-el="controls">
                <div class="glide__bullets" data-glide-el="controls[nav]">
                    ${images.map((_, i) => `
                        <button class="glide__bullet" data-glide-dir="=${i}"></button>
                    `).join("")}
                </div>
                
              <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
                ‹
              </button>
              <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
                ›
              </button>
            </div>
          </div>
        ` : ""}
  
        ${videos.length > 0 ? `
          <div class="modal-videos">
            ${videos.map(url => `
              <div class="video-wrapper">
                <iframe
                  src="${convertYoutube(url)}"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            `).join("")}
          </div>
        ` : ""}
      </div>
    `;
  
    modal.classList.remove("hidden");
  
    initGlide();
    initModalClose();
  }
  
  /* Glide Init */
  
  function initGlide() {
    const glideEl = document.querySelector(".glide");
    if (!glideEl) return;
  
    new Glide(glideEl, {
      type: "carousel",
      perView: 1,
      gap: 20,
      animationDuration: 500
    }).mount();
  }
  
  /* Close Modal Logic */
  
  function initModalClose() {
    const modal = document.getElementById("projectModal");
    const closeBtn = modal.querySelector(".modal-close");
  
    if (!modal) return;
  
    // Close button
    if (closeBtn) {
      closeBtn.onclick = () => closeModal();
    }
  
    // Click outside content
    modal.onclick = (e) => {
      if (e.target === modal) {
        closeModal();
      }
    };
  
    // ESC key
    document.onkeydown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
  }
  
  function closeModal() {
    const modal = document.getElementById("projectModal");
    const modalBody = document.getElementById("modalBody");
  
    if (!modal) return;
  
    modal.classList.add("hidden");
  
    // Clean slider content to avoid memory leak
    if (modalBody) modalBody.innerHTML = "";
  }
  
  /* YouTube converter */ 

  function convertYoutube(url) {
    if (!url) return "";
  
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}`;
  }
export function initServiceInteractions() {
    const buttons = document.querySelectorAll(".service-toggle");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const card = button.closest(".service-card");
        const isOpen = card.classList.contains("open");
  
        // close all (accordion behavior)
        document.querySelectorAll(".service-card.open").forEach(c => {
          c.classList.remove("open");
          c.querySelector(".service-toggle").setAttribute("aria-expanded", "false");
          c.querySelector(".service-toggle").textContent = "Ver más";
        });
  
        if (!isOpen) {
          card.classList.add("open");
          button.setAttribute("aria-expanded", "true");
          button.textContent = "Ver menos";
        }
      });
    });
  }
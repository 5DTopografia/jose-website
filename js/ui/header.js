    export function initHeader() {
        const burger = document.getElementById("burgerBtn");
        const nav = document.getElementById("mainNav");
      
        if (!burger || !nav) return;
      
        burger.addEventListener("click", () => {
          nav.classList.toggle("open");
        });
      }
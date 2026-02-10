export function renderTechnology(lang = "es") {
    const copy = {
      es: {
        intro:
          "Equipos de precisión y tecnología avanzada para garantizar fiabilidad, rapidez y entregas profesionales.",
      },
      en: {
        intro:
          "Precision equipment and advanced technology to ensure reliability, speed, and professional delivery.",
      },
    };
  
    const t = copy[lang] || copy.es;
  
    setText("technologyIntro", t.intro);
  }
  
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }
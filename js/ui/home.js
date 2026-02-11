export function renderHome(lang = "es") {
  const copy = {
    es: {
      kicker: "Topografía · BIM · Drones",

      title: "Topografía de precisión para proyectos de alta exigencia.",

      subtitle:
        "En 5D Topografía & BIM ofrecemos servicios avanzados de topografía y captura de la realidad para arquitectura e ingeniería, tanto para administraciones públicas como para cliente privado.",

      paragraph2:
        "Combinamos topografía clásica mediante Estación Total Robotizada y GPS GNSS RTK, junto con topografía avanzada mediante escáner LiDAR SLAM RTK y drones para fotogrametría y LiDAR, generando información precisa, fiable y jurídicamente coherente.",

      closing:
        "Medimos hoy lo que necesitas proyectar, construir o regularizar mañana.",

      ctaProjects: "Ver proyectos",
      ctaServices: "Servicios",

      cardTitle: "Respuesta rápida",
      cardText:
        "¿Tienes planos, mediciones o un proyecto en marcha? Escríbenos y te respondemos por email o teléfono.",
      chipEmail: "Email",

      aboutTitle: "Nosotros",
      aboutText:
        "Trabajamos con tecnología avanzada y un enfoque práctico para aportar precisión, rapidez y tranquilidad en cada entrega.",
      p1: "✅ Mediciones precisas y documentación clara",
      p2: "✅ Integración topográfica en flujos BIM",
      p3: "✅ Entregas profesionales y comunicación directa",

      tsTitle: "Servicios",
      tsText:
        "Explora todos los servicios y encuentra el mejor encaje para tu proyecto.",
      tsLink: "Ver servicios →",

      tpTitle: "Proyectos",
      tpText:
        "Una muestra de trabajos recientes ordenados por fecha, con filtros por servicio.",
      tpLink: "Ver proyectos →",
      partnersTitle: "Entidades y colaboradores",
    },

    en: {
      kicker: "Topography · BIM · Drones",

      title: "Precision surveying for high-demand projects.",

      subtitle:
        "At 5D Topografía & BIM we provide advanced surveying and reality capture services for architecture and engineering, working with both public administrations and private clients.",

      paragraph2:
        "We combine classical surveying using robotic total stations and GNSS RTK systems with advanced LiDAR SLAM RTK scanning and professional drones for photogrammetry and LiDAR, delivering precise, reliable and legally consistent information.",

      closing:
        "We measure today what you need to design, build or regularize tomorrow.",

      ctaProjects: "View projects",
      ctaServices: "Services",

      cardTitle: "Quick reply",
      cardText:
        "Have plans, measurements, or an ongoing project? Contact us and we’ll reply by email or phone.",
      chipEmail: "Email",

      aboutTitle: "About",
      aboutText:
        "We use advanced technology and a practical approach to bring precision, speed, and peace of mind in every delivery.",
      p1: "✅ Accurate surveys and clear documentation",
      p2: "✅ Topographic integration into BIM workflows",
      p3: "✅ Professional delivery and direct communication",

      tsTitle: "Services",
      tsText:
        "Explore all services and find the best fit for your project.",
      tsLink: "View services →",

      tpTitle: "Projects",
      tpText:
        "A selection of recent work ordered by date, with service filters.",
      tpLink: "View projects →",
      partnersTitle: "Partners & Collaborators",
    },
  };

  const t = copy[lang] || copy.es;

  setText("homeKicker", t.kicker);
  setText("homeTitle", t.title);

  // We combine subtitle + paragraph2 + closing cleanly
  const subtitleEl = document.getElementById("homeSubtitle");
  if (subtitleEl) {
    subtitleEl.innerHTML = `
      ${t.subtitle}
      <br><br>
      ${t.paragraph2}
      <br><br>
      <strong>${t.closing}</strong>
    `;
  }

  setText("homeCtaProjects", t.ctaProjects);
  setText("homeCtaServices", t.ctaServices);

  setText("homeCardTitle", t.cardTitle);
  setText("homeCardText", t.cardText);
  setText("homeChipEmail", t.chipEmail);

  setText("homeAboutTitle", t.aboutTitle);
  setText("homeAboutText", t.aboutText);
  setText("homePoint1", t.p1);
  setText("homePoint2", t.p2);
  setText("homePoint3", t.p3);

  setText("homeTeaserServicesTitle", t.tsTitle);
  setText("homeTeaserServicesText", t.tsText);
  setText("homeTeaserServicesLink", t.tsLink);

  setText("homeTeaserProjectsTitle", t.tpTitle);
  setText("homeTeaserProjectsText", t.tpText);
  setText("homeTeaserProjectsLink", t.tpLink);
  setText("homePartnersTitle", t.partnersTitle);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}


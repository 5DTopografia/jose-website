export function renderHome(lang = "es") {
    const copy = {
      es: {
        kicker: "Topografía · BIM · Drones",
        title: "Precisión y tecnología para proyectos que exigen calidad",
        subtitle: "Soluciones de topografía 5D y BIM para ingeniería y arquitectura. Claridad, fiabilidad y entrega profesional.",
        ctaProjects: "Ver proyectos",
        ctaServices: "Servicios",
        cardTitle: "Respuesta rápida",
        cardText: "¿Tienes planos, mediciones o un proyecto en marcha? Escríbenos y te respondemos por email o teléfono.",
        chipEmail: "Email",
        aboutTitle: "Nosotros",
        aboutText: "Trabajamos con tecnología avanzada y un enfoque práctico para aportar precisión, rapidez y tranquilidad en cada entrega.",
        p1: "✅ Mediciones precisas y documentación clara",
        p2: "✅ Modelado BIM orientado a obra y control",
        p3: "✅ Entregas profesionales y comunicación directa",
        tsTitle: "Servicios",
        tsText: "Explora todos los servicios y encuentra el mejor encaje para tu proyecto.",
        tsLink: "Ver servicios →",
        tpTitle: "Proyectos",
        tpText: "Una muestra de trabajos recientes ordenados por fecha, con filtros por servicio.",
        tpLink: "Ver proyectos →",
      },
      en: {
        kicker: "Topography · BIM · Drones",
        title: "Precision and technology for projects that demand quality",
        subtitle: "Topography 5D and BIM solutions for engineering and architecture. Clarity, reliability, professional delivery.",
        ctaProjects: "View projects",
        ctaServices: "Services",
        cardTitle: "Quick reply",
        cardText: "Have plans, measurements, or an ongoing project? Contact us and we’ll reply by email or phone.",
        chipEmail: "Email",
        aboutTitle: "About",
        aboutText: "We use advanced technology and a practical approach to bring precision, speed, and peace of mind in every delivery.",
        p1: "✅ Accurate surveys and clear documentation",
        p2: "✅ BIM modeling for construction & control",
        p3: "✅ Professional delivery and direct communication",
        tsTitle: "Services",
        tsText: "Explore all services and find the best fit for your project.",
        tsLink: "View services →",
        tpTitle: "Projects",
        tpText: "A selection of recent work ordered by date, with service filters.",
        tpLink: "View projects →",
      },
    };
  
    const t = copy[lang] || copy.es;
  
    setText("homeKicker", t.kicker);
    setText("homeTitle", t.title);
    setText("homeSubtitle", t.subtitle);
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
  }
  
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }
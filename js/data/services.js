// js/data/services.js

export const services = [
  {
    id: "topografia",
    title: {
      es: "Topografía clásica",
      en: "Classical topography",
    },
    intro: {
      es: "Levantamientos topográficos de alta precisión mediante estación total robotizada y sistemas GNSS.",
      en: "High-precision topographic surveys using robotic total station and GNSS systems.",
    },
    bullets: {
      es: [
        "Edificación y obra civil",
        "Replanteos y controles geométricos",
        "Certificaciones y estados de obra",
        "Apoyo a direcciones facultativas",
        "Archivos GML y coordinación Catastro–Registro",
        "Estudios de lindes y superficies",
        "Discrepancias parcelarias",
      ],
      en: [
        "Building and civil works",
        "Stake-out and geometric controls",
        "Work certifications and progress reports",
        "Support for technical management",
        "GML files and Cadastre–Registry coordination",
        "Boundary and surface studies",
        "Parcel discrepancies",
      ],
    },
    image: "/assets/images/services/topografia.jpg",
  },

  {
    id: "lidar",
    title: {
      es: "Escáner LiDAR SLAM RTK",
      en: "LiDAR SLAM RTK scanner",
    },
    intro: {
      es: "Captura precisa de la realidad construida y su transformación en BIM mediante tecnología LiDAR SLAM RTK de última generación.",
      en: "Accurate capture of built reality and its transformation into BIM using state-of-the-art LiDAR SLAM RTK technology.",
    },
    bullets: {
      es: [
        "Escaneo dinámico continuo",
        "Georreferenciación mediante control topográfico",
        "Nubes de puntos densas y verificadas",
        "Integración directa en flujos BIM",
        "Aplicaciones en rehabilitación y proyectos as-built",
      ],
      en: [
        "Continuous dynamic scanning",
        "Georeferencing through topographic control",
        "Dense and verified point clouds",
        "Direct integration into BIM workflows",
        "Applications in rehabilitation and as-built projects",
      ],
    },
    image: "/assets/images/services/lidar.jpg",
  },

  {
    id: "drones",
    title: {
      es: "Drones – Fotogrametría y LiDAR",
      en: "Drones – Photogrammetry & LiDAR",
    },
    intro: {
      es: "Levantamientos a gran escala mediante drones profesionales para análisis territorial y técnico.",
      en: "Large-scale surveys using professional drones for territorial and technical analysis.",
    },
    bullets: {
      es: [
        "Ortofotos de alta resolución",
        "Modelos digitales del terreno",
        "Nubes de puntos georreferenciadas",
      ],
      en: [
        "High-resolution orthophotos",
        "Digital terrain models",
        "Georeferenced point clouds",
      ],
    },
    image: "/assets/images/services/drones.jpg",
  },

  {
    id: "bim",
    title: {
      es: "Topografía y BIM",
      en: "Topography & BIM",
    },
    intro: {
      es: "Integración de datos topográficos en flujos BIM para mejorar coordinación, precisión y control.",
      en: "Integration of topographic data into BIM workflows to improve coordination, accuracy and control.",
    },
    bullets: {
      es: [
        "Modelos BIM precisos desde datos reales",
        "Coordinación técnica entre disciplinas",
        "Reducción de interferencias en obra",
        "Mejora en planificación y control",
      ],
      en: [
        "Accurate BIM models from real data",
        "Technical coordination between disciplines",
        "Reduction of on-site clashes",
        "Improved planning and control",
      ],
    },
    image: "/assets/images/services/bim.jpg",
  },
];
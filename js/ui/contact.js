export function renderContact(lang = "es") {
    const copy = {
      es: {
        title: "Contacto",
        intro:
          "Si tienes un proyecto o necesitas información, puedes escribirnos o llamarnos directamente.",
        email: "Email",
        phone: "Teléfono",
      },
      en: {
        title: "Contact",
        intro:
          "If you have a project or need information, you can email us or call us directly.",
        email: "Email",
        phone: "Phone",
      },
    };
  
    const t = copy[lang] || copy.es;
  
    setText("contactTitle", t.title);
    setText("contactIntro", t.intro);
    setText("contactEmailLabel", t.email);
    setText("contactPhoneLabel", t.phone);
  }
  
  function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }
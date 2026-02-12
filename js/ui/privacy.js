export function renderPrivacy(lang = "es") {

  const copy = {
    es: {
      privacyTitle: "Política de Privacidad",

      privacySection1Title: "Responsable del tratamiento",
      privacySection1Text: "José Antonio Fuentes Sanchis, con NIF 52779426-S y domicilio profesional en Calle Huelva Nº25, Casa 10, 07829 Sant Josep de sa Talaia (Illes Balears), es el responsable del tratamiento de los datos personales.",

      privacySection2Title: "Finalidad",
      privacySection2Text: "Los datos personales facilitados a través del formulario de contacto se utilizarán exclusivamente para responder a consultas y gestionar relaciones profesionales.",

      privacySection3Title: "Legitimación",
      privacySection3Text: "La base legal para el tratamiento de los datos es el consentimiento otorgado por el usuario al enviar el formulario de contacto.",

      privacySection4Title: "Conservación de los datos",
      privacySection4Text: "Los datos se conservarán únicamente durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos.",

      privacySection5Title: "Derechos del usuario",
      privacySection5Text: "El usuario puede ejercer sus derechos de acceso, rectificación, supresión y demás derechos reconocidos en la normativa vigente enviando una solicitud a info@5dtopografia.com."
    },
    en: {
      privacyTitle: "Privacy Policy",

      privacySection1Title: "Data Controller",
      privacySection1Text: "José Antonio Fuentes Sanchis, Tax ID 52779426-S, with registered professional address at Calle Huelva Nº25, Casa 10, 07829 Sant Josep de sa Talaia (Balearic Islands, Spain), is the data controller.",

      privacySection2Title: "Purpose",
      privacySection2Text: "Personal data provided through the contact form will be used exclusively to respond to inquiries and manage professional relationships.",

      privacySection3Title: "Legal Basis",
      privacySection3Text: "The legal basis for processing the data is the user's consent when submitting the contact form.",

      privacySection4Title: "Data Retention",
      privacySection4Text: "Personal data will be retained only for as long as necessary to fulfill the purpose for which it was collected.",

      privacySection5Title: "User Rights",
      privacySection5Text: "Users may exercise their rights of access, rectification, erasure, and other rights under applicable law by sending a request to info@5dtopografia.com."
    }
  };

  const t = copy[lang] || copy.es;

  setText("privacyTitle", t.privacyTitle);
  setText("privacySection1Title", t.privacySection1Title);
  setText("privacySection1Text", t.privacySection1Text);
  setText("privacySection2Title", t.privacySection2Title);
  setText("privacySection2Text", t.privacySection2Text);
  setText("privacySection3Title", t.privacySection3Title);
  setText("privacySection3Text", t.privacySection3Text);
  setText("privacySection4Title", t.privacySection4Title);
  setText("privacySection4Text", t.privacySection4Text);
  setText("privacySection5Title", t.privacySection5Title);
  setText("privacySection5Text", t.privacySection5Text);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}
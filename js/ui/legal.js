export function renderLegal(lang = "es") {

  const copy = {
    es: {
      legalTitle: "Aviso Legal",

      legalSection1Title: "Identificación del titular",
      legalSection1Text: "En cumplimiento del artículo 10 de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa que el titular del sitio web es:",

      legalOwnerLabel: "Titular",
      legalActivityLabel: "Actividad",

      legalSection2Title: "Objeto",
      legalSection2Text: "El presente sitio web tiene como finalidad ofrecer información sobre los servicios profesionales de topografía, BIM y captura de la realidad prestados por el titular.",

      legalSection3Title: "Responsabilidad",
      legalSection3Text: "El titular no se responsabiliza del mal uso que se realice de los contenidos del sitio web, siendo exclusiva responsabilidad del usuario que accede o utiliza la información contenida en el mismo.",

      legalSection4Title: "Propiedad intelectual",
      legalSection4Text: "Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos y diseño, están protegidos por la normativa de propiedad intelectual e industrial.",

      legalTaxIdLabel: "NIF",
      legalAddressLabel: "Domicilio profesional",
      legalPhoneLabel: "Teléfono",
    },
    en: {
      legalTitle: "Legal Notice",

      legalSection1Title: "Website Owner Identification",
      legalSection1Text: "In accordance with Article 10 of Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the website owner is:",

      legalOwnerLabel: "Owner",
      legalActivityLabel: "Business Activity",

      legalSection2Title: "Purpose",
      legalSection2Text: "This website aims to provide information about professional surveying, BIM, and reality capture services offered by the owner.",

      legalSection3Title: "Liability",
      legalSection3Text: "The website owner shall not be liable for any misuse of the website content. Users are solely responsible for the use they make of the information provided.",

      legalSection4Title: "Intellectual Property",
      legalSection4Text: "All website content, including texts, images, logos, and design elements, is protected under intellectual and industrial property regulations.",

      legalTaxIdLabel: "Tax ID",
      legalAddressLabel: "Registered address",
      legalPhoneLabel: "Phone",
    }
  };

  const t = copy[lang] || copy.es;

  setText("legalTitle", t.legalTitle);
  setText("legalSection1Title", t.legalSection1Title);
  setText("legalSection1Text", t.legalSection1Text);
  setText("legalOwnerLabel", t.legalOwnerLabel);
  setText("legalActivityLabel", t.legalActivityLabel);
  setText("legalTaxIdLabel", t.legalTaxIdLabel);
  setText("legalAddressLabel", t.legalAddressLabel);
  setText("legalPhoneLabel", t.legalPhoneLabel);
  setText("legalSection2Title", t.legalSection2Title);
  setText("legalSection2Text", t.legalSection2Text);
  setText("legalSection3Title", t.legalSection3Title);
  setText("legalSection3Text", t.legalSection3Text);
  setText("legalSection4Title", t.legalSection4Title);
  setText("legalSection4Text", t.legalSection4Text);

}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}
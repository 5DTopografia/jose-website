
let currentLang = "es";

export function initLanguage() {
  // Language UI is handled in ui/
}

// State helpers
export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  currentLang = lang;
}
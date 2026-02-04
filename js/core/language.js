const STORAGE_KEY = "site-lang";
const DEFAULT_LANG = "es";

export function getLang() {
  return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
}

export function setLang(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
}

export function initLanguage() {
  const lang = getLang();
  document.documentElement.lang = lang;
}
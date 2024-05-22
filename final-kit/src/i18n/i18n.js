// src/i18n/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../locales/en/en.json";
import deTranslation from "../locales/de/de.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  de: {
    translation: deTranslation,
  },
};

const lng = localStorage.getItem("i18nextLng") || "en"; // If there is a language saved in local storage, we prefer it first. Otherwise, we want it to have English value as default.

i18n
  .use(initReactI18next)
  .init({
    lng,
    resources,
  })
  .then(() => {
    localStorage.setItem("i18nextLng", i18n.language);
  });

export default i18n;

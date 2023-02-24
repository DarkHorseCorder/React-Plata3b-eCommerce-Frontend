import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

/*import translationGr from "./locales/gr/translation.json"
import translationIT from "./locales/it/translation.json"*/
import translationCA from "./locales/ca/translation.json";
//import translationSP from "./locales/sp/translation.json";
import translationENG from "./locales/en/translation.json";

// the translations
const resources = {
  /*gr: {
    translation: translationGr,
  },
  it: {
    translation: translationIT,
  },*/
  ca: {
    translation: translationCA,
  },
  /*sp: {
    translation: translationSP,
  },*/
  eng: {
    translation: translationENG,
  },
};

const language = localStorage.getItem("I18N_LANGUAGE");
if (!language) {
  localStorage.setItem("I18N_LANGUAGE", "sp");
}

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: localStorage.getItem("I18N_LANGUAGE") || "sp",
    fallbackLng: "sp", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

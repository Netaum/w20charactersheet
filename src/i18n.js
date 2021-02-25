import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import headerEn from "./assets/translations/en/header.json";
import tribesEn from "./assets/translations/en/tribes.json";
import auspicesEn from "./assets/translations/en/auspices.json";
import breedsEn from "./assets/translations/en/breeds.json";

const resources = {
  en: {
    header: headerEn,
    tribes: tribesEn,
    auspices: auspicesEn,
    breeds: breedsEn
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import headerEn from "./assets/translations/en/header.json";
import tribesEn from "./assets/translations/en/tribes.json";
import auspicesEn from "./assets/translations/en/auspices.json";
import breedsEn from "./assets/translations/en/breeds.json";
import labelsEn from './assets/translations/en/labels.json';
import attributesEn from './assets/translations/en/attributes.json';

const resources = {
  en: {
    header: headerEn,
    tribes: tribesEn,
    auspices: auspicesEn,
    breeds: breedsEn,
    labels: labelsEn,
    attributes: attributesEn
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
import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";
import headerEn from "./assets/translations/en/header.json";

const resources = {
  en: {
    header: headerEn,
  },
};

i18n.use(reactI18nextModule).init({
  resources,
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
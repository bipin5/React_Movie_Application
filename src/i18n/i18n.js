import i18next from "i18next";

import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Welcome To React": "Welcome to Movie App",
      },
    },
  },
  lng: "en",
  fallbacking: "en",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
    useSuspense: false,
  },
});

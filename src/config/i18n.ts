import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: await import('@/locales/en.json'),
      ro: await import('@/locales/ro.json'),
      ru: await import('@/locales/ru.json')
    },
    lng: localStorage.getItem('LANG') || "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    debug: true
  });


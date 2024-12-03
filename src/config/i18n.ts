import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const setup_i18n_lang = () => {
  return /^(en|EN|eN|En|ru|RU|rU|Ru|ua|UA|uA|Ua|es|ES|eS|Es)/.test(
    window.location.pathname.split('/')[1]
  )
    ? () => {
        localStorage.setItem(
          'LANG',
          window.location.pathname.split('/')[1].toLowerCase()
        );
        return window.location.pathname.split('/')[1].toLowerCase();
      }
    : () => {
        localStorage.setItem('LANG', 'en');
        return 'en';
      };
};

i18n.use(initReactI18next).init({
  resources: {
    en: await import('@/locales/en.json'),
    ru: await import('@/locales/ru.json'),
    ua: await import('@/locales/ua.json'),
    es: await import('@/locales/es.json'),
  },
  lng: localStorage.getItem('LANG') || setup_i18n_lang()(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  debug: false,
});

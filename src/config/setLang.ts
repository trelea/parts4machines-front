import i18next from 'i18next';

export const setLang = (lang: string) => {
  i18next.changeLanguage(lang);
  localStorage.setItem('LANG', lang);
  document.documentElement.lang = lang;
  const segments = window.location.pathname.split('/');
  setTimeout(
    () =>
      window.history.replaceState(
        {},
        '',
        `/${lang}/${segments
          .slice(2, segments.length)
          .toString()
          .replace(',', '/')}${window.location.search}`
      ),
    0
  );
};

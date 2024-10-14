import i18next from "i18next"

export const setLang = (lang: string) => {
  i18next.changeLanguage(lang)
  localStorage.setItem('LANG', lang)
  const segments = window.location.pathname.split('/')
  window.history.pushState('', '', `/${lang}/${segments.slice(2, segments.length)}`)
}
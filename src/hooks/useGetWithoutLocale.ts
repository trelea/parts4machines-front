export const useGetWithoutLocale = () => {
  return window.location.pathname.split('/')[2]
}
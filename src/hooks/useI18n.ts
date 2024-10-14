import React from "react";
import { useTranslation } from "react-i18next";

export const useI18n = () => {
  const { i18n, t } = useTranslation();
  React.useEffect(() => {
    if (
      !/^(en|EN|eN|En|ro|RO|rO|Ro|ru|RU|Ru|rU)/.test(
        window.location.pathname.split('/')[1]
      )
    ) {
      window.location.pathname = `/${i18n.language}${window.location.pathname}`;
    }
  }, []);
  return { t, i18n }
}
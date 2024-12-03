import React from 'react';
import { useTranslation } from 'react-i18next';

export const useI18n = () => {
  const { i18n, t } = useTranslation();
  React.useEffect(() => {
    if (
      !/^(en|EN|eN|En|ru|RU|rU|Ru|ua|UA|uA|Ua|es|ES|eS|Es)/.test(
        window.location.pathname.split('/')[1]
      )
    )
      setTimeout(
        () =>
          window.history.replaceState(
            {},
            '',
            `/${i18n.language}${window.location.pathname}${window.location.search}`
          ),
        0
      );
  }, []);
  return { t, i18n };
};

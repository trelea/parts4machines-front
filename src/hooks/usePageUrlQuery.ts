import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const usePageUrlQuery = () => {
  const [urlQuery, setUrlQuery]: [URLSearchParams, Function] = useSearchParams({
    page: '1',
    limit: '12',
    search: '',
  });

  React.useEffect(() => {
    if (Number(urlQuery.get('page')) < 1) urlQuery.set('page', '1');
    if (Number(urlQuery.get('limit')) < 12) urlQuery.set('limit', '12');
    setUrlQuery(urlQuery);
  }, [urlQuery]);

  const setPage = (page: number) => {
    setUrlQuery({
      page,
      limit: urlQuery.get('limit'),
      search: urlQuery.get('search'),
    });
  };

  const setLimit = (limit: number) => {
    setUrlQuery({
      page: urlQuery.get('page'),
      limit,
      search: urlQuery.get('search'),
    });
  };

  const setSearch = (search: string) => {
    setUrlQuery({ page: 1, limit: 12, search });
  };

  return {
    setPage,
    setLimit,
    setSearch,
    page: urlQuery.get('page') || 1,
    limit: urlQuery.get('limit') || 12,
    search: urlQuery.get('search') || '',
  };
};

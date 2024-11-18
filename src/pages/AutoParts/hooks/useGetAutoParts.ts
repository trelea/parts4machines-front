import { usePageUrlQuery } from '@/hooks/usePageUrlQuery';
import { useQuery } from '@tanstack/react-query';
import { getAutoParts } from '../api/autoparts.apis';

export const useGetAutoParts = () => {
  const { setPage, setLimit, setSearch, page, limit, search } =
    usePageUrlQuery();

  const { data, error, isError, isLoading, isFetching } = useQuery({
    queryKey: ['auto-parts', page, limit, search],
    queryFn: async () => await getAutoParts({ page, limit, search }),
  });
  return {
    autoParts: data?.data,
    error,
    isError,
    isLoading,
    isFetching,
    setPage,
    setLimit,
    setSearch,
    page,
    limit,
    search,
    pages: data?.data.meta.pagination.pageCount,
  };
};

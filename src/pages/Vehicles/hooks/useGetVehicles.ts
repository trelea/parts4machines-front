import { useQuery } from '@tanstack/react-query';
import { getVehicles } from '../api/vehicles.apis';
import { usePageUrlQuery } from '@/hooks/usePageUrlQuery';

export const useGetVehicles = () => {
  const { setPage, setLimit, setSearch, page, limit, search } =
    usePageUrlQuery();

  const { data, error, isError, isLoading, isFetching } = useQuery({
    queryKey: ['cars', page, limit, search],
    queryFn: async () => await getVehicles({ page, limit, search }),
  });

  return {
    vehicles: data?.data,
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

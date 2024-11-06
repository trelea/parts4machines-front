import { useQuery } from '@tanstack/react-query';
import { getServices } from '../api/services.apis';

export const useGetServices = () => {
  const { data, error, isError, isLoading, isFetching } = useQuery({
    queryKey: ['services'],
    queryFn: async () => getServices(),
  });

  return { services: data?.data, error, isError, isLoading, isFetching };
};

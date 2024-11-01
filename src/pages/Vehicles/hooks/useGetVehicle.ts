import { useQuery } from '@tanstack/react-query';
import { getVehicle } from '../api/vehicles.apis';

export const useGetVehicle = ({ documentId }: { documentId: string }) => {
  const { data, error, isError, isLoading, isFetching } = useQuery({
    queryKey: ['cars', documentId],
    queryFn: async () => await getVehicle({ documentId }),
  });

  return {
    vehicle: data?.data,
    error,
    isError,
    isLoading,
    isFetching,
  };
};

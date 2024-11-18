import { useQuery } from '@tanstack/react-query';
import { getAutoPart } from '../api/autoparts.apis';

export const useGetAutoPart = ({ documentId }: { documentId: string }) => {
  const { data, error, isError, isLoading, isFetching } = useQuery({
    queryKey: ['auto-parts', documentId],
    queryFn: async () => await getAutoPart({ documentId }),
  });

  return {
    autoPart: data?.data,
    error,
    isError,
    isLoading,
    isFetching,
  };
};

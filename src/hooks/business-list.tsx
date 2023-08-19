import { client } from '@/lib/utils/api-client';
import { IApiBusiness } from '@/types';
import { useQuery } from '@tanstack/react-query';

const useListBusinesses = () => {
  const {
    data: businessList,
    isLoading,
    isError,
  } = useQuery<IApiBusiness[] | undefined>({
    queryKey: ['businesses'],
    queryFn: () =>
      client(`business/find`, {
        method: 'POST',
        data: {
          limit: 8,
        },
      }),

    staleTime: 60 * 1000, // 1 minute
  });

  return { businessList, isLoading, isError };
};

export { useListBusinesses };

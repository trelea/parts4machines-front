import { axiosApi } from '@/config/axios';
import { AxiosResponse } from 'axios';
import { getServices as getServicesType } from '../types/services.types';
import { stringify } from 'qs';

export const getServices = async (): Promise<
  AxiosResponse<getServicesType>
> => {
  const query = stringify(
    {
      fields: [
        'title_en',
        'title_ru',
        'title_ua',
        'title_es',
        'description_en',
        'description_ru',
        'description_ua',
        'description_es',
        'price',
      ],
      sort: [{ createdAt: 'desc' }],
      populate: {
        image: true,
      },
    },
    { encodeValuesOnly: true }
  );
  return await axiosApi.get<getServicesType>(`/services?${query}`);
};

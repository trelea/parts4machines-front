import { axiosApi } from '@/config/axios';
import { AxiosResponse } from 'axios';
import { stringify } from 'qs';
import {
  getAutoPart as getAutoPartType,
  getAutoParts as getAutoPartsType,
} from '../types/autoparts.types';

export const getAutoParts = async ({
  page,
  limit,
  search,
}: {
  page: string | number;
  limit: string | number;
  search: string;
}): Promise<AxiosResponse<getAutoPartsType>> => {
  const query = stringify(
    {
      fields: ['documentId', 'name', 'oem', 'cars', 'price', 'stock'],
      populate: { images: true },
      sort: [{ createdAt: 'desc' }],
      filters: {
        $or: [
          { oem: { $containsi: search } },
          { name: { $containsi: search } },
          { cars: { $containsi: search } },
          { tags: { $containsi: search } },
        ],
      },
      pagination: {
        page,
        pageSize: limit,
      },
    },
    { encodeValuesOnly: true }
  );
  return axiosApi.get<getAutoPartsType>(`/auto-parts?${query}`);
};

export const getAutoPart = async ({
  documentId,
}: {
  documentId: string;
}): Promise<AxiosResponse<getAutoPartType>> => {
  return axiosApi.get<getAutoPartType>(`/auto-parts/${documentId}?populate=*`);
};

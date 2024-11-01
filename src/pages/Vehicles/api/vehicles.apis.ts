import { axiosApi } from '@/config/axios';
import { AxiosResponse } from 'axios';
import {
  getVehicle as getVehicleType,
  getVehicles as getVehiclesType,
} from '../types/vehicles.types';
import { stringify } from 'qs';

export const getVehicles = async ({
  page,
  limit,
  search,
}: {
  page: string | number;
  limit: string | number;
  search: string;
}): Promise<AxiosResponse<getVehiclesType>> => {
  const query = stringify(
    {
      fields: ['documentId', 'mark', 'model', 'year', 'price'],
      populate: { images: true },
      filters: {
        $or: [
          { mark: { $containsi: search } },
          { model: { $containsi: search } },
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
  return await axiosApi.get<getVehiclesType>(`/cars?${query}`);
};

export const getVehicle = async ({ documentId }: { documentId: string }) => {
  return await axiosApi.get<getVehicleType>(`/cars/${documentId}?populate=*`);
};

import { axiosApi } from '@/config/axios';
import { AxiosResponse } from 'axios';
import {
  AdditionalForm,
  PostVehicleOrder,
  PostVehicleOrderRes,
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
      fields: ['documentId', 'mark', 'model', 'year', 'price', 'stock'],
      populate: { images: true },
      sort: [{ createdAt: 'desc' }],
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

export const getVehicle = async ({
  documentId,
}: {
  documentId: string;
}): Promise<AxiosResponse<getVehicleType>> => {
  return await axiosApi.get<getVehicleType>(`/cars/${documentId}?populate=*`);
};

export const postVehicleOrder = async (
  data: PostVehicleOrder
): Promise<AxiosResponse<PostVehicleOrderRes>> => {
  return await axiosApi.post<PostVehicleOrderRes>('/vehilcles-orders', data);
};

export const postTestDrive = async (
  data: AdditionalForm
): Promise<AxiosResponse<{ status: 'sent' }>> => {
  return await axiosApi.post<{ status: 'sent' }>(`/test-drives`, data);
};

export const postGetCall = async (
  data: AdditionalForm
): Promise<AxiosResponse<{ status: 'sent' }>> => {
  return await axiosApi.post<{ status: 'sent' }>(`/get-calls`, data);
};

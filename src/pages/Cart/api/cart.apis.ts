import { axiosApi } from '@/config/axios';
import { getAutoParts } from '@/pages/AutoParts/types/autoparts.types';
import { getServices } from '@/pages/Services/types/services.types';
import { AxiosResponse } from 'axios';
import { stringify } from 'qs';
import { CheckOut } from '../types/cart.types';

export const getCartServices = async ({
  services,
}: {
  services: { documentId: string; quantity: number }[];
}): Promise<AxiosResponse<getServices | { empty: boolean }>> => {
  if (services.length) {
    const queryServices = stringify(
      {
        populate: { image: true },
        filters: {
          documentId: {
            $in: services.map((s) => {
              return s.documentId;
            }),
          },
        },
      },
      { encodeValuesOnly: true }
    );
    return await axiosApi.get<getServices>(`/services?${queryServices}`);
  }
  // @ts-ignore
  return new Promise<AxiosResponse<{ empty: boolean }>>((res) =>
    // @ts-ignore
    res({ data: { empty: true } })
  );
};

export const getCartAutoParts = async ({
  parts,
}: {
  parts: { documentId: string; quantity: number }[];
}): Promise<AxiosResponse<getAutoParts | { empty: boolean }>> => {
  if (parts.length) {
    const queryParts = stringify(
      {
        populate: { images: true },
        filters: {
          documentId: {
            $in: parts.map((p) => {
              return p.documentId;
            }),
          },
        },
      },
      { encodeValuesOnly: true }
    );
    return await axiosApi.get<getAutoParts>(`/auto-parts?${queryParts}`);
  }
  // @ts-ignore
  return new Promise<AxiosResponse<{ empty: boolean }>>((res) =>
    // @ts-ignore
    res({ data: { empty: true } })
  );
};

export const Checkout = async (data: CheckOut) => {
  return await axiosApi.post('/checkout', data);
};

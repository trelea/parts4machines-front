import { useMutation } from '@tanstack/react-query';
import type { CheckOut as CheckOutType } from '../types/cart.types';
import { Checkout } from '../api/cart.apis';
import { AxiosResponse } from 'axios';
import { useTranslation } from 'react-i18next';

export const useCheckOut = () => {
  const { i18n } = useTranslation();
  const { mutate, isPending } = useMutation({
    mutationKey: ['checkout'],
    mutationFn: async (data: CheckOutType) => await Checkout(data),
    onSuccess: (res: AxiosResponse<{ url: string }>) =>
      (window.location.href = res.data.url),
  });

  const checkout = ({
    services,
    parts,
  }: {
    services: {
      documentId: string;
      title: any;
      price: number;
      quantity: number;
    }[];
    parts: {
      documentId: string;
      name: string;
      price: number;
      quantity: number;
    }[];
  }) => {
    let _s = services.map(({ price, title, ...rest }) => ({
      ...rest,
      title: title[`title_${i18n.language}`],
    }));
    let _p = parts.map(({ price, ...rest }) => ({ ...rest }));

    mutate({ parts: _p, services: _s });
  };

  return { checkout, isPending };
};

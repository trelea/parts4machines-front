import { useCartStore } from '@/store/store';
import { CartState } from '@/store/types';
import { getCartAutoParts, getCartServices } from '../api/cart.apis';
import { useQuery } from '@tanstack/react-query';

export const useGetCart = () => {
  const { services, parts } = useCartStore((state: CartState) => state);
  const isEmpty = services.length + parts.length > 0 ? false : true;

  const {
    data: s,
    isLoading: sL,
    isFetching: sF,
    error: sE,
    isError: sIE,
  } = useQuery({
    queryKey: [
      'cart',
      'services',
      services.map((s) => {
        return s.documentId;
      }),
    ],
    queryFn: async () => await getCartServices({ services }),
    refetchInterval: 1000 * 60 * 10,
  });

  const {
    data: p,
    isLoading: pL,
    isFetching: pF,
    error: pE,
    isError: pIE,
  } = useQuery({
    queryKey: [
      'cart',
      'parts',
      parts.map((p) => {
        return p.documentId;
      }),
    ],
    queryFn: async () => await getCartAutoParts({ parts }),
    refetchInterval: 1000 * 60 * 10,
  });

  // // @ts-ignore
  // if (!sL && !sF && !s?.data?.empty && s?.data?.empty !== true) {
  //   console.log(s);
  // }

  // // @ts-ignore
  // if (!pL && !pF && !p?.data?.empty && p?.data?.empty !== true) {
  //   console.log(p);
  // }

  return {
    isEmpty,
    services: s?.data,
    parts: p?.data,
    isLoading: sL || pL,
    isFetching: pF || sF,
    isError: sIE || pIE,
    error: sE || pE,
    cartServices: services,
    cartParts: parts,
  };
};

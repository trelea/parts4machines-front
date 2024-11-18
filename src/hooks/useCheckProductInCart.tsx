import { useCartStore } from '@/store/store';
import { CartState } from '@/store/types';

export const useCheckProductsInCart = () => {
  const { services, parts } = useCartStore((state: CartState) => state);

  const isServiceInCart = ({ documentId }: { documentId: string }) => {
    return services.some((v) => v.documentId === documentId);
  };

  const isPartInCart = ({ documentId }: { documentId: string }) => {
    return parts.some((v) => v.documentId === documentId);
  };

  return { isServiceInCart, isPartInCart };
};

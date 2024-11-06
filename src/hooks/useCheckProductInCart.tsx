import { useCartStore } from '@/store/store';
import { CartState } from '@/store/types';

export const useCheckProductsInCart = () => {
  const { vehicles, services } = useCartStore((state: CartState) => state);

  const isVehicleInCart = ({ documentId }: { documentId: string }) => {
    return vehicles.some((v) => v.documentId === documentId);
  };

  const isServiceInCart = ({ documentId }: { documentId: string }) => {
    return services.some((v) => v.documentId === documentId);
  };

  return { isVehicleInCart, isServiceInCart };
};

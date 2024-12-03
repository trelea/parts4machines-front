import { useCartStore } from '@/store/store';
import { CartState } from '@/store/types';
import { useSearchParams } from 'react-router-dom';
import { toast } from './use-toast';
import { TFunction } from 'i18next';

export const useAfterPayment = (t: TFunction<'translation', undefined>) => {
  const [search, setSearch] = useSearchParams();
  const reset = useCartStore((state: CartState) => state.resetCart);

  if (search.get('__fail__checkout') === 'true')
    toast({
      variant: 'destructive',
      title: t('payment_fail.title'),
      description: t('payment_fail.desc'),
      onFinish: () => setSearch({}),
    });

  if (search.get('__success__checkout') === 'true')
    toast({
      variant: 'success',
      title: t('payment_success.title'),
      description: t('payment_success.desc'),
      onFinish: () => setSearch({}),
    });

  if (
    search.get('__success__checkout') === 'true' ||
    search.get('__fail__checkout') === 'true'
  )
    reset();
};

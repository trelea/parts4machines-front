import Hero from '@/components/Hero';
import Loyout from '@/components/Loyout';
import { useI18n } from '@/hooks/useI18n';
import { useCartStore } from '@/store/store';
import { CartState } from '@/store/types';
import { useSearchParams } from 'react-router-dom';

export default function Index() {
  const [queries] = useSearchParams();
  const { resetCart } = useCartStore((state: CartState) => state);
  useI18n(queries.get('__reset__cart') === 'true', resetCart);

  return (
    <Loyout>
      <Hero />
    </Loyout>
  );
}

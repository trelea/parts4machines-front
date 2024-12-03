import Hero from '@/components/Hero';
import Loyout from '@/components/Loyout';
import { useAfterPayment } from '@/hooks/useAfterPayment';
import { useI18n } from '@/hooks/useI18n';
import { Helmet } from 'react-helmet-async';

export default function Index() {
  const { t } = useI18n();
  useAfterPayment(t);

  return (
    <Loyout>
      <Helmet>
        <title>{`Elite Autos | Home`}</title>
      </Helmet>
      <Hero />
    </Loyout>
  );
}

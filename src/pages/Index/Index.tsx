import Hero from '@/components/Hero';
import Loyout from '@/components/Loyout';
import { useI18n } from '@/hooks/useI18n';

export default function Index() {
  useI18n();
  return (
    <Loyout>
      <Hero />
    </Loyout>
  );
}

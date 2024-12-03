import Loyout from '@/components/Loyout';
import { useI18n } from '@/hooks/useI18n';
import { useGetServices } from './hooks/useGetServices';
import ErrorFetchDialog from '@/components/ErrorFetchDialog';
import ServiceCard from '@/components/ServiceCard';
import { Helmet } from 'react-helmet-async';

export default function Services() {
  useI18n();
  const { services, error, isError } = useGetServices();

  if (error || isError) return <ErrorFetchDialog />;

  return (
    <Loyout>
      <Helmet>
        <title>{`Elite Autos | Services`}</title>
      </Helmet>
      <div className='px-8 md:px-11 lg:px-40 2xl:px-56 w-full min-h-dvh flex flex-col gap-20 py-6 pb-32'>
        {services?.data.map((service) => (
          <ServiceCard key={service.documentId} service={service} />
        ))}
      </div>
    </Loyout>
  );
}

import Loyout from '@/components/Loyout';
import { useI18n } from '@/hooks/useI18n';
import { useGetVehicle } from './hooks/useGetVehicle';
import { useParams } from 'react-router-dom';
import ErrorFetchDialog from '@/components/ErrorFetchDialog';
import ProductImageSlider from '@/components/ProductImageSlider';
import VehicleDetails from '@/components/VehicleDetails';

export default function Vehicle() {
  useI18n();
  const { id } = useParams();
  const { vehicle, error, isError } = useGetVehicle({
    documentId: id as string,
  });

  if (error || isError) return <ErrorFetchDialog />;

  return (
    <Loyout>
      <div className='px-8 md:px-11 lg:px-40 2xl:px-56 w-full min-h-dvh flex flex-col xl:flex-row gap-10'>
        <ProductImageSlider images={vehicle?.data.images} />
        <VehicleDetails vehicle={vehicle?.data} />
      </div>
    </Loyout>
  );
}

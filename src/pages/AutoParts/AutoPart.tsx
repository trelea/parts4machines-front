import Loyout from '@/components/Loyout';
import ProductImageSlider from '@/components/ProductImageSlider';
import { useI18n } from '@/hooks/useI18n';
import { useParams } from 'react-router-dom';
import { useGetAutoPart } from './hooks/useGetAutoPart';
import ErrorFetchDialog from '@/components/ErrorFetchDialog';
import AutoPartDetails from '@/components/AutoPartDetails';
import { Helmet } from 'react-helmet-async';

export default function AutoPart() {
  useI18n();
  const { id } = useParams();
  const { autoPart, error, isError } = useGetAutoPart({
    documentId: id as string,
  });

  if (error || isError) return <ErrorFetchDialog />;

  return (
    <Loyout>
      <Helmet>
        (
        <title>
          {`Elite Autos | ${autoPart?.data.name as string} ${
            autoPart?.data.oem as string
          }
          ${autoPart?.data.cars.split(';')[0] as string}`}
        </title>
        )
      </Helmet>
      <div className='px-8 md:px-11 lg:px-40 2xl:px-56 w-full min-h-dvh flex flex-col xl:flex-row gap-10'>
        <ProductImageSlider images={autoPart?.data.images} />
        <AutoPartDetails autoPart={autoPart?.data} />
      </div>
    </Loyout>
  );
}

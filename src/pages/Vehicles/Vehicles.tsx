import Loyout from '@/components/Loyout';
import { useI18n } from '@/hooks/useI18n';
import { useGetVehicles } from './hooks/useGetVehicles';
import CardsContainer from '@/components/CardsContainer';
import VehicleProductCard from '@/components/VehicleProductCard';
import { Vehicle } from './types/vehicles.types';
import Paginatinate from '@/components/Pagination';
import SearchBar from '@/components/Search';
import ErrorFetchDialog from '@/components/ErrorFetchDialog';
import { filteringImage } from '@/lib/utils';
import { Helmet } from 'react-helmet-async';

export default function Vehicles() {
  useI18n();
  const { vehicles, page, setPage, pages, setSearch, search, error, isError } =
    useGetVehicles();

  if (error || isError) return <ErrorFetchDialog />;

  return (
    <Loyout>
      <Helmet>
        <title>{`Elite Autos | Vehicles`}</title>
      </Helmet>
      <div className='px-8 md:px-11 lg:px-40 2xl:px-56 w-full min-h-dvh'>
        {/* Search */}
        <SearchBar setSearch={setSearch} search={search} forVehicles={true} />

        {/* Cards */}
        <CardsContainer>
          {vehicles?.data.map(
            (car: Vehicle) =>
              car.stock && (
                <VehicleProductCard
                  key={car.documentId}
                  id={car.documentId}
                  thumb={filteringImage(car?.images[0])?.url as string}
                  title={`${car.year} ${car.mark} ${car.model}`}
                  price={car.price}
                  href={`/vehicles/${car.documentId}`}
                />
              )
          )}
        </CardsContainer>
        {/* PAGINATION */}
        <Paginatinate page={page} setPage={setPage} pages={pages} />
      </div>
    </Loyout>
  );
}

import Loyout from '@/components/Loyout';
import { useI18n } from '@/hooks/useI18n';
import { useGetVehicles } from './hooks/useGetVehicles';
import CardsContainer from '@/components/CardsContainer';
import ProductCard from '@/components/ProductCard';
import { Vehicle } from './types/vehicles.types';
import Paginatinate from '@/components/Pagination';
import SearchBar from '@/components/Search';
import ErrorFetchDialog from '@/components/ErrorFetchDialog';

export default function Vehicles() {
  useI18n();
  const { vehicles, page, setPage, pages, setSearch, search, error, isError } =
    useGetVehicles();

  if (error || isError) return <ErrorFetchDialog />;

  return (
    <Loyout>
      <div className='px-8 md:px-11 lg:px-40 2xl:px-56 w-full min-h-dvh'>
        {/* Search */}
        <SearchBar setSearch={setSearch} search={search} />

        {/* Cards */}
        <CardsContainer>
          {vehicles?.data.map((car: Vehicle) => (
            <ProductCard
              thumb={car?.images[0]?.formats.large.url}
              title={`${car.year} ${car.mark} ${car.model}`}
              price={car.price}
              href={`/vehicles/${car.documentId}`}
            />
          ))}
        </CardsContainer>
        {/* PAGINATION */}
        <Paginatinate page={page} setPage={setPage} pages={pages} />
      </div>
    </Loyout>
  );
}

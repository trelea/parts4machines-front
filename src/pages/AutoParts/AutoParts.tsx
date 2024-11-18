import Loyout from '@/components/Loyout';
import { useI18n } from '@/hooks/useI18n';
import { useGetAutoParts } from './hooks/useGetAutoParts';
import ErrorFetchDialog from '@/components/ErrorFetchDialog';
import SearchBar from '@/components/Search';
import Paginatinate from '@/components/Pagination';
import CardsContainer from '@/components/CardsContainer';
import { AutoPart } from './types/autoparts.types';
import AutoPartProductCard from '@/components/AutoPartProductCard';

export default function AutoParts() {
  useI18n();
  const { autoParts, page, setPage, pages, setSearch, search, error, isError } =
    useGetAutoParts();

  if (error || isError) return <ErrorFetchDialog />;

  return (
    <Loyout>
      <div className='px-8 md:px-11 lg:px-40 2xl:px-56 w-full min-h-dvh'>
        {/* Search */}
        <SearchBar setSearch={setSearch} search={search} />

        {/* Cards */}
        <CardsContainer>
          {autoParts?.data.map(
            (autoPart: AutoPart) =>
              autoPart.stock >= 1 && (
                <AutoPartProductCard
                  key={autoPart.documentId}
                  thumb={autoPart?.images[0]?.formats.large.url}
                  title={`${autoPart.name} - ${autoPart.oem} - ${
                    autoPart.cars.split(';')[0]
                  }`}
                  price={autoPart.price}
                  href={`/autoparts/${autoPart.documentId}`}
                  documentId={autoPart.documentId}
                  name={autoPart.name}
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

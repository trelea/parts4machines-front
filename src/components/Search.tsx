import React from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Props {
  search: string;
  setSearch: (str: string) => void;
  forVehicles?: boolean;
}

export default function SearchBar({ setSearch, search, forVehicles }: Props) {
  const { t } = useTranslation();
  const ref = React.useRef<any>();

  React.useEffect(() => {
    ref.current.value = search;
  }, [search]);

  return (
    <div className='w-full'>
      <div className='w-full flex flex-col-reverse gap-3 2xl:gap-6 xl:w-2/3 2xl:w-1/2 xl:flex-row'>
        <div className='flex gap-3 2xl:gap-6 w-full xl:w-fit'>
          <Button
            className={`font-semibold h-fit text-base rounded-xl bg-transparent text-foreground border border-foreground w-full p-0 m-0 py-2 xl:w-32 xl:py-3 ${
              search.toLowerCase() === 'subaru' && 'bg-primary text-background'
            }`}
            onClick={() => setSearch('subaru')}
          >
            {t('filtration.subaru')}
          </Button>
          <Button
            className={`font-semibold h-fit text-base rounded-xl bg-transparent text-foreground border border-foreground w-full p-0 m-0 py-2 xl:w-32 xl:py-3 ${
              search.toLowerCase() === '' && 'bg-primary text-background'
            }`}
            onClick={() => setSearch('')}
          >
            {t('filtration.all')}
          </Button>
        </div>

        <form
          action=''
          className='w-full bg-foreground/90 flex justify-between rounded-xl border border-white p-2 px-4 shadow-2xl xl:p-3'
          onSubmit={(e) => {
            e.preventDefault();
            // @ts-ignore
            const search = new FormData(e.target).get('search');
            // @ts-ignore
            if (String(search).replaceAll(' ', '') !== '') setSearch(search);
            // ref.current.value = '';
          }}
        >
          <input
            ref={ref}
            type='text'
            className='bg-transparent w-full text-black focus:outline-none'
            name='search'
            placeholder={
              forVehicles
                ? t('filtration.searchCar')
                : t('filtration.searchPart')
            }
            onChange={(e) =>
              e.target.value === '' || e.target.value === null
                ? setSearch('')
                : null
            }
          />
          <button type='submit'>
            <Search className='text-black' />
          </button>
        </form>
      </div>
    </div>
  );
}

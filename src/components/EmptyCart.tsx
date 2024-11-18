import { GiShoppingCart } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';

export default function EmptyCart() {
  const { i18n } = useTranslation();
  return (
    <div className='flex justify-center items-center pt-20 xl:pt-10'>
      <div className='flex flex-col items-center justify-center'>
        <GiShoppingCart className='size-32 md:size-40 lg:size-52  xl:size-72  2xl:size-96 text-[#989795]/25' />
        <h1 className='text-[#989795]/50 font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-center'>
          The Cart Is Empty.
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-fit mt-10'>
          <Link to={`/${i18n.language}/autoparts`}>
            <Button
              variant={'outline'}
              className='font-normal text-sm md:text-base lg:text-lg h-fit px-16 py-4 w-full'
            >
              Buy Auto Parts
            </Button>
          </Link>

          <Link to={`/${i18n.language}/services`}>
            <Button
              variant={'outline'}
              className='font-normal text-sm md:text-base lg:text-lg h-fit px-16 py-4 w-full'
            >
              Buy Services
            </Button>
          </Link>

          <Link to={`/${i18n.language}/vehicles`}>
            <Button
              variant={'outline'}
              className='font-normal text-sm md:text-base lg:text-lg h-fit px-16 py-4 w-full'
            >
              Order Vehicles
            </Button>
          </Link>

          <Link to={`/${i18n.language}`}>
            <Button
              variant={'outline'}
              className='font-normal text-sm md:text-base lg:text-lg h-fit px-16 py-4 w-full'
            >
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

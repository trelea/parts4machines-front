import { Link } from 'react-router-dom';
import Image from './Image';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import { Car } from 'lucide-react';

interface Props {
  title: string;
  price: number;
  thumb: string;
  href: string;
}

export default function ProductCard({ title, price, thumb, href }: Props) {
  const { i18n } = useTranslation();
  return (
    <div className='border border-foreground bg-foreground/90 rounded-lg hover:bg-foreground/80 shadow-foreground/20 shadow-2xl flex flex-col md:flex-row lg:flex-col h-fit'>
      <Link
        to={`/${i18n.language}${href}`}
        className='w-full h-64 flex justify-center md:flex-1 lg:flex-none'
      >
        <Image
          src={`${import.meta.env.VITE_API_URL}${thumb}`}
          className='object-center object-cover h-full w-full rounded-t-lg md:rounded-l-lg md:rounded-t-none lg:rounded-t-lg lg:rounded-l-none'
        />
      </Link>

      <div className='flex flex-col md:flex-1 p-4 justify-between lg:flex-none min-h-40'>
        <Link to={`/${i18n.language}${href}`} className='max-h-fit'>
          <h1 className='font-normal text-lg lg:text-xl 2xl:text-2xl text-black'>
            {title.toUpperCase()}
          </h1>
        </Link>

        <div className='flex flex-row justify-between items-center'>
          <Button className='font-semibold text-sm lg:text-base 2xl:text-lg text-foreground hover:text-primary h-fit w-fit bg-background px-10 hover:bg-black shadow-2xl flex gap-4'>
            Buy
            <Car />
          </Button>
          <h1 className='font-medium text-lg lg:text-xl 2xl:text-2xl text-black'>
            ${price.toFixed(2)}
          </h1>
        </div>
      </div>
    </div>
  );
}

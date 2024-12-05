import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import Image from './Image';
import { TFunction } from 'i18next';

interface Props {
  img: string;
  smallImg: string;
  btnText: string;
  href: string;
  className?: string;
  bestDeals?: boolean;
  t?: TFunction<'translation', undefined>;
}

export default function Card({
  img,
  smallImg,
  btnText,
  href,
  className,
  bestDeals,
  t,
}: Props) {
  return (
    <div className={cn('relative w-full', className)}>
      <Image
        src={smallImg}
        alt={smallImg}
        loading='lazy'
        className='sm:hidden'
      />

      {bestDeals && (
        <Link
          to={href}
          className='absolute bottom-0 right-0 w-1/2 p-2 500px:p-4 sm:hidden hover:animate-bounce'
        >
          <Button className='w-full bg-[#da6e00] py-6 400px:py-7 450px:py-8 rounded-2xl text-foreground shadow-md shadow-black/25 text-xs 500px:text-sm hover:animate-bounce hover:bg-[#da6e00]'>
            {t && t('bestdeals')}
          </Button>
        </Link>
      )}

      <Image src={img} alt={img} loading='lazy' className='hidden sm:block' />

      <Link to={href}>
        <Button className='absolute bottom-0 py-7 bg-foreground text-xs 500px:text-sm md:text-sm xl:text-lg font-normal w-[48%] sm:w-1/2 rounded-2xl 400px:py-8 450px:py-9 500px:py-10 550px:py-11 sm:py-2 sm:rounded-3xl 750px:py-6 850px:py-7 950px:py-8 lg:text-xs lg:h-fit lg:py-2 xl:py-3 1800px:py-5'>
          {btnText}
        </Button>
      </Link>
    </div>
  );
}

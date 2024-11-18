import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Image from './Image';
import { useCheckProductsInCart } from '@/hooks/useCheckProductInCart';
import { useCartStore } from '@/store/store';
import { CartState } from '@/store/types';
import { Button } from './ui/button';
import { toast } from '@/hooks/use-toast';
import {
  MdOutlineRemoveShoppingCart,
  MdOutlineShoppingCart,
} from 'react-icons/md';

interface Props {
  title: string;
  price: number;
  thumb: string;
  href: string;
  documentId: string;
  name: string;
}

export default function AutoPartProductCard({
  title,
  price,
  thumb,
  href,
  documentId,
  name,
}: Props) {
  const { i18n } = useTranslation();
  const { isPartInCart } = useCheckProductsInCart();
  const { addPart, removePart } = useCartStore((state: CartState) => state);

  return (
    <div className='border border-foreground bg-foreground/90 rounded-lg hover:bg-foreground/80 shadow-foreground/20 shadow-2xl flex flex-col md:flex-row lg:flex-col h-full'>
      <Link
        to={`/${i18n.language}${href}`}
        className='w-full h-64 flex justify-center md:flex-1 lg:flex-none'
      >
        <Image
          src={`${import.meta.env.VITE_API_URL}${thumb}`}
          className='object-center object-cover h-full w-full rounded-t-lg md:rounded-l-lg md:rounded-t-none lg:rounded-t-lg lg:rounded-l-none'
        />
      </Link>

      <div className='flex flex-col justify-between md:flex-1 p-4   min-h-40'>
        <Link to={`/${i18n.language}${href}`} className='max-h-fit'>
          <h1 className='font-normal text-base lg:text-lg 2xl:text-xl text-black'>
            {title.toUpperCase()}
          </h1>
        </Link>

        <div className='flex items-end w-full'>
          <div className='flex flex-col justify-between w-full h-full'>
            <div className='font-semibold text-base xl:text-lg text-black flex justify-between'>
              <h1>Price:</h1>
              <h1>${price.toFixed(2)}</h1>
            </div>

            {isPartInCart({ documentId }) ? (
              <Button
                className='font-semibold text-sm lg:text-base 2xl:text-lg text-foreground hover:text-primary h-fit bg-background m-0 p-0 hover:bg-black shadow-2xl flex gap-4 px-10 py-2 w-full'
                onClick={() => {
                  removePart({ documentId });
                  toast({ description: 'Auto Part removed from cart.' });
                }}
              >
                <p>Remove</p>
                <MdOutlineRemoveShoppingCart className='size-6' />
              </Button>
            ) : (
              <Button
                className='font-semibold text-sm lg:text-base 2xl:text-lg text-foreground hover:text-primary h-fit bg-background m-0 p-0 hover:bg-black shadow-2xl flex gap-4 px-10 py-2 w-full'
                onClick={() => {
                  addPart({ documentId, price, name });
                  toast({
                    description: (
                      <p>
                        Auto Part adde to cart.{' '}
                        <Link
                          to={`/${i18n.language}/cart`}
                          className='text-primary underline'
                        >
                          Check Cart.
                        </Link>
                      </p>
                    ),
                  });
                }}
              >
                <p>Buy</p>

                <MdOutlineShoppingCart className='size-6' />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

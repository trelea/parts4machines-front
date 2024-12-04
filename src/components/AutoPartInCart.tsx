import { AutoPart } from '@/pages/AutoParts/types/autoparts.types';
import { useCartStore } from '@/store/store';
import { CartState } from '@/store/types';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Image from './Image';
import { filteringImage } from '@/lib/utils';

interface Props {
  part: AutoPart;
  quantity: number;
}

export default function AutoPartInCart({ part, quantity }: Props) {
  const { i18n, t } = useTranslation();
  const { increasePartQuantity, decreasePartQuantity, removePart } =
    useCartStore((state: CartState) => state);

  return (
    <div className='flex flex-col md:flex-row w-full bg-foreground rounded-xl border border-foreground shadow-2xl h-fit gap-1 md:gap-4 xl:gap-6 p-1'>
      <div className='flex flex-row gap-2 md:gap-4 xl:gap-6 h-52'>
        <div
          className='flex justify-center items-center h-full px-3 md:px-4 hover:bg-background/20 rounded-lg'
          onClick={() => removePart({ documentId: part.documentId })}
        >
          <Trash2 className='text-red-500 size-4 md:size-5 xl:size-6' />
        </div>
        <Link
          to={`/${i18n.language}/autoparts/${part.documentId}`}
          className='w-full md:w-96 h-full'
        >
          <Image
            src={`${import.meta.env.VITE_API_URL}${
              filteringImage(part.images[0])?.url
            }`}
            className='object-center object-cover rounded-xl h-full w-full md:w-96'
          />
        </Link>
      </div>

      <ul className='border-t md:border-none border-background/10 w-full flex flex-col justify-evenly flex-grow text-black px-4 md:pl-0 md:pr-4 gap-1 py-2'>
        <li className='flex flex-row justify-between'>
          <h1 className='font-normal text-base md:text-lg xl:text-xl text-nowrap'>
            {t('productInCart.part')}
          </h1>
          <div className='flex justify-end items-center flex-grow'>
            <p className='font-medium text-base md:text-lg xl:text-xl text-wrap'>
              {part.name}
            </p>
          </div>
        </li>
        <li className='flex flex-row justify-between'>
          <h1 className='font-normal text-base md:text-lg xl:text-xl'>
            {t('productInCart.price')}
          </h1>
          <div className='flex justify-end items-center flex-grow'>
            <p className='font-medium text-base md:text-lg xl:text-xl'>
              ${part.price.toFixed(2)}
            </p>
          </div>
        </li>
        <li className='flex flex-row justify-between'>
          <h1 className='font-normal text-base md:text-lg xl:text-xl'>
            {t('productInCart.quantity')}
          </h1>
          <div className='flex'>
            <button
              disabled={quantity === 1}
              onClick={() =>
                decreasePartQuantity({ documentId: part.documentId })
              }
            >
              <Minus className='size-4 md:size-5 xl:size-6 bg-background/10 p-1 rounded-full shadow shadow-background/20 hover:bg-background/25' />
            </button>

            <p className='font-medium text-base md:text-lg xl:text-xl w-10 text-center'>
              {quantity}
            </p>
            <button
              disabled={quantity >= part.stock}
              onClick={() =>
                increasePartQuantity({ documentId: part.documentId })
              }
            >
              <Plus className='size-4 md:size-5 xl:size-6 bg-background/10 p-1 rounded-full shadow shadow-background/20 hover:bg-background/25' />
            </button>
          </div>
        </li>
        <li className='flex flex-row justify-between'>
          <h1 className='font-normal text-base md:text-lg xl:text-xl'>
            {t('productInCart.total')}
          </h1>
          <div className='flex justify-end items-center flex-grow'>
            <p className='font-medium text-base md:text-lg xl:text-xl'>
              ${(part.price * quantity).toFixed(2)}
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

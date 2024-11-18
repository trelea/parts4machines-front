import { Link } from 'react-router-dom';
import Image from './Image';
import { Button } from './ui/button';
import { useTranslation } from 'react-i18next';
import { LuMessageSquarePlus } from 'react-icons/lu';
import { Dialog } from './ui/dialog';
import { DialogTrigger } from '@radix-ui/react-dialog';
import OrderVehicle from './OrderVehicle';
import React from 'react';

interface Props {
  id: string;
  title: string;
  price: number;
  thumb: string;
  href: string;
}

export default function VehicleProductCard({
  id,
  title,
  price,
  thumb,
  href,
}: Props) {
  const [open, setOpen] = React.useState<boolean>(false);
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

      <div className='flex flex-col justify-between md:flex-1 p-4  lg:flex-none min-h-40'>
        <Link to={`/${i18n.language}${href}`} className='max-h-fit'>
          <h1 className='font-normal text-base lg:text-lg 2xl:text-xl text-black'>
            {title.toUpperCase()}
          </h1>
        </Link>

        <div className='flex items-end h-full w-full'>
          <div className='space-y-2 w-full'>
            <div className='font-semibold text-base xl:text-lg text-black flex justify-between'>
              <h1>Price:</h1>
              <h1>${price.toFixed(2)}</h1>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className='font-semibold text-sm lg:text-base 2xl:text-lg text-foreground hover:text-primary h-fit bg-background m-0 p-0 hover:bg-black shadow-2xl flex gap-4 px-10 py-2 w-full'>
                  <p>Order</p>
                  <LuMessageSquarePlus className='size-6' />
                </Button>
              </DialogTrigger>
              <OrderVehicle
                title={title.toUpperCase()}
                price={price}
                id={id}
                open={open}
                setOpen={setOpen}
              />
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

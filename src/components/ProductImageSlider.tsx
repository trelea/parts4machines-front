import React from 'react';
import Image from './Image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { filteringImage } from '@/lib/utils';

interface Props {
  images:
    | {
        formats: {
          large: { url: string; name: string };
          small: { url: string; name: string };
          medium: { url: string; name: string };
          thumbnail: { url: string; name: string };
        };
      }[]
    | undefined;
}

export default function ProductImageSlider({ images }: Props) {
  const [thumb, setThumb] = React.useState<number>(0);

  return (
    <>
      <div className='hidden lg:flex-1 lg:flex flex-col gap-6'>
        <div>
          <Image
            src={`${import.meta.env.VITE_API_URL}${
              images && filteringImage(images[thumb])?.url
            }`}
            alt={images && filteringImage(images[thumb])?.name}
            className='rounded-3xl shadow-2xl h-[450px] xl:h-[500px] 2xl:h-[550px] w-full object-contain border border-white border-opacity-10'
          />
        </div>
        <Carousel
          className='w-full relative'
          opts={{
            align: 'start',
          }}
        >
          <CarouselContent>
            {images?.map((i, _: number) => (
              <CarouselItem key={_} className='basis-1/3'>
                <div
                  className='flex justify-center items-center'
                  onClick={() => setThumb(_)}
                >
                  <Image
                    className={`h-32 xl:h-36 2xl:h-40 w-full object-contain object-center rounded-xl shadow-2xl  ${
                      thumb === _
                        ? 'border-2 border-foreground'
                        : 'border border-white border-opacity-10'
                    }`}
                    src={`${import.meta.env.VITE_API_URL}${
                      i && i.formats.small.url
                    }`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            className='absolute left-2'
            disabled={thumb === 0}
            additionalOnClick={() => setThumb((_) => _ - 1)}
          />
          <CarouselNext
            className='absolute right-2'
            disabled={thumb === (images?.length as number) - 1}
            additionalOnClick={() => setThumb((_) => _ + 1)}
          />
        </Carousel>
      </div>
      <div className='lg:hidden w-full'>
        <Carousel className='w-full relative h-64 sm:h-80 md:h-96'>
          <CarouselContent>
            {images?.map((i, _: number) => (
              <CarouselItem key={_}>
                <div className='flex justify-center items-center'>
                  <Image
                    className='w-full object-contain object-center rounded-lg shadow-2xl h-64 sm:h-80 md:h-96 border border-white border-opacity-10'
                    src={`${import.meta.env.VITE_API_URL}${
                      i && filteringImage(i)?.url
                    }`}
                    alt={`${import.meta.env.VITE_API_URL}${
                      i && filteringImage(i)?.name
                    }`}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            // disabled={thumb === 0}
            className='absolute left-2 top-[50%]'
            // onClick={() => setThumb((_) => _ - 1)}
          />
          <CarouselNext
            // disabled={thumb === (images?.length as number) - 1}
            className='absolute right-2 top-[50%]'
            // onClick={() => setThumb((_) => _ + 1)}
          />
        </Carousel>
      </div>
    </>
  );
}

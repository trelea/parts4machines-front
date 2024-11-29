import { Service } from '@/pages/Services/types/services.types';
import Image from './Image';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { useCheckProductsInCart } from '@/hooks/useCheckProductInCart';
import { useCartStore } from '@/store/store';
import { CartState } from '@/store/types';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';

interface Props {
  service: Service;
}

export default function ServiceCard({ service }: Props) {
  const { i18n, t } = useTranslation();
  const { isServiceInCart } = useCheckProductsInCart();
  const { addService, removeService } = useCartStore(
    (state: CartState) => state
  );

  return (
    <div className='w-full flex flex-col gap-4 md:gap-6 xl:gap-8 2xl:gap-10'>
      <h1 className='font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>
        {service[
          `title_${i18n.language}` as
            | 'title_en'
            | 'title_ru'
            | 'title_ua'
            | 'title_es'
        ].toUpperCase()}
      </h1>
      <div className='relative'>
        <Image
          className='w-full max-h-[700px] object-cover object-center rounded-xl shadow-2xl border border-white border-opacity-25 brightness-50'
          src={`${import.meta.env.VITE_API_URL}${
            service.image.formats.large.url
          }`}
        />
        <div className='hidden md:block absolute bottom-0 p-6 lg:p-7 xl:p-8 2xl:p-10 w-full'>
          {isServiceInCart({ documentId: service.documentId }) ? (
            <Button
              className='text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl md:py-3 lg:py-4 xl:py-5 2xl:py-6 md:px-16 lg:px-24 xl:px-32 2xl:px-40 h-fit rounded-md 2xl:rounded-xl float-right ml-10'
              onClick={() => {
                removeService({ documentId: service.documentId });
                toast({ description: t('cart.serviceRemove') });
              }}
            >
              {t('cart.remove')}
            </Button>
          ) : (
            <Button
              className='text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl md:py-3 lg:py-4 xl:py-5 2xl:py-6 md:px-16 lg:px-24 xl:px-32 2xl:px-40 h-fit rounded-md 2xl:rounded-xl float-right ml-10'
              onClick={() => {
                addService({
                  documentId: service.documentId,
                  price: service.price,
                  title: {
                    title_en: service.title_en,
                    title_es: service.title_es,
                    title_ru: service.title_ru,
                    title_ua: service.title_ua,
                  },
                });
                toast({
                  description: (
                    <p>
                      {t('cart.serviceAdd')}{' '}
                      <Link
                        to={`/${i18n.language}/cart`}
                        className='text-primary underline'
                      >
                        {t('cart.check')}
                      </Link>
                    </p>
                  ),
                });
              }}
            >
              {t('cart.buy')} ${service.price.toFixed(2)}
            </Button>
          )}

          <p className='text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium'>
            {
              service[
                `description_${i18n.language}` as
                  | 'description_en'
                  | 'description_ru'
                  | 'description_ua'
                  | 'description_es'
              ]
            }
          </p>
        </div>
      </div>
      <div className='md:hidden'>
        {isServiceInCart({ documentId: service.documentId }) ? (
          <Button
            className='text-sm sm:text-base sm:py-3 px-8 sm:px-16 h-fit rounded-md 2xl:rounded-xl float-start mr-4'
            onClick={() => {
              removeService({ documentId: service.documentId });
              toast({ description: t('cart.serviceRemove') });
            }}
          >
            {t('cart.remove')}
          </Button>
        ) : (
          <Button
            className='text-sm sm:text-base sm:py-3 px-8 sm:px-16 h-fit rounded-md 2xl:rounded-xl float-start mr-4'
            onClick={() => {
              addService({
                documentId: service.documentId,
                price: service.price,
                title: {
                  title_en: service.title_en,
                  title_es: service.title_es,
                  title_ru: service.title_ru,
                  title_ua: service.title_ua,
                },
              });
              toast({
                description: (
                  <p>
                    {t('cart.serviceAdd')}{' '}
                    <Link
                      to={`/${i18n.language}/cart`}
                      className='text-primary underline'
                    >
                      {t('cart.check')}
                    </Link>
                  </p>
                ),
              });
            }}
          >
            {t('cart.buy')} ${service.price.toFixed(2)}
          </Button>
        )}

        <p className='text-left text-base sm:text-lg'>
          {
            service[
              `description_${i18n.language}` as
                | 'description_en'
                | 'description_ru'
                | 'description_ua'
                | 'description_es'
            ]
          }
        </p>
      </div>
    </div>
  );
}

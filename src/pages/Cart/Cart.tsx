import Loyout from '@/components/Loyout';
import { useI18n } from '@/hooks/useI18n';
import { useGetCart } from './hooks/useGetCart';
import EmptyCart from '@/components/EmptyCart';
import ErrorFetchDialog from '@/components/ErrorFetchDialog';
import { getServices, Service } from '../Services/types/services.types';
import ServiceInCart from '@/components/ServiceInCart';
import { AutoPart, getAutoParts } from '../AutoParts/types/autoparts.types';
import AutoPartInCart from '@/components/AutoPartInCart';
import { ScrollArea } from '@/components/ui/scroll-area';
import TotalSum from '@/components/TotalSum';

export default function Cart() {
  useI18n();
  const {
    isEmpty,
    services,
    parts,
    isLoading,
    isFetching,
    error,
    isError,
    cartServices,
    cartParts,
  } = useGetCart();

  if (error || isError) return <ErrorFetchDialog />;

  return (
    <Loyout>
      <div className='px-8 md:px-11 lg:px-40 2xl:px-56 w-full min-h-dvh'>
        {isEmpty ? (
          <EmptyCart />
        ) : (
          <div className='flex flex-col 2xl:flex-row gap-6'>
            <ScrollArea className='h-[750px]'>
              <div className='flex flex-col gap-6'>
                {/* Render Services In Cart */}
                {!isLoading &&
                  !isFetching &&
                  // @ts-ignore
                  !services?.empty &&
                  // @ts-ignore
                  services?.empty !== true &&
                  // @ts-ignore
                  services?.data && (
                    <>
                      {(services as getServices).data.map(
                        (service: Service) => (
                          <ServiceInCart
                            key={service.documentId}
                            service={service}
                            quantity={
                              cartServices.filter(
                                (s) => s.documentId === service.documentId
                              )[0].quantity
                            }
                          />
                        )
                      )}
                    </>
                  )}

                {/* Render Auto Parts In Cart */}
                {!isLoading &&
                  !isFetching &&
                  // @ts-ignore
                  !parts?.empty &&
                  // @ts-ignore
                  parts?.empty !== true &&
                  // @ts-ignore
                  parts?.data && (
                    <>
                      {(parts as getAutoParts).data.map((part: AutoPart) => (
                        <AutoPartInCart
                          key={part.documentId}
                          part={part}
                          quantity={
                            cartParts.filter(
                              (p) => p.documentId === part.documentId
                            )[0].quantity
                          }
                        />
                      ))}
                    </>
                  )}
              </div>
            </ScrollArea>
            <TotalSum />
          </div>
        )}
      </div>
    </Loyout>
  );
}

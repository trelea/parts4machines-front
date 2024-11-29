import { AutoPart } from '@/pages/AutoParts/types/autoparts.types';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { Button } from './ui/button';
import { useCheckProductsInCart } from '@/hooks/useCheckProductInCart';
import {
  MdOutlineRemoveShoppingCart,
  MdOutlineShoppingCart,
} from 'react-icons/md';
import { toast } from '@/hooks/use-toast';
import { useCartStore } from '@/store/store';
import { CartState } from '@/store/types';
import { Badge } from './ui/badge';
import { ScrollArea } from './ui/scroll-area';
import { useTranslation } from 'react-i18next';

interface Props {
  autoPart:
    | (AutoPart & {
        id: number;
        tags: string;
        part_status: number;
        description: string;
      })
    | undefined;
}

export default function AutoPartDetails({ autoPart }: Props) {
  const { t } = useTranslation();
  const { removePart, addPart } = useCartStore((state: CartState) => state);
  const { isPartInCart } = useCheckProductsInCart();
  return (
    <div className='flex-1 flex flex-col gap-10'>
      <h1 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-foreground'>
        {autoPart?.name} {autoPart?.oem} {autoPart?.cars.split(';')[0]}
      </h1>

      <div className='p-4 lg:p-6 2xl:p-10 border rounded-xl'>
        <ScrollArea className='xl:h-96'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='text-base lg:text-lg 2xl:text-xl font-medium'>
                  {t('partTable.details')}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='text-xs md:text-sm xl:text-base font-medium'>
              <TableRow>
                <TableCell>{t('partTable.name')}</TableCell>
                <TableCell>{autoPart?.name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('partTable.oem')}</TableCell>
                <TableCell>{autoPart?.oem}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('partTable.cars')}</TableCell>
                <TableCell className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4 gap-3 items-center justify-center'>
                  {autoPart?.cars.split(';').map((t, _: number) => (
                    <Badge
                      key={_}
                      className='w-full flex justify-center items-center text-center'
                    >
                      <h1 className='text-center'>{t.trim()}</h1>
                    </Badge>
                  ))}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('partTable.stock')}</TableCell>
                <TableCell>
                  <b className='bg-primary px-2 py-1 text-black rounded-full'>
                    {autoPart?.stock} pcs
                  </b>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('partTable.status')}</TableCell>
                <TableCell>
                  <b className='bg-primary px-1 text-black rounded-full'>
                    {autoPart?.part_status}
                  </b>
                  /10
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('partTable.desc')}</TableCell>
                <TableCell>{autoPart?.description}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('partTable.tags')}</TableCell>
                <TableCell className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4 gap-3 items-center justify-center'>
                  {autoPart?.tags.split(' ').map((t, _: number) => (
                    <Badge
                      key={_}
                      className='w-full flex justify-center items-center'
                    >
                      <h1>#{t}</h1>
                    </Badge>
                  ))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ScrollArea>
      </div>

      <div className='flex justify-between gap-6 items-center mb-10 xl:mb-0'>
        {isPartInCart({ documentId: autoPart?.documentId as string }) ? (
          <Button
            variant={'outline'}
            className='h-fit text-lg lg:text-xl 2xl:text-2xl w-full font-semibold flex justify-center items-center p-3 m-0 gap-4'
            onClick={() => {
              removePart({ documentId: autoPart?.documentId as string });
              toast({ description: t('cart.partRemove') });
            }}
          >
            <p>{t('cart.remove')}</p>
            <MdOutlineRemoveShoppingCart className='size-4 lg:size-6' />
          </Button>
        ) : (
          <Button
            variant={'default'}
            className='h-fit text-lg lg:text-xl 2xl:text-2xl w-full font-semibold flex justify-center items-center p-3 m-0 gap-4'
            onClick={() => {
              addPart({
                documentId: autoPart?.documentId as string,
                price: autoPart?.price as number,
                name: autoPart?.name as string,
              });
              toast({ description: t('cart.partAdd') });
            }}
          >
            <p>{t('cart.buy')}</p>
            <MdOutlineShoppingCart className='size-4 lg:size-6' />
          </Button>
        )}

        <h1 className='text-xl lg:text-2xl 2xl:text-3xl font-semibold'>
          ${autoPart?.price.toFixed(2)}
        </h1>
      </div>
    </div>
  );
}

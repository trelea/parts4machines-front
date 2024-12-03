import { useCartStore } from '@/store/store';
import { CartState } from '@/store/types';
import { Button } from './ui/button';
import React from 'react';
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table,
} from './ui/table';
import { useTranslation } from 'react-i18next';
import { ScrollArea } from './ui/scroll-area';
import { CircleDollarSign } from 'lucide-react';
import { useCheckOut } from '@/pages/Cart/hooks/useCheckOut';

export default function TotalSum() {
  const { i18n, t } = useTranslation();
  const { services, parts } = useCartStore((state: CartState) => state);
  const [total, setTotal] = React.useState<null | number>(null);
  const { checkout, isPending } = useCheckOut();

  React.useEffect(() => {
    let total = 0;
    if (services.length)
      total += services
        .map((s) => {
          return s.quantity * s.price;
        })
        .reduce((a, b) => a + b);
    if (parts.length)
      total += parts
        .map((s) => {
          return s.quantity * s.price;
        })
        .reduce((a, b) => a + b);
    setTotal(total);
  });

  return (
    <section className='border border-primary h-fit p-10 rounded-xl shadow-md shadow-foreground/25 flex-grow flex flex-col gap-5 mb-20 2xl:w-1/3'>
      <div className='flex justify-between'>
        <h1 className='text-base md:text-lg xl:text-xl 2xl:text-2xl font-medium'>
          {t('checkOut.price')}
        </h1>
        <h1 className='text-base md:text-lg xl:text-xl 2xl:text-2xl font-medium'>
          ${total?.toFixed(2)}
        </h1>
      </div>
      <ScrollArea className='max-h-96'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>{t('checkOut.p_x_q')}</TableHead>
              <TableHead> {t('checkOut.total')}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {parts.map((p) => (
              <TableRow key={p.documentId}>
                <TableCell>
                  {p.name} x {p.quantity}
                </TableCell>
                <TableCell>${p.price * p.quantity}</TableCell>
              </TableRow>
            ))}
            {services.map((s) => (
              <TableRow key={s.documentId}>
                <TableCell>
                  {
                    s.title[
                      `title_${i18n.language}` as
                        | 'title_en'
                        | 'title_ru'
                        | 'title_ua'
                        | 'title_es'
                    ]
                  }{' '}
                  x {s.quantity}
                </TableCell>
                <TableCell>${s.price * s.quantity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ScrollArea>

      <Button
        disabled={isPending}
        className='w-full text-base lg:text-lg 2xl:text-xl font-medium h-fit py-2'
        onClick={() => checkout({ services, parts })}
      >
        {isPending ? (
          t('proc')
        ) : (
          <>
            {t('checkOut.checkout')}
            <CircleDollarSign />
          </>
        )}
      </Button>
    </section>
  );
}

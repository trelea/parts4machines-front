import { DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { PhoneInput } from './ui/phone-input';
import { Button } from './ui/button';
import { SendHorizonal } from 'lucide-react';
import { useCreateVehicleOrder } from '@/pages/Vehicles/hooks/useCreateVehicleOrder';
import { useTranslation } from 'react-i18next';
import React from 'react';

interface Props {
  id: string;
  title: string;
  price: number;
  negotiate: boolean;
  setOpen: (_: boolean) => void;
  open: boolean;
}

export default function OrderVehicle({
  id,
  title,
  price,
  negotiate,
  open,
  setOpen,
}: Props) {
  const { t } = useTranslation();
  const { onSubmit, form } = useCreateVehicleOrder(id, open, setOpen);
  const [negotiation, setNegotiation] = React.useState<number | null>(null);

  return (
    <DialogContent className='max-w-[90%] xl:w-[50%] 2xl:w-[33%] rounded-lg lg:rounded-xl'>
      <DialogHeader>
        <DialogTitle className='text-base md:text-lg xl:text-xl 2xl:text-2xl'>
          {title}
        </DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form
          action=''
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-6'
        >
          <FormField
            control={form.control}
            name='client'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm md:text-base xl:text-lg 2xl:text-xl'>
                  {t('order.lab_1')}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='text'
                    className='outline-none text-sm xl:text-base 2xl:text-lg h-fit placeholder:opacity-75'
                    placeholder={t('order.place_1')}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm md:text-base xl:text-lg 2xl:text-xl'>
                  {t('order.lab_2')}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='email'
                    className='outline-none text-sm xl:text-base 2xl:text-lg h-fit placeholder:opacity-75'
                    placeholder={t('order.place_2')}
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='contact'
            render={({ field }) => (
              <FormItem>
                <FormLabel className='text-sm md:text-base xl:text-lg 2xl:text-xl'>
                  {t('order.lab_3')}
                </FormLabel>
                <FormControl>
                  <PhoneInput
                    {...field}
                    placeholder={t('order.place_3')}
                    className=''
                    required
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {negotiate && (
            <FormField
              control={form.control}
              name='negotiate'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-sm md:text-base xl:text-lg 2xl:text-xl'>
                    {t('order.lab_4')}
                  </FormLabel>
                  <FormControl>
                    <Input
                      // {...field}
                      onChange={(e) => {
                        form.setValue('negotiate', parseInt(e.target.value));
                        setNegotiation(parseInt(e.target.value));
                      }}
                      value={field.value}
                      type='number'
                      className='outline-none text-sm xl:text-base 2xl:text-lg h-fit placeholder:opacity-75'
                      placeholder={t('order.place_4')}
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <div className='flex justify-between text-sm md:text-base xl:text-lg 2xl:text-xl font-semibold'>
            <h1>{t('order.total')}:</h1>

            {negotiate && negotiation ? (
              <h1>${negotiation || price.toFixed(2)}</h1>
            ) : (
              <h1>${price.toFixed(2)}</h1>
            )}
          </div>

          <Button
            type='submit'
            variant={'default'}
            className='w-full flex items-center gap-4 text-sm md:text-base xl:text-lg 2xl:text-xl font-semibold h-fit'
          >
            {negotiate ? t('order.negotiate') : t('order.order')}

            <SendHorizonal className='size-4' />
          </Button>
        </form>
      </Form>
    </DialogContent>
  );
}

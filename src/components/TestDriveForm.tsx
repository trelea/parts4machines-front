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
import { Button } from './ui/button';
import { IoCarOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { PhoneInput } from './ui/phone-input';
import { Link } from 'react-router-dom';
import { useAdditionalOrder } from '@/pages/Vehicles/hooks/useAdditionalOrders';

interface Props {
  id: string;
  vehicle: string;
  setOpen: (_: boolean) => void;
  open: boolean;
}

export default function TestDriveForm({ id, vehicle, setOpen, open }: Props) {
  const { form, onSubmit, isPending } = useAdditionalOrder({
    id,
    open,
    setOpen,
    method: 'TEST_DRIVE',
  });
  const { t, i18n } = useTranslation();
  return (
    <DialogContent className='max-w-[90%] xl:w-[50%] 2xl:w-[33%] rounded-lg lg:rounded-xl'>
      <DialogHeader>
        <DialogTitle className='text-base md:text-lg xl:text-xl 2xl:text-2xl'>
          Test Drive
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

          <div className='flex flex-col font-normal text-white/50 text-sm md:text-base xl:text-lg gap-4 border border-white/5 shadow-2xl p-2 rounded-md'>
            <h1>
              {t('testDriveForm')}
              <Link
                to={`/${i18n.language}/vehicles/${id}`}
                className='hover:underline'
              >
                <b>{vehicle}.</b>
              </Link>
            </h1>

            <h1>
              {t('_1')}
              <Link
                to={`/${i18n.language}/vehicles`}
                className='hover:underline'
              >
                <b>{t('_2')}</b>
              </Link>
            </h1>
          </div>

          <Button
            disabled={isPending}
            type='submit'
            variant={'default'}
            className='bg-emerald-500 text-white hover:bg-emerald-600 w-full flex items-center gap-4 text-sm md:text-base xl:text-lg 2xl:text-xl font-semibold h-fit'
          >
            {isPending ? (
              <>{t('proc')}</>
            ) : (
              <>
                {t('drive')}
                <IoCarOutline className='size-6' />
              </>
            )}
          </Button>
        </form>
      </Form>
    </DialogContent>
  );
}

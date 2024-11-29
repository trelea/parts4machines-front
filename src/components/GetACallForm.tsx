import { useForm } from 'react-hook-form';
import { DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { PhoneInput } from './ui/phone-input';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { VscCallIncoming } from 'react-icons/vsc';
import { Link } from 'react-router-dom';

export default function GetACallForm() {
  const { t, i18n } = useTranslation();
  const form = useForm();
  return (
    <DialogContent className='max-w-[90%] xl:w-[50%] 2xl:w-[33%] rounded-lg lg:rounded-xl'>
      <DialogHeader>
        <DialogTitle className='text-base md:text-lg xl:text-xl 2xl:text-2xl'>
          Get In Touch With Us
        </DialogTitle>
      </DialogHeader>
      <Form {...form}>
        <form
          action=''
          onSubmit={form.handleSubmit(() => {})}
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
              Submit
              {/* <Link
                to={`/${i18n.language}/vehicles/${id}`}
                className='hover:underline'
              >
                <b>{vehicle}.</b>
              </Link> */}
            </h1>

            <h1>
              Clike Here To View More{' '}
              <Link
                to={`/${i18n.language}/vehicles`}
                className='hover:underline'
              >
                <b>Vehicles.</b>
              </Link>
            </h1>
          </div>

          <Button
            type='submit'
            variant={'default'}
            className='bg-emerald-500 text-white hover:bg-emerald-600 w-full flex items-center gap-4 text-sm md:text-base xl:text-lg 2xl:text-xl font-semibold h-fit'
          >
            Submit
            <VscCallIncoming className='size-6' />
          </Button>
        </form>
      </Form>
    </DialogContent>
  );
}

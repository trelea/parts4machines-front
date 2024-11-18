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
import React from 'react';
import { useCreateVehicleOrder } from '@/pages/Vehicles/hooks/useCreateVehicleOrder';

interface Props {
  id: string;
  title: string;
  price: number;
  negotiate?: boolean;
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
                  Name and Surname
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='text'
                    className='outline-none text-sm xl:text-base 2xl:text-lg h-fit placeholder:opacity-75'
                    placeholder='Your name and surname...'
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
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type='email'
                    className='outline-none text-sm xl:text-base 2xl:text-lg h-fit placeholder:opacity-75'
                    placeholder='Your email...'
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
                  Contact
                </FormLabel>
                <FormControl>
                  <PhoneInput
                    {...field}
                    placeholder='Your phone number...'
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
                    Negotiate
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      onChange={(e) => setNegotiation(Number(e.target.value))}
                      type='number'
                      className='outline-none text-sm xl:text-base 2xl:text-lg h-fit placeholder:opacity-75'
                      placeholder='Set price...'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <div className='flex justify-between text-sm md:text-base xl:text-lg 2xl:text-xl font-semibold'>
            <h1>Total:</h1>

            {negotiate && negotiation ? (
              <h1>${negotiation.toFixed(2)}</h1>
            ) : (
              <h1>${price.toFixed(2)}</h1>
            )}
          </div>

          <Button
            type='submit'
            variant={'default'}
            className='w-full flex items-center gap-4 text-sm md:text-base xl:text-lg 2xl:text-xl font-semibold h-fit'
          >
            {negotiate ? 'Place Negotiation' : 'Place Order'}

            <SendHorizonal className='size-4' />
          </Button>
        </form>
      </Form>
    </DialogContent>
  );
}

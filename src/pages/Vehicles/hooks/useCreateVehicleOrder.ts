import { useForm } from 'react-hook-form';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { PostVehicleOrder } from '../types/vehicles.types';
import { postVehicleOrder } from '../api/vehicles.apis';
import { AxiosError } from 'axios';
import { toast } from '@/hooks/use-toast';

const formSchema = z.object({
  client: z.string(),
  email: z.string().email(),
  contact: z
    .string()
    .refine(isValidPhoneNumber, { message: 'Invalid phone number' }),
  negotiate: z.coerce.number().optional(),
});

export const useCreateVehicleOrder = (
  id: string,
  open: boolean,
  setOpen: (_: boolean) => void
) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      client: '',
      email: '',
      contact: '',
      negotiate: undefined,
    },
  });

  const mutation = useMutation({
    mutationKey: ['order-vehicle', id],
    mutationFn: async (data: PostVehicleOrder) => postVehicleOrder(data),
    onError: (err: AxiosError) => {
      toast({ description: err.message });
      setTimeout(() => setOpen(!open), 1000);
    },
    onSuccess: () => {
      toast({ description: 'Order Successfully Submited.' });
      setTimeout(() => setOpen(!open), 1000);
    },
  });

  const onSubmit = (val: z.infer<typeof formSchema>) => {
    if (!val.negotiate) delete val.negotiate;
    mutation.mutate({ data: { ...val, car: id } });
    form.reset();
  };

  return { form, onSubmit };
};

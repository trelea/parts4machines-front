import { useForm } from 'react-hook-form';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { PostVehicleOrder } from '../types/vehicles.types';
import { postVehicleOrder } from '../api/vehicles.apis';
import { AxiosError } from 'axios';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

export const useCreateVehicleOrder = (
  id: string,
  open: boolean,
  setOpen: (_: boolean) => void
) => {
  const { t } = useTranslation();
  const formSchema = z.object({
    client: z.string(),
    email: z.string().email(),
    contact: z
      .string()
      .refine(isValidPhoneNumber, { message: t('invalidContact') }),
    negotiate: z.coerce
      .number()
      .optional()
      .transform((x) => (x ? x : '')),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      client: '',
      email: '',
      contact: '',
      negotiate: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ['order-vehicle', id],
    mutationFn: async (data: PostVehicleOrder) => postVehicleOrder(data),
    onError: (err: AxiosError) => {
      toast({ description: err.message });
      setTimeout(() => setOpen(!open), 250);
    },
    onSuccess: () => {
      toast({ description: t('__desc__2') });
      setTimeout(() => setOpen(!open), 250);
    },
  });

  const onSubmit = (val: z.infer<typeof formSchema>) => {
    const { negotiate, ...rest } = val;

    mutate({
      data: {
        ...rest,
        negotiate: negotiate === '' ? null : negotiate,
        car: id,
      },
    });

    form.reset();
  };

  return { form, onSubmit, isPending };
};

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { z } from 'zod';
import { AdditionalForm } from '../types/vehicles.types';
import { postGetCall, postTestDrive } from '../api/vehicles.apis';
import { AxiosError } from 'axios';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

interface Props {
  id: string;
  open: boolean;
  setOpen: (_: boolean) => void;
  method: 'TEST_DRIVE' | 'GET_CALL';
}

export const useAdditionalOrder = ({ id, open, setOpen, method }: Props) => {
  const { t } = useTranslation();

  const formSchema = z.object({
    client: z.string(),
    contact: z
      .string()
      .refine(isValidPhoneNumber, { message: t('invalidContact') }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { client: '', contact: '' },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: [method, id],
    mutationFn: async (data: AdditionalForm) => {
      if (method === 'TEST_DRIVE') return await postTestDrive(data);
      if (method === 'GET_CALL') return await postGetCall(data);
    },
    onSuccess: () => {
      toast({
        description: t('__desc__1'),
      });
      setTimeout(() => setOpen(!open), 250);
    },
    onError: (err: AxiosError) => {
      toast({ description: err.message });
      setTimeout(() => setOpen(!open), 250);
    },
  });

  const onSubmit = (val: z.infer<typeof formSchema>) => {
    mutate({ data: { ...val, car: id } });
    form.reset();
  };

  return { form, onSubmit, isPending };
};

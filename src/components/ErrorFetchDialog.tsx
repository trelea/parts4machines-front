import { Link } from 'react-router-dom';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';
import { useTranslation } from 'react-i18next';

export default function ErrorFetchDialog() {
  const { i18n, t } = useTranslation();
  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent className='w-[90%] rounded-xl'>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-2xl'>
            {t('error.title')}
          </AlertDialogTitle>
          <AlertDialogDescription className='text-lg'>
            {t('error.desc')}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='text-lg'>
            <Link to={`/${i18n.language}/`}>{t('error.home')}</Link>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

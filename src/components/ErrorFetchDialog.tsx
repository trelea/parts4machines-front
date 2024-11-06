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
  const { i18n } = useTranslation();
  return (
    <AlertDialog defaultOpen>
      <AlertDialogContent className='w-[90%] rounded-xl'>
        <AlertDialogHeader>
          <AlertDialogTitle className='text-2xl'>
            Ops Somthing Went Wrong!
          </AlertDialogTitle>
          <AlertDialogDescription className='text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi alias
            amet aliquid quidem ut quaerat veritatis tempora saepe perferendis
            reprehenderit!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='text-lg'>
            <Link to={`/${i18n.language}/`}>Go Home</Link>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

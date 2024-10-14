import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import darkLogo from '@/assets/darkLogo.png';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const { i18n } = useTranslation();
  return (
    <footer className='bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-8 px-8 md:px-11 lg:px-40 2xl:px-56 w-full justify-between'>
      <div>
        <Link to={`/${i18n.language}/`}>
          <img
            src={darkLogo}
            alt=''
            className='w-24 md:w-28 lg:w-32  xl:w-36 2xl:w-40'
          />
        </Link>
      </div>

      <ul className='flex flex-col text-lg font-normal text-background gap-3'>
        <li className='hover:underline'>
          <Link to={`/${i18n.language}/autoparts`}>Auto Parts</Link>
        </li>
        <li className='hover:underline'>
          <Link to={`/${i18n.language}/services`}>Services</Link>
        </li>
        <li className='hover:underline'>
          <Link to={`/${i18n.language}/vehicles`}>Vehicles</Link>
        </li>
        <li className='hover:underline'>
          <Link to={`/${i18n.language}/`}>FAQ</Link>
        </li>
      </ul>

      <ul className='flex flex-col text-lg font-normal text-background gap-3'>
        <li className='flex gap-4'>
          <Link to={'https://www.facebook.com'} target='_blank'>
            <Facebook className='size-9 text-background' />
          </Link>
          <Link to={'https://www.instagram.com'} target='_blank'>
            <Instagram className='size-9 text-background' />
          </Link>
        </li>
        <li>+37360414234</li>
        <li>+37360432414</li>
      </ul>

      <ul className='flex flex-col text-lg font-normal text-background gap-3'>
        <li className='font-medium text-xl'>Массачусетс</li>
        <li>1s bridge dr Agawam 01001</li>
        <li className='font-medium text-xl'>Южной Каролине</li>
        <li>8920 Asheville Hwy boiling springs sc </li>
      </ul>
    </footer>
  );
}

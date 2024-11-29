import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import darkLogo from '@/assets/darkLogo.png';
import { Facebook, Instagram } from 'lucide-react';
import { BsLinkedin } from 'react-icons/bs';

export default function Footer() {
  const { i18n, t } = useTranslation();
  return (
    <footer className='bg-white pt-8 px-8 md:px-11 lg:px-40 2xl:px-56 w-full'>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 justify-between w-full pb-8'>
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
            <Link to={`/${i18n.language}/autoparts`}>{t('navbar.parts')}</Link>
          </li>
          <li className='hover:underline'>
            <Link to={`/${i18n.language}/services`}>
              {t('navbar.services')}
            </Link>
          </li>
          <li className='hover:underline'>
            <Link to={`/${i18n.language}/vehicles`}>
              {t('navbar.vehicles')}
            </Link>
          </li>
          {/* <li className='hover:underline'>
          <Link to={`/${i18n.language}/`}>FAQ</Link>
        </li> */}
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
          <li className='font-medium text-xl'>{t('footer.city')}</li>
          <li>1s bridge dr Agawam 01001</li>
          <li className='font-medium text-xl'>{t('footer.state')}</li>
          <li>8920 Asheville Hwy boiling springs sc </li>
        </ul>
      </section>

      <div className='w-full border-t border-secondary/25 py-1 flex justify-between text-background/75 flex-col sm:flex-row'>
        <h1>&#169; 2024 ELITE AUTOS</h1>

        <Link
          to={'https://md.linkedin.com/in/trelea-marius-ba694630a'}
          target='_blank'
          className='hover:animate-bounce'
        >
          <h1 className='flex items-center gap-2'>
            {t('footer.builtBy')} Trelea Dev{' '}
            <span>
              <BsLinkedin />
            </span>
          </h1>
        </Link>
      </div>
    </footer>
  );
}

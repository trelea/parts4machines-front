import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '@/assets/Logo.png';
import darkLogo from '@/assets/darkLogo.png';
import { useGetWithoutLocale } from '@/hooks/useGetWithoutLocale';
import { Menu, ShoppingCart } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { setLang } from '@/config/setLang';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useCartStore } from '@/store/store';
import { CartState } from '@/store/types';

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const path = useGetWithoutLocale();
  const { services, parts } = useCartStore((state: CartState) => state);

  return (
    <nav className='flex py-8 px-8 md:px-11 lg:px-40 2xl:px-56 w-full justify-between items-center'>
      <div>
        <Link to={`/${i18n.language}/`}>
          <img
            src={logo}
            alt='Elite Autos Light Logo'
            className='w-24 md:w-28 lg:w-32  xl:w-36 2xl:w-40'
          />
        </Link>
      </div>

      <ul className='hidden xl:flex gap-10 text-xl font-medium'>
        <li
          className={`hover:animate-bounce border border-[#E6CCB2]/80 rounded-lg p-1 px-6 2xl:px-10 flex justify-center items-center ${
            path === 'vehicles' && 'underline'
          }`}
        >
          <Link to={`/${i18n.language}/vehicles`}>{t('navbar.vehicles')}</Link>
        </li>
        <li
          className={`hover:animate-bounce border border-[#E6CCB2]/80 rounded-lg p-1 px-6 2xl:px-10 flex justify-center items-center ${
            path === 'autoparts' && 'underline'
          }`}
        >
          <Link to={`/${i18n.language}/autoparts`}>{t('navbar.parts')}</Link>
        </li>
        <li
          className={`hover:animate-bounce border border-[#E6CCB2]/80 rounded-lg p-1 px-6 2xl:px-10 flex justify-center items-center ${
            path === 'services' && 'underline'
          }`}
        >
          <Link to={`/${i18n.language}/services`}>{t('navbar.services')}</Link>
        </li>
        {/* <li className={`hover:animate-bounce ${path === '' && 'underline'}`}>
          <Link to={`/${i18n.language}/`}>FAQ</Link>
        </li> */}
      </ul>

      <ul className='flex gap-6 2xl:gap-10 items-center justify-center relative'>
        <li className='fixed mr-[272px] z-50 xl:mr-32 border border-[#E6CCB2]/80 rounded-full aspect-square flex justify-center items-center bg-background/50 backdrop-blur-xl'>
          <Select onValueChange={(e) => setLang(e)}>
            <SelectTrigger className='w-fit border-none outline-none focus-visible:outline-none focus:outline-none ring-0 focus:ring-0 focus-visible:ring-0 text-xl font-medium  bg-transparent rounded-full focus:border-none aspect-square flex justify-center items-center'>
              <SelectValue placeholder={i18n.language} />
            </SelectTrigger>
            <SelectContent className=''>
              <SelectItem value='en'>en</SelectItem>
              <SelectItem value='ru'>ru</SelectItem>
              <SelectItem value='ua'>ua</SelectItem>
              <SelectItem value='es'>es</SelectItem>
            </SelectContent>
          </Select>
        </li>
        <li
          className={`hover:animate-bounce fixed border border-[#E6CCB2]/80 ${
            path === 'cart' ? 'bg-white' : 'bg-background/50'
          } backdrop-blur-xl z-50 mr-36 xl:mr-0 ${
            path === 'cart' && 'bg-foreground'
          } rounded-full flex justify-center items-center`}
        >
          <Link
            to={`/${i18n.language}/cart`}
            className='relative p-3 flex justify-center items-center'
          >
            <ShoppingCart
              className={`${
                path === 'cart' ? 'text-background' : 'text-foreground'
              } bg-transparent size-6`}
            />
          </Link>
          {services.length + parts.length > 0 && (
            <div className='absolute top-0 right-0 bg-primary aspect-square rounded-full  flex justify-center items-center px-2'>
              <h1 className='text-xs text-black aspect-square font-medium'>
                {services.length + parts.length}
              </h1>
            </div>
          )}
        </li>
        <li className='xl:hidden border border-[#E6CCB2]/80 fixed z-50 mr-5 bg-background/50 backdrop-blur-xl rounded-full aspect-square flex justify-center items-center p-3'>
          <Sheet>
            <SheetTrigger>
              <Menu className='bg-transparent size-6 text-foreground' />
            </SheetTrigger>
            <SheetContent className='bg-foreground'>
              <SheetHeader>
                <SheetDescription className='w-full flex justify-center items-center py-4'>
                  <Link to={`/${i18n.language}/`}>
                    <img src={darkLogo} alt='' className='w-24' />
                  </Link>
                </SheetDescription>
              </SheetHeader>
              <ul className='flex flex-col text-xl font-medium text-background gap-6 mt-6'>
                <li
                  className={`hover:animate-bounce ${
                    path === 'vehicles' && 'underline'
                  }`}
                >
                  <Link to={`/${i18n.language}/vehicles`}>
                    {t('navbar.vehicles')}
                  </Link>
                </li>
                <li
                  className={`hover:animate-bounce ${
                    path === 'autoparts' && 'underline'
                  }`}
                >
                  <Link to={`/${i18n.language}/autoparts`}>
                    {t('navbar.parts')}
                  </Link>
                </li>
                <li
                  className={`hover:animate-bounce ${
                    path === 'services' && 'underline'
                  }`}
                >
                  <Link to={`/${i18n.language}/services`}>
                    {t('navbar.services')}
                  </Link>
                </li>

                {/* <li
                  className={`hover:animate-bounce ${
                    path === '' && 'underline'
                  }`}
                >
                  <Link to={`/${i18n.language}/`}>FAQ</Link>
                </li> */}
                <li className=''>
                  <Select onValueChange={(e) => setLang(e)}>
                    <SelectTrigger className='bg-transparent w-fit border-none outline-none ring-transparent focus:border-none focus:outline-none focus:ring-0 text-xl font-medium'>
                      <SelectValue placeholder={i18n.language} />
                    </SelectTrigger>
                    <SelectContent className='bg-transparent text-background'>
                      <SelectItem value='en'>en</SelectItem>
                      <SelectItem value='ru'>ru</SelectItem>
                      <SelectItem value='ua'>ua</SelectItem>
                      <SelectItem value='es'>es</SelectItem>
                    </SelectContent>
                  </Select>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </li>
      </ul>
    </nav>
  );
}

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
  const { i18n } = useTranslation();
  const path = useGetWithoutLocale();
  const { services, parts } = useCartStore((state: CartState) => state);

  return (
    <nav className='flex py-8 px-8 md:px-11 lg:px-40 2xl:px-56 w-full justify-between items-center'>
      <div>
        <Link to={`/${i18n.language}/`}>
          <img
            src={logo}
            alt=''
            className='w-24 md:w-28 lg:w-32  xl:w-36 2xl:w-40'
          />
        </Link>
      </div>

      <ul className='hidden lg:flex gap-10 text-xl font-medium'>
        <li
          className={`hover:animate-bounce ${
            path === 'autoparts' && 'underline'
          }`}
        >
          <Link to={`/${i18n.language}/autoparts`}>Auto Parts</Link>
        </li>
        <li
          className={`hover:animate-bounce ${
            path === 'services' && 'underline'
          }`}
        >
          <Link to={`/${i18n.language}/services`}>Services</Link>
        </li>
        <li
          className={`hover:animate-bounce ${
            path === 'vehicles' && 'underline'
          }`}
        >
          <Link to={`/${i18n.language}/vehicles`}>Vehicles</Link>
        </li>
        <li className={`hover:animate-bounce ${path === '' && 'underline'}`}>
          <Link to={`/${i18n.language}/`}>FAQ</Link>
        </li>
      </ul>

      <ul className='flex gap-6 2xl:gap-10 items-center justify-center'>
        <li className='hidden lg:flex'>
          <Select onValueChange={(e) => setLang(e)}>
            <SelectTrigger className='w-fit border-none outline-none focus-visible:outline-none focus:outline-none ring-0 focus:ring-0 focus-visible:ring-0 rounded-none text-xl font-medium'>
              <SelectValue placeholder={i18n.language} />
            </SelectTrigger>
            <SelectContent className=''>
              <SelectItem value='en'>En</SelectItem>
              <SelectItem value='ru'>Ru</SelectItem>
              <SelectItem value='ua'>Ua</SelectItem>
              <SelectItem value='es'>Es</SelectItem>
            </SelectContent>
          </Select>
        </li>
        <li
          className={`hover:animate-bounce relative ${
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
        <li className='lg:hidden'>
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
                    path === 'autoparts' && 'underline'
                  }`}
                >
                  <Link to={`/${i18n.language}/autoparts`}>Auto Parts</Link>
                </li>
                <li
                  className={`hover:animate-bounce ${
                    path === 'services' && 'underline'
                  }`}
                >
                  <Link to={`/${i18n.language}/services`}>Services</Link>
                </li>
                <li
                  className={`hover:animate-bounce ${
                    path === 'vehicles' && 'underline'
                  }`}
                >
                  <Link to={`/${i18n.language}/vehicles`}>Vehicles</Link>
                </li>
                <li
                  className={`hover:animate-bounce ${
                    path === '' && 'underline'
                  }`}
                >
                  <Link to={`/${i18n.language}/`}>FAQ</Link>
                </li>
                <li className=''>
                  <Select onValueChange={(e) => setLang(e)}>
                    <SelectTrigger className='bg-transparent w-fit border-none outline-none ring-transparent focus:border-none focus:outline-none focus:ring-0 text-xl font-medium'>
                      <SelectValue placeholder={i18n.language} />
                    </SelectTrigger>
                    <SelectContent className='bg-transparent text-background'>
                      <SelectItem value='en'>En</SelectItem>
                      <SelectItem value='ru'>Ru</SelectItem>
                      <SelectItem value='ua'>Ua</SelectItem>
                      <SelectItem value='es'>Es</SelectItem>
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

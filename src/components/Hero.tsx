import subaru from '@/assets/subaru.png';
import luck from '@/assets/luck.png';
import Card from './Card';
import autoparts from '@/assets/autoparts.png';
import services from '@/assets/services.png';
import cars from '@/assets/cars.png';
import _autoparts from '@/assets/_autoparts.png';
import _services from '@/assets/_services.png';
import _cars from '@/assets/_cars.png';
import { useTranslation } from 'react-i18next';
import Image from './Image';

export default function Hero() {
  const { i18n, t } = useTranslation();
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-9 xl:gap-11 2xl:gap-14 px-8 md:px-11 lg:px-40 2xl:px-56 w-full mb-8'>
      <Card
        img={cars}
        smallImg={_cars}
        btnText={t('navbar.vehicles')}
        href={`/${i18n.language}/vehicles`}
        bestDeals
        t={t}
      />
      <Card
        img={autoparts}
        smallImg={_autoparts}
        btnText={t('navbar.parts')}
        href={`/${i18n.language}/autoparts`}
      />
      <Card
        img={services}
        smallImg={_services}
        btnText={t('navbar.services')}
        href={`/${i18n.language}/services`}
      />
      <div className=''>
        <h1 className='font-normal text-2xl md:text-3xl xl:font-medium xl:text-4xl mb-6'>
          {t('about.title')}
        </h1>
        <p className='font-normal text-base md:text-xl lg:text-base xl:text-2xl'>
          {t('about.desc')}
        </p>
      </div>
      <div className='hidden sm:block'>
        <Image src={subaru} alt={subaru} loading='lazy' />
      </div>
      <div className='hidden sm:block'>
        <Image src={luck} alt={luck} loading='lazy' />
      </div>
      <div className='grid grid-cols-2 gap-3 sm:hidden'>
        <Image src={subaru} alt={subaru} loading='lazy' />
        <Image src={luck} alt={luck} loading='lazy' />
      </div>
    </section>
  );
}

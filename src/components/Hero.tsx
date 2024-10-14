import bmw from '@/assets/bmw.png';
import zavod from '@/assets/zavod.png';
import Card from './Card';
import autoparts from '@/assets/autoparts.png';
import services from '@/assets/services.png';
import cars from '@/assets/cars.png';
import _autoparts from '@/assets/_autoparts.png';
import _services from '@/assets/_services.png';
import _cars from '@/assets/_cars.png';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { i18n } = useTranslation();
  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-9 xl:gap-11 2xl:gap-14 px-8 md:px-11 lg:px-40 2xl:px-56 w-full mb-8'>
      <Card
        img={autoparts}
        smallImg={_autoparts}
        btnText='Автозапчасти'
        href={`/${i18n.language}/autoparts`}
      />
      <Card
        img={services}
        smallImg={_services}
        btnText='Детейлинг'
        href={`/${i18n.language}/services`}
      />
      <Card
        img={cars}
        smallImg={_cars}
        btnText='автомобили'
        href={`/${i18n.language}/vehicles`}
      />
      <div className=''>
        <h1 className='font-normal text-2xl md:text-3xl xl:font-medium xl:text-4xl mb-6'>
          О компании
        </h1>
        <p className='font-normal text-base md:text-xl lg:text-base xl:text-2xl'>
          Описание краткое - мы продаем запчасти на BMW и Subaru но также у нас
          есть вкладка разное где вы можете найти различные товары других марок
          автомобилей. Мы находимся в 2 штатах в Массачусетсе и южной Каролине.
          Наши адреса где вы сможете приехать на место и посмотреть вживую то ,
          что хотите приобрести. Также мы можем вам предложить детейлинг вашего
          автомобиля пока что только в штате Массачусетс.
        </p>
      </div>
      <div className='hidden sm:block'>
        <img src={bmw} alt='' loading='lazy' />
      </div>
      <div className='hidden sm:block'>
        <img src={zavod} alt='' loading='lazy' />
      </div>
      <div className='grid grid-cols-2 gap-3 sm:hidden'>
        <img src={bmw} alt='' loading='lazy' />
        <img src={zavod} alt='' loading='lazy' />
      </div>
    </section>
  );
}

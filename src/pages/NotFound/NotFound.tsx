import Image from '@/components/Image';
import Loyout from '@/components/Loyout';
import { Button } from '@/components/ui/button';
import img404 from '@/assets/page404.png';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <Loyout>
      <div className='flex justify-center items-center w-full h-dvh'>
        <div className='flex flex-col items-center gap-10'>
          <div className='relative flex justify-center items-center'>
            <Image src={img404} loading='lazy' className='w-[75%] lg:w-[50%]' />
            <div className='absolute'>
              <h1 className='text-[100px] lg:text-[150px] 2xl:text-[200px] font-medium'>
                404
              </h1>
            </div>
          </div>
          <Button className='bg-foreground font-normal text-xs md:text-base lg:text-lg xl:text-xl 2xl:text-2xl py-4 px-8 h-fit w-fit rounded-2xl'>
            {t('emptyCart.home')}
          </Button>
        </div>
      </div>
    </Loyout>
  );
}

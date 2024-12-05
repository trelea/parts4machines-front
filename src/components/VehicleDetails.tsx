import { Vehicle } from '@/pages/Vehicles/types/vehicles.types';
import { useTranslation } from 'react-i18next';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { GiReceiveMoney } from 'react-icons/gi';
import { LuMessageSquarePlus } from 'react-icons/lu';
import { VscCallIncoming } from 'react-icons/vsc';
import { Dialog, DialogTrigger } from './ui/dialog';
import { IoCarOutline } from 'react-icons/io5';
import OrderVehicle from './OrderVehicle';
import React from 'react';
import TestDriveForm from './TestDriveForm';
import GetACallForm from './GetACallForm';

interface locales {
  en: string;
  ua: string;
  ru: string;
  es: string;
}

interface Props {
  vehicle:
    | (Vehicle & {
        fuel: locales;
        wheel: locales;
        body: locales;
        color: locales;
        traction: locales;
        transmission: locales;
      })
    | undefined;
}
export default function VehicleDetails({ vehicle }: Props) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [openNegotiate, setOpenNegotiate] = React.useState<boolean>(false);
  const [openTestDrive, setOpenTestDrive] = React.useState<boolean>(false);
  const [openGetCall, setOpenGetCall] = React.useState<boolean>(false);

  const { i18n, t } = useTranslation();

  return (
    <div className='flex-1 flex flex-col gap-10'>
      <h1 className='text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-foreground'>
        {vehicle?.year} {vehicle?.mark.toUpperCase()}{' '}
        {vehicle?.model.toUpperCase()}
      </h1>
      <div className='p-4 lg:p-6 2xl:p-10 border rounded-xl'>
        <ScrollArea className='xl:h-96'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='text-base lg:text-lg 2xl:text-xl font-medium'>
                  {t('vehicle.details')}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='text-xs md:text-sm xl:text-base font-medium'>
              <TableRow>
                <TableCell>{t('vehicle.location')}</TableCell>
                <TableCell
                  dangerouslySetInnerHTML={{
                    __html: vehicle?.location.replace(',', `<br/>`) as string,
                  }}
                ></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('vehicle.mark')}</TableCell>
                <TableCell>{vehicle?.mark}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('vehicle.model')}</TableCell>
                <TableCell>{vehicle?.model}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('vehicle.year')}</TableCell>
                <TableCell>{vehicle?.year}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('vehicle.odometer')}</TableCell>
                <TableCell>{vehicle?.odometer}km</TableCell>
              </TableRow>
              {vehicle?.vin && (
                <TableRow>
                  <TableCell>{t('vehicle.vin')}</TableCell>
                  <TableCell>{vehicle?.vin}</TableCell>
                </TableRow>
              )}

              <TableRow>
                <TableCell>{t('vehicle.engine')}</TableCell>
                <TableCell>{vehicle?.engine_capacity}cc</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('vehicle.transmission')}</TableCell>
                <TableCell>
                  {
                    vehicle?.transmission[
                      i18n.language as 'en' | 'ru' | 'ua' | 'es'
                    ]
                  }
                  cc
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('vehicle.power')}</TableCell>
                <TableCell>{vehicle?.horse_power}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('vehicle.seats')}</TableCell>
                <TableCell>{vehicle?.seats}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('vehicle.body')}</TableCell>
                <TableCell>
                  {vehicle?.body[i18n.language as 'en' | 'ru' | 'ua' | 'es']}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('vehicle.color')}</TableCell>
                <TableCell>
                  {vehicle?.color[i18n.language as 'en' | 'ru' | 'ua' | 'es']}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('vehicle.fuel')}</TableCell>
                <TableCell>
                  {vehicle?.fuel[i18n.language as 'en' | 'ru' | 'ua' | 'es']}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('vehicle.traction')}</TableCell>
                <TableCell>
                  {
                    vehicle?.traction[
                      i18n.language as 'en' | 'ru' | 'ua' | 'es'
                    ]
                  }
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{t('vehicle.wheel')}</TableCell>
                <TableCell>
                  {vehicle?.wheel[i18n.language as 'en' | 'ru' | 'ua' | 'es']}
                </TableCell>
              </TableRow>
              {vehicle?.description && (
                <TableRow>
                  <TableCell>{t('vehicle.desc')}</TableCell>
                  <TableCell>{vehicle?.description}</TableCell>
                </TableRow>
              )}
              <TableRow>
                <TableCell>{t('vehicle.tags')}</TableCell>
                <TableCell className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4 gap-3 items-center justify-center'>
                  {vehicle?.tags.split(' ').map((t, _: number) => (
                    <Badge
                      key={_}
                      className='w-full flex justify-center items-center'
                    >
                      <h1>#{t}</h1>
                    </Badge>
                  ))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ScrollArea>
      </div>

      <div className='grid grid-cols-3 gap-4 mb-10 xl:mb-0 items-center'>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild className='col-span-2'>
            <Button
              variant={'default'}
              className='h-fit text-base  2xl:text-lg w-full font-medium flex justify-center items-center py-3 m-0 gap-2'
            >
              <p>{t('vehicle.order')}</p>
              <LuMessageSquarePlus className='size-4 lg:size-6' />
            </Button>
          </DialogTrigger>
          <OrderVehicle
            open={open}
            setOpen={setOpen}
            id={vehicle?.documentId as string}
            title={`${
              vehicle?.year
            } ${vehicle?.mark.toUpperCase()} ${vehicle?.model.toUpperCase()}`}
            price={Number(vehicle?.price)}
            negotiate={false}
          />
        </Dialog>
        <div className='w-full flex justify-center items-center'>
          <h1 className='text-xl lg:text-2xl 2xl:text-3xl font-semibold text-ceter'>
            ${vehicle?.price.toFixed(2)}
          </h1>
        </div>

        <Dialog open={openNegotiate} onOpenChange={setOpenNegotiate}>
          <DialogTrigger asChild>
            <Button className='h-fit text-base  2xl:text-lg w-full font-medium flex justify-center items-center py-3 m-0 gap-2'>
              <p>{t('vehicle.negotiate')}</p>
              <GiReceiveMoney className='size-4 lg:size-6' />
            </Button>
          </DialogTrigger>
          <OrderVehicle
            open={openNegotiate}
            setOpen={setOpenNegotiate}
            id={vehicle?.documentId as string}
            title={`${
              vehicle?.year
            } ${vehicle?.mark.toUpperCase()} ${vehicle?.model.toUpperCase()}`}
            price={Number(vehicle?.price)}
            negotiate={true}
          />
        </Dialog>
        <Dialog open={openTestDrive} onOpenChange={setOpenTestDrive}>
          <DialogTrigger asChild>
            <Button
              // variant={'outline'}
              className='bg-emerald-500 text-white hover:bg-emerald-600 h-fit text-base 2xl:text-lg w-full font-medium flex justify-center items-center py-3 m-0 gap-4'
            >
              <p>{t('testDriveBtn')}</p>
              <IoCarOutline className='size-4 lg:size-6' />
            </Button>
          </DialogTrigger>
          <TestDriveForm
            id={vehicle?.documentId as string}
            vehicle={`${
              vehicle?.year
            } ${vehicle?.mark.toUpperCase()} ${vehicle?.model.toUpperCase()}`}
            open={openTestDrive}
            setOpen={setOpenTestDrive}
          />
        </Dialog>

        <Dialog open={openGetCall} onOpenChange={setOpenGetCall}>
          <DialogTrigger asChild>
            <Button
              // variant={'outline'}
              className='bg-emerald-500 text-white hover:bg-emerald-600 h-fit text-base 2xl:text-lg w-full font-medium flex justify-center items-center py-3 m-0 gap-4'
            >
              <p>{t('getCallBtn')}</p>
              <VscCallIncoming className='size-4 lg:size-6' />
            </Button>
          </DialogTrigger>
          <GetACallForm
            id={vehicle?.documentId as string}
            vehicle={`${
              vehicle?.year
            } ${vehicle?.mark.toUpperCase()} ${vehicle?.model.toUpperCase()}`}
            open={openGetCall}
            setOpen={setOpenGetCall}
          />
        </Dialog>
      </div>
    </div>
  );
}

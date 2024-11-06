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
import { Dialog, DialogTrigger } from './ui/dialog';
import OrderVehicle from './OrderVehicle';

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
  const { i18n } = useTranslation();

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
                <TableHead className='text-baselg:text-lg 2xl:text-xl font-medium'>
                  Details
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='text-sm lg:text-base font-medium'>
              <TableRow>
                <TableCell>Mark</TableCell>
                <TableCell>{vehicle?.mark}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Model</TableCell>
                <TableCell>{vehicle?.model}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Year</TableCell>
                <TableCell>{vehicle?.year}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Odometer</TableCell>
                <TableCell>{vehicle?.odometer}km</TableCell>
              </TableRow>
              {vehicle?.vin && (
                <TableRow>
                  <TableCell>VIN</TableCell>
                  <TableCell>{vehicle?.vin}</TableCell>
                </TableRow>
              )}

              <TableRow>
                <TableCell>Engine Capacity</TableCell>
                <TableCell>{vehicle?.engine_capacity}cc</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Transmission</TableCell>
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
                <TableCell>Horse Power</TableCell>
                <TableCell>{vehicle?.horse_power}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Seats</TableCell>
                <TableCell>{vehicle?.seats}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Body</TableCell>
                <TableCell>
                  {vehicle?.body[i18n.language as 'en' | 'ru' | 'ua' | 'es']}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Color</TableCell>
                <TableCell>
                  {vehicle?.color[i18n.language as 'en' | 'ru' | 'ua' | 'es']}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Fuel</TableCell>
                <TableCell>
                  {vehicle?.fuel[i18n.language as 'en' | 'ru' | 'ua' | 'es']}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Traction</TableCell>
                <TableCell>
                  {
                    vehicle?.traction[
                      i18n.language as 'en' | 'ru' | 'ua' | 'es'
                    ]
                  }
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Wheel</TableCell>
                <TableCell>
                  {vehicle?.wheel[i18n.language as 'en' | 'ru' | 'ua' | 'es']}
                </TableCell>
              </TableRow>
              {vehicle?.description && (
                <TableRow>
                  <TableCell>Description</TableCell>
                  <TableCell>{vehicle?.description}</TableCell>
                </TableRow>
              )}
              <TableRow>
                <TableCell>Tags</TableCell>
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

      <div className='flex flex-col gap-6 mb-10 xl:mb-0'>
        <div className='flex justify-between gap-10 items-center'>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant={'default'}
                className='h-fit text-lg lg:text-xl 2xl:text-2xl w-full font-semibold flex justify-center items-center p-3 m-0 gap-4'
              >
                <p>Order</p>
                <LuMessageSquarePlus className='size-4 lg:size-6' />
              </Button>
            </DialogTrigger>
            <OrderVehicle
              title={`${
                vehicle?.year
              } ${vehicle?.mark.toUpperCase()} ${vehicle?.model.toUpperCase()}`}
              price={Number(vehicle?.price)}
            />
          </Dialog>

          <h1 className='text-xl lg:text-2xl 2xl:text-3xl font-semibold'>
            ${vehicle?.price.toFixed(2)}
          </h1>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant={'outline'}
              className='bg-opacity-50 h-fit text-lg lg:text-xl 2xl:text-2xl w-full font-semibold flex justify-center items-center p-3 m-0 gap-4'
            >
              <p>Click To Negotiate</p>
              <GiReceiveMoney className='size-4 lg:size-6' />
            </Button>
          </DialogTrigger>
          <OrderVehicle
            title={`${
              vehicle?.year
            } ${vehicle?.mark.toUpperCase()} ${vehicle?.model.toUpperCase()}`}
            price={Number(vehicle?.price)}
            negotiate={true}
          />
        </Dialog>
      </div>
    </div>
  );
}

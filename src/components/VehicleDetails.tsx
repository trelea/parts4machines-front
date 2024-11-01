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
  console.log(vehicle);
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
                  Vehicle Details
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
                <TableCell className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 items-center justify-center'>
                  {vehicle?.tags.split(' ').map((t, _: number) => (
                    <Badge className='text-center w-full'>{t}</Badge>
                  ))}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </ScrollArea>
      </div>
      <div className='flex justify-between gap-10 items-center mb-10 xl:mb-0'>
        <Button className='h-fit text-xl lg:text-2xl 2xl:text-3xl w-full font-semibold'>
          Buy
        </Button>
        <h1 className='text-xl lg:text-2xl 2xl:text-3xl font-semibold'>
          ${vehicle?.price.toFixed(2)}
        </h1>
      </div>
    </div>
  );
}

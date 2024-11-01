import { ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode | JSX.Element | ReactElement;
}

export default function CardsContainer({ children }: Props) {
  return (
    <div className='grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 my-6'>
      {children}
    </div>
  );
}

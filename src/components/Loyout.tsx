import { ReactElement, ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
  children: ReactNode | JSX.Element | ReactElement;
}

export default function Loyout({ children }: Props) {
  return (
    <main className='w-full'>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

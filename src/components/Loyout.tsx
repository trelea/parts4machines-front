import { ReactElement, ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ScrollRestoration } from 'react-router-dom';
import { Toaster } from './ui/toaster';

interface Props {
  children: ReactNode | JSX.Element | ReactElement;
}

export default function Loyout({ children }: Props) {
  return (
    <main className='w-full'>
      <Navbar />
      {children}
      <Footer />
      <ScrollRestoration />
      <Toaster />
    </main>
  );
}

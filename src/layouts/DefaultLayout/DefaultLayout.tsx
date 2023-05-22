import { Inter, Poppins, Press_Start_2P } from '@next/font/google';
import type { ReactNode } from 'react';

import Footer from './Footer/Footer';
import Header from './Header/Header';

type IDefaultLayoutProps = {
  meta: ReactNode;
  children: ReactNode;
};

const pepeFont = Press_Start_2P({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-pepe',
});

const poppinsFont = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-poppins',
});

const interFont = Inter({
  display: 'swap',
  variable: '--font-inter',
  subsets: ['latin'],
});

const DefaultLayout = (props: IDefaultLayoutProps) => {
  return (
    <div
      className={` ${poppinsFont.className} ${interFont.variable} ${pepeFont.variable} w-full text-gray-700 antialiased`}
      style={{
        background:
          'linear-gradient(359.06deg, #000000 20.66%, rgba(0, 0, 0, 0.76) 55.35%, #000000 94.67%)',
      }}
    >
      {props.meta}

      <div className="mx-auto">
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
};

export { DefaultLayout };

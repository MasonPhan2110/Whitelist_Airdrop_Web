import '../styles/global.css';

import { Web3ReactProvider } from '@web3-react/core';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

import { getLibrary } from '@/services/web3React';
import { store } from '@/redux/store';
import { Provider } from 'react-redux';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
        {getLayout(<Component {...pageProps} />)}
      </Web3ReactProvider>
    </Provider>
  );
};

export default MyApp;

import type { JsonRpcSigner, Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { Contract, ethers } from 'ethers';
import { isAddress } from 'ethers/lib/utils';

import { APP_NETWORKS_SUPPORT } from '@/constants/networks';

const POLLING_INTERVAL = 12000;
export const CHAIN_ID = Number(process.env.NEXT_PUBLIC_CHAIN_ID);
export type ConnectorNames = 'injected';

const injected = new InjectedConnector({ supportedChainIds: [CHAIN_ID, 97] });

export const getLibrary = (provider: any): ethers.providers.Web3Provider => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};

export const connectorsByName: Record<ConnectorNames, any> = {
  injected,
};

export function getSigner(
  library: Web3Provider,
  account: string
): JsonRpcSigner {
  return library?.getSigner(account).connectUnchecked();
}

// account is optional
function getProviderOrSigner(
  library: Web3Provider,
  account?: string
): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library;
}

export function getContract(
  address: string,
  ABI: any,
  library: Web3Provider,
  account?: string
): Contract {
  if (!isAddress(address)) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new Contract(
    address,
    ABI,
    getProviderOrSigner(library, account) as any
  );
}

export const setupNetwork = async (): Promise<boolean> => {
  if (!CHAIN_ID) {
    return false;
  }
  const provider = (window as any).ethereum;
  const networkInfo = (APP_NETWORKS_SUPPORT as any)[Number(CHAIN_ID)];
  if (provider) {
    try {
      await provider.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            ...(networkInfo.details || {}),
          },
        ],
      });
      return true;
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
};

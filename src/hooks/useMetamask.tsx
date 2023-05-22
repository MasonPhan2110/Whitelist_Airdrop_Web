import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { useCallback } from 'react';

import { connectorStorage } from '@/constants/common';
import type { ConnectorNames } from '@/services/web3React';
import { connectorsByName, setupNetwork } from '@/services/web3React';

const useMetamask = () => {
  const { activate, deactivate } = useWeb3React();
  const connectWallet = useCallback(
    (connectorName: ConnectorNames) => {
      const connector = connectorsByName[connectorName];

      if (connector) {
        activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await setupNetwork();
            if (hasSetup) {
              activate(connector).then(() => {
                window.localStorage.setItem(connectorStorage, connectorName);
              });
            } else {
              window.localStorage.removeItem(connectorStorage);
            }
          }
        }).then(() => {
          window.localStorage.setItem(connectorStorage, connectorName);
        });
      }
    },
    [activate]
  );

  const disconnectWallet = useCallback(() => {
    deactivate();

    window.localStorage.removeItem(connectorStorage);
  }, [deactivate]);

  return {
    connectWallet,
    disconnectWallet,
  };
};

export default useMetamask;

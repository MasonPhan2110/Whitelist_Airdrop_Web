import { useWeb3React } from '@web3-react/core';
import React from 'react';

import useMetamask from '@/hooks/useMetamask';

type Props = {
  txt?: string;
  className: string;
};
const ConnectWalletButton = (props: Props) => {
  const { className } = props;

  const { connectWallet, disconnectWallet } = useMetamask();
  const { account } = useWeb3React();
  const handleOnClick = () =>
    account ? disconnectWallet() : connectWallet('injected');

  return (
    <button className={className} onClick={handleOnClick} style={{padding:5}}>
       {account ? "DISCONNECT WALLET" : "CONNECT WALLET NOW"}
    </button>
  );
};

export default ConnectWalletButton;

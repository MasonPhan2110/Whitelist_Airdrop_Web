export const ENV_CHAIN_ID = Number(process.env.NEXT_PUBLIC_CHAIN_ID || 0);

export enum SupportedChainId {
  ETH = 4,
  ETH_MAINNET = 1,
}
export const LIST_NETWORK_RPC_MAINNET: any = {
  [SupportedChainId.ETH_MAINNET]:
    'https://mainnet.infura.io/v3/50f6131e95134c0fba1a009b561a31d9',
};

export const LIST_NETWORK_RPC_TESTNET: any = {
  [SupportedChainId.ETH]:
    'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
};

export const METAMASK_DEEPLINK = 'https://metamask.io/download';

export const METAMASK = 'metamask';

export const WALLET_CONNECT = 'walletConnect';

export const WALLET_TYPES = {
  METAMASK: 'metamask',
  WALLET_CONNECT: 'wallet connect',
};

export const ArbitrumOneMainnetChainIdDec = 42161;
export const EtherTestnetChainId = '0x4';
export const EtherTestnetChainIdDec = 4;

export const ARBITRUM_CHAIN_ID = 42161;
export const ARBITRUM_TESTNET_CHAIN_ID = 421613;
export const APP_NETWORKS_SUPPORT = {
  [ARBITRUM_CHAIN_ID]: {
    details: {
      chainId: `0x${(+ARBITRUM_CHAIN_ID).toString(16)}`,
      chainName: 'Arbitrum One Mainnet',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://arb1.arbitrum.io/rpc'],
      blockExplorerUrls: ['https://arbiscan.io/'],
    },
  },
  [ARBITRUM_TESTNET_CHAIN_ID]: {
    details: {
      chainId: `0x${(+ARBITRUM_TESTNET_CHAIN_ID).toString(16)}`,
      chainName: 'Arbitrum Goerli Testnet',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc'],
      blockExplorerUrls: ['https://goerli.arbiscan.io/'],
    },
  },
};

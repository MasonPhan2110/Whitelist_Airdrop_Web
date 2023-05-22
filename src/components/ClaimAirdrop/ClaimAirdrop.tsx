import { useWeb3React } from '@web3-react/core';
import { useState } from 'react';

import useMetamask from '@/hooks/useMetamask';
import { stripVal } from '@/utils/supportFunctions';

import { claim } from "./claim";

const ClaimAirdrop = () => {
  const { account, library } = useWeb3React();
  const { disconnectWallet } = useMetamask();
  const [tokenId, setTokenId] = useState<any>(0)
  const onClaimClick = async () => {
    await claim(tokenId, account, library)
    setTokenId("");
  }
  return (
    <>
      <div className="mt-28 w-full lg:mt-20">
        {account && (
          <div className="flex w-full items-center">
            {stripVal(account)}{' '}
            <div
              className="ml-4 max-h-[14px] max-w-[14px] cursor-pointer"
              onClick={disconnectWallet}
            >
              <img className="w-full" src="/assets/images/logout.svg" alt="" />
            </div>
          </div>
        )}
       
          <div className="flex">
          <input  value={tokenId===0?"":tokenId} onChange={(e) => {
          setTokenId(e.target.value )
        }
          } placeholder= "TokenId" style={{padding:5}} className="mr-5 mt-4 w-full rounded-[10px] bg-[#3D3D3D]/[0.8] py-2  text-white lg:py-3"></input>
            <button
              onClick={onClaimClick}
              disabled={!account || tokenId===0}
              className="mr-5 mt-4 w-full rounded-[10px] bg-[#3D3D3D]/[0.8] py-2 font-Inter font-bold text-white lg:py-3"
            >
              Claim Now
            </button>

          </div>
      </div>
    </>
  );
};

export default ClaimAirdrop;
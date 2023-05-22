import { useWeb3React } from '@web3-react/core';
import {  useState } from 'react';

import useMetamask from '@/hooks/useMetamask';

import { stripVal } from '@/utils/supportFunctions';
import { upgrade } from "./upgrade";

const UpgradeTier = () => {
  const { account, library } = useWeb3React();
  const { disconnectWallet } = useMetamask();
  const [tokenId, setTokenId] = useState<any>(0)
  const [tier, setTier] = useState<any>(-1)


  const onUpgradeClick = async () => {
    await upgrade(tokenId, tier, account, library)
    setTokenId("")
    setTier(-1)
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
            var value = e.target.value 
            setTokenId(value)
            }
            } placeholder= "TokenId" className="mr-5 mt-4 w-full rounded-[10px] bg-[#3D3D3D]/[0.8] py-2 text-white lg:py-3" style={{padding:5}}></input>
            <input  value={tier===-1?"":tier} onChange={(e) => {
            var value = e.target.value 
            setTier(value)
            }
            } placeholder= "Tier" className="mr-5 mt-4 w-full rounded-[10px] bg-[#3D3D3D]/[0.8] py-2 text-white lg:py-3" style={{padding:5}}></input>
            <button
              onClick={onUpgradeClick}
              disabled={!account||tokenId===0||tier===-1}
              className="mr-5 mt-4 w-full rounded-[10px] bg-[#3D3D3D]/[0.8] py-2 font-Inter font-bold text-white lg:py-3"
            >
              Upgrade Now
            </button>
          </div>
      </div>
    </>
  );
};

export default UpgradeTier;
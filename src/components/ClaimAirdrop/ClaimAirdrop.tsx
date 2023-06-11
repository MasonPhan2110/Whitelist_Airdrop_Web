import { useWeb3React } from '@web3-react/core';
import { useContext } from 'react';

import useMetamask from '@/hooks/useMetamask';
import { stripVal } from '@/utils/supportFunctions';
import { CheckClaimContext } from '@/hooks/Context/CheckClaimContext';
import { ClaimContext } from '@/hooks/Context/ClaimContext';

import ModalClaim from '../ModalClaim/ModalClaim';
import ModalResult from '../ModalResult/ModalResult';


const ClaimAirdrop = () => {
  const { account } = useWeb3React();
  const { disconnectWallet } = useMetamask();
  const checkClaimContext = useContext(CheckClaimContext);
  const claimContext = useContext(ClaimContext);
  // const onClaimClick = async () => {
  //   try{
  //     await claim(tokenId, account, library)
  //   } catch(error) {
  //     console.log(error);
  //   }
    
  //   setTokenId("");
  // }
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
            <button
              onClick={()=>checkClaimContext?.handleCheckClaim()}
              disabled={!account}
              className="mr-5 mt-4 w-full rounded-[10px] bg-[#3D3D3D]/[0.8] py-2 font-Inter font-bold text-white lg:py-3"
            >
              Claim Now
            </button>

          </div>
      </div>
      <ModalResult
        open={claimContext?.stateClaim.isOpenModal}
        onClose={() => {
          claimContext.setStateClaim((prev) => ({
            ...prev,
            isOpenModal: false,
          }));
        }}
      />
      <ModalClaim
        open={checkClaimContext?.stateCheckClaim.isOpenModal}
        onClose={() => {
          checkClaimContext.setStateCheckClaim((prev) => ({
            ...prev,
            isOpenModal: false,
          }));
        }}
      />
    </>
  );
};

export default ClaimAirdrop;
import React, { useContext } from 'react';

import { CheckClaimContext, ClaimModalType } from '@/hooks/Context/CheckClaimContext';
import { useWeb3React } from '@web3-react/core';
import { ClaimContext } from '@/hooks/Context/ClaimContext';
import { createDataClaim } from '@/firebase/UpdateDB';
import { ethers } from 'ethers';
import { useSelector } from 'react-redux';
import ReactPortal from '../Portal/Portal';
import { selectType } from '../../redux/store'


type Props = {
  open: boolean | undefined;
  onClose: () => void;
};

const ModalClaim = ({ open, onClose }: Props) => {
  const type = useSelector(selectType)
  const { stateCheckClaim, setStateCheckClaim } = useContext(CheckClaimContext);
  const { account } = useWeb3React();
  const { modalType } = stateCheckClaim;
  const claimContext = useContext(ClaimContext);
  const handleParentClick = (event: any) => {
    event.preventDefault();
    onClose();
  };

  const handleChildClick = (event: any) => {
    event.stopPropagation();
  };
  const handlClaimClick = async () => {
    setStateCheckClaim((prev) => ({
      ...prev,
      isOpenModal: false,
      modalType: ClaimModalType.LOADING,
      imageURL: '',
    }));

    const amountNumber = Number(ethers.utils.formatEther(stateCheckClaim.amount))
    const id = await createDataClaim(account!,amountNumber)
    
    claimContext?.handleClaim(type === 'seed' ? 0 : 1, id,stateCheckClaim.amount);
  }

  const render = () => {
    switch (modalType) {
      case 'loading':
        return (
          <div>
            <img className="spinning" src="/assets/images/loading.png" alt="" />
          </div>
        );
      case 'seed':
        return (
          <div className="modal " onClick={handleChildClick} style={{backgroundColor:'rgb(0,0,50)', padding: 50}}>
            <div className="min-h-[300px]">
              <img style={{height:300, width:300, display:'revert'}} src={stateCheckClaim.imageURL || ''} alt="" />
            </div>
            <p className="mt-8 font-extrabold text-white lg:text-4xl">
              ELIGIBLE WALLET
            </p>
            <br />
            <p className="my-8 text-white lg:text-base">
              {account}
            </p>
            <p className="text-white lg:text-xl">
              Congrats! you are a Seed User.
            </p>
            <p className="text-white lg:text-xl">
              You will be able to claim 1000 MIRL Tokens per Month
            </p>
            <p className="mt-8 text-white lg:text-xl">
              Reward: {ethers.utils.formatEther(stateCheckClaim.amount)} MIRL
            </p>
            <button className="mt-8 rounded-[10px] bg-[#13aa52] px-4 py-2 font-bold text-white"
              disabled = {stateCheckClaim.amount === "0"}
              onClick = {handlClaimClick} >
              Claim Airdrop
            </button>
          </div>
        );
        case 'private':
          return(
            <div className="modal " onClick={handleChildClick} style={{backgroundColor:'rgb(0,0,50)', padding: 50}}>
              <div className="min-h-[342px]">
                <img style={{height:300, width:300, display:'revert'}}src={stateCheckClaim.imageURL || ''} alt="" />
              </div>
              <p className="mt-8 font-extrabold text-white lg:text-4xl">
              ELIGIBLE WALLET
              </p>
              <br />
              <p className="my-8 text-white lg:text-base">
                {account}
              </p>
              <p className="text-white lg:text-xl">
              Congrats! you are a Private User.
              </p>
              <br />
              <p className="text-white lg:text-xl">
                You will be able to claim 2000 MIRL Tokens per Month
              </p>
              <p className="mt-8 text-white lg:text-xl">
              Reward: {ethers.utils.formatEther(stateCheckClaim.amount)} MIRL
              </p>
              <button className="mt-8 rounded-[10px] bg-[#13aa52] px-4 py-2 font-bold text-white"
                disabled = {stateCheckClaim.amount === "0"}
                onClick = {handlClaimClick} >
                Claim Airdrop
              </button>
            </div>
          );
        case 'other':
          return(
              <div className="modal " onClick={handleChildClick} style={{backgroundColor:'rgb(0,0,50)', padding: 50}}>
                <div className="min-h-[342px]">
                  <img style={{height:300, width:300, display:'revert'}}src={stateCheckClaim.imageURL || ''} alt="" />
                </div>
                <p className="mt-8 font-extrabold text-white lg:text-4xl">
                  INELIGIBLE WALLET
                </p>
                <br />
                <p className="my-8 text-white lg:text-base">
                  {account}
                </p>
                <p className="text-white lg:text-xl">
                  This wallet hasn&apos;t executed any of the required actions to earn an Airdrop
                </p>
                <br />
                <p className="text-white lg:text-xl">
                  Learn more about the airdrop distribution <a href="cat photos.">here</a>
                </p>
              </div>
          );
        default:
          return <></>;
    }
  };

  if (!open) {
    return null;
  }

  return (
    <ReactPortal>
      <div className="modal-overlay" onClick={handleParentClick}>
        {render()}
      </div>
    </ReactPortal>
  );
};

export default ModalClaim;
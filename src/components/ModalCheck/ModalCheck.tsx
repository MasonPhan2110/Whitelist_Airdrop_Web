import React, { useContext } from 'react';

import { CheckContext } from '@/hooks/Context/CheckContext';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';
import ReactPortal from '../Portal/Portal';


type Props = {
  open: boolean | undefined;
  onClose: () => void;
  address: string
};

const ModalCheck = ({ open, onClose, address }: Props) => {
  const { stateCheck } = useContext(CheckContext);
  const { account } = useWeb3React();
  const { modalType } = stateCheck;
  const handleParentClick = (event: any) => {
    event.preventDefault();
    onClose();
  };

  const handleChildClick = (event: any) => {
    event.stopPropagation();
  };

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
              <img style={{height:300, width:300, display:'revert'}} src={stateCheck.imageURL || ''} alt="" />
            </div>
            <p className="mt-8 font-extrabold text-white lg:text-4xl">
              ELIGIBLE WALLET
            </p>
            <br />
            <p className="my-8 text-white lg:text-base">
              {address}
            </p>
            <p className="text-white lg:text-xl">
              This is a Seed User.
            </p>
            {stateCheck.amount === "0" ? 
                <p className="mt-8 text-white lg:text-xl">
                  This wallet already claimed this month
                </p> :
                <div>
                  <p className="text-white lg:text-xl">
                  This wallet will be able to claim {Number(ethers.utils.formatEther(stateCheck.amount))} tokens
                  </p>
                </div>
              }
          </div>
        );
        case 'private':
          return(
            <div className="modal " onClick={handleChildClick} style={{backgroundColor:'rgb(0,0,50)', padding: 50}}>
              <div className="min-h-[342px]">
                <img style={{height:300, width:300, display:'revert'}}src={stateCheck.imageURL || ''} alt="" />
              </div>
              <p className="mt-8 font-extrabold text-white lg:text-4xl">
              ELIGIBLE WALLET
              </p>
              <br />
              <p className="my-8 text-white lg:text-base">
                {address}
              </p>
              <p className="text-white lg:text-xl">
              This is a Private User.
              </p>
              <br />
              
              
              {stateCheck.amount === "0" ? 
                <p className="mt-8 text-white lg:text-xl">
                   This wallet already claimed this month
                </p> :
                <div>
                  <p className="text-white lg:text-xl">
                  This wallet will be able to claim {stateCheck.amount}
                  </p>
                </div>
              }
              
            </div>
          );
        case 'other':
          return(
              <div className="modal " onClick={handleChildClick} style={{backgroundColor:'rgb(0,0,50)', padding: 50}}>
                <div className="min-h-[342px]">
                  <img style={{height:300, width:300, display:'revert'}}src={stateCheck.imageURL || ''} alt="" />
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

export default ModalCheck;
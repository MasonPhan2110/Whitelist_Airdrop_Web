import { useWeb3React } from '@web3-react/core';
import type { Dispatch, ReactNode, SetStateAction} from 'react';
import { useState, createContext } from 'react';
import { getContract } from '@/services/web3React';
import ContractCollection from '@/abi/ContractCollection.json';
import { claimReward, deleteDataClaim } from '@/firebase/UpdateDB';
import getSignature from "@/utils/getSignature"
import { ethers } from 'ethers';

type Props = {
  children: ReactNode;
};

export enum PopupType {
  FAIL = 'fail',
  SUCCEED = 'succeed',
  LOADING = 'loading',
}

interface IClaimContext {
  stateClaim: IStateClaim;
  setStateClaim: Dispatch<SetStateAction<IStateClaim>>;
  handleClaim: (type: number,internalId: string, amount: string) => Promise<void>;
}

interface IStateClaim {
  isOpenModal: boolean;
  modalType: PopupType;
  imageURL: string;
}

export const ClaimContext = createContext<IClaimContext>({
  stateClaim: {
    isOpenModal: false,
    modalType: PopupType.LOADING,
    imageURL: '',
  },
  setStateClaim: () => {},
  handleClaim: async () => {},
});

export const ClaimContextProvider = ({ children }: Props) => {
  const [stateClaim, setStateClaim] = useState<IStateClaim>({
    isOpenModal: false,
    modalType: PopupType.LOADING,
    imageURL: '',
  });

  const { account, library } = useWeb3React();

  const handleClaim = async (type: number,internalId: string, amount: string) => {
    console.log("abc");
    
    setStateClaim((prev) => ({
      ...prev,
      isOpenModal: true,
      modalType: PopupType.LOADING,
      imageURL: '',
    }));
    if (!account) return;
    try{
      // get Signature
      const signature = await getSignature(internalId, type, amount, account);
      console.log(signature);
      
      // Call to Blockchain
      const contract = getContract(
        process.env.NEXT_PUBLIC_CONTRACT || '',
        ContractCollection,
        library,
        account
      );
      
      const transactionResponse = await contract?.claimAirdrop(internalId, type, amount, signature);
      await transactionResponse.wait();
      
      console.log(transactionResponse);
      
      // Change the data on database
      const amountNumber = Number(ethers.utils.formatEther(amount))
      await claimReward(account, amountNumber)

      setStateClaim((prev) => ({
        ...prev,
        isOpenModal: true,
        modalType: PopupType.SUCCEED,
        imageURL: "/assets/images/check.png",
      }));
      
    } catch(error) {
      await deleteDataClaim(internalId);
      setStateClaim((prev) => ({
        ...prev,
        isOpenModal: true,
        modalType: PopupType.FAIL,
        imageURL: "/assets/images/wrong.png",
      }));
      console.log(error);
    }
    
  };

  return (
    <ClaimContext.Provider value={{ stateClaim, setStateClaim, handleClaim }}>
      {children}
    </ClaimContext.Provider>
  );
};
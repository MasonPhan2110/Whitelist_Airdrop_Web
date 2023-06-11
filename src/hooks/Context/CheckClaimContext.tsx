import { useWeb3React } from '@web3-react/core';
import type { Dispatch, ReactNode, SetStateAction} from 'react';
import { useState, createContext } from 'react';
import { db } from '@/firebase/clientApp';
import { doc, getDoc } from "firebase/firestore";
import { calCulateReward } from '@/utils/calculateReward';
import { useDispatch } from 'react-redux';
import { setType } from '../../redux/slices/checkClaimSlice'

type Props = {
  children: ReactNode;
};

export enum ClaimModalType {
  SEED = 'seed',
  PRIVATE = 'private',
  OTHER = 'other',
  LOADING = 'loading',
}

interface IClaimContext {
  stateCheckClaim: IStateClaim;
  setStateCheckClaim: Dispatch<SetStateAction<IStateClaim>>;
  handleCheckClaim: () => Promise<void>;
}

interface IStateClaim {
  isOpenModal: boolean;
  modalType: ClaimModalType;
  imageURL: string;
  amount: string;
}

export const CheckClaimContext = createContext<IClaimContext>({
  stateCheckClaim: {
    isOpenModal: false,
    modalType: ClaimModalType.LOADING,
    imageURL: '',
    amount: '0'
  },
  setStateCheckClaim: () => {},
  handleCheckClaim: async () => {},
});

export const CheckClaimContextProvider = ({ children }: Props) => {
  const dispatch = useDispatch();
  const [stateCheckClaim, setStateCheckClaim] = useState<IStateClaim>({
    isOpenModal: false,
    modalType: ClaimModalType.LOADING,
    imageURL: '',
    amount: '0'
  });

  const { account } = useWeb3React();

  const handleCheckClaim = async () => {
    setStateCheckClaim((prev) => ({
      ...prev,
      isOpenModal: true,
      modalType: ClaimModalType.LOADING,
      imageURL: '',
    }));
    if (!account) return;
    try{
      const docRef = doc(db, "Users",account);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        const data = docSnap.data()
        const {type} = data;
        dispatch(setType(type));
        const reward = calCulateReward(type,data.lastClaim.seconds);
        setStateCheckClaim((prev) => ({
          ...prev,
          amount: reward.toString()
        }))
        
        if (type === 'seed') {
          setStateCheckClaim((prev) => ({
            ...prev,
            isOpenModal: true,
            modalType: ClaimModalType.SEED,
            imageURL: "/assets/images/check.png",
          }));
        } else if (type === 'private') {
          setStateCheckClaim((prev) => ({
            ...prev,
            isOpenModal: true,
            modalType: ClaimModalType.PRIVATE,
            imageURL: "/assets/images/check.png",
          }));
        } else {
          setStateCheckClaim((prev) => ({
            ...prev,
            isOpenModal: true,
            modalType: ClaimModalType.OTHER,
            imageURL: "/assets/images/wrong.png",
          }));
        }
      } else {
        // docSnap.data() will be undefined in this case
        setStateCheckClaim((prev) => ({
          ...prev,
          isOpenModal: true,
          modalType: ClaimModalType.OTHER,
          imageURL: "/assets/images/wrong.png",
        }));
      }
      
    } catch(error) {
      setStateCheckClaim((prev) => ({
        ...prev,
        isOpenModal: false,
        modalType: ClaimModalType.LOADING,
        imageURL: '',
      }));
      console.log(error);
    }
  };

  return (
    <CheckClaimContext.Provider value={{ stateCheckClaim, setStateCheckClaim, handleCheckClaim }}>
      {children}
    </CheckClaimContext.Provider>
  );
};
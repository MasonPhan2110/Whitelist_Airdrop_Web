import type { Dispatch, ReactNode, SetStateAction} from 'react';
import { useState, createContext } from 'react';
import { calCulateReward } from '@/utils/calculateReward';
import { useDispatch } from 'react-redux';
import { checkUserInWhitelist } from '@/firebase/getData';
import { setType } from '../../redux/slices/checkClaimSlice'

type Props = {
  children: ReactNode;
};

export enum CheckModalType {
  SEED = 'seed',
  PRIVATE = 'private',
  OTHER = 'other',
  LOADING = 'loading',
}

interface IClaimContext {
  stateCheck: IStateClaim;
  setStateCheck: Dispatch<SetStateAction<IStateClaim>>;
  handleCheck: (address: string) => Promise<void>;
}

interface IStateClaim {
  isOpenModal: boolean;
  modalType: CheckModalType;
  imageURL: string;
  amount: string;
}

export const CheckContext = createContext<IClaimContext>({
  stateCheck: {
    isOpenModal: false,
    modalType: CheckModalType.LOADING,
    imageURL: '',
    amount: '0'
  },
  setStateCheck: () => {},
  handleCheck: async ()  => {},
});

export const CheckContextProvider = ({ children }: Props) => {
  const dispatch = useDispatch();
  const [stateCheck, setStateCheck] = useState<IStateClaim>({
    isOpenModal: false,
    modalType: CheckModalType.LOADING,
    imageURL: '',
    amount: '0'
  });

  const handleCheck = async (address: string) => {
    setStateCheck((prev) => ({
      ...prev,
      isOpenModal: true,
      modalType: CheckModalType.LOADING,
      imageURL: '',
    }));
    try{
      const docSnap = await checkUserInWhitelist(address);
      
      if (docSnap.exists()) {
        const data = docSnap.data()
        const {type} = data;
        console.log(type);
        
        dispatch(setType(type));
        const reward = calCulateReward(type,data.lastClaim.seconds);
        setStateCheck((prev) => ({
          ...prev,
          amount: reward.toString()
        }))
        
        if (type === 'seed') {
          setStateCheck((prev) => ({
            ...prev,
            isOpenModal: true,
            modalType: CheckModalType.SEED,
            imageURL: "/assets/images/check.png",
          }));
        } else if (type === 'private') {
          
          setStateCheck((prev) => ({
            ...prev,
            isOpenModal: true,
            modalType: CheckModalType.PRIVATE,
            imageURL: "/assets/images/check.png",
          }));
        } else {
          setStateCheck((prev) => ({
            ...prev,
            isOpenModal: true,
            modalType: CheckModalType.OTHER,
            imageURL: "/assets/images/wrong.png",
          }));
        }
      } else {
        // docSnap.data() will be undefined in this case
        setStateCheck((prev) => ({
          ...prev,
          isOpenModal: true,
          modalType: CheckModalType.OTHER,
          imageURL: "/assets/images/wrong.png",
        }));
      }
      
    } catch(error) {
      setStateCheck((prev) => ({
        ...prev,
        isOpenModal: false,
        modalType: CheckModalType.LOADING,
        imageURL: '',
      }));
      console.log(error);
    }
  };

  return (
    <CheckContext.Provider value={{ stateCheck, setStateCheck, handleCheck }}>
      {children}
    </CheckContext.Provider>
  );
};
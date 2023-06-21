import { useContext, useState } from 'react';

import { CheckContext } from '@/hooks/Context/CheckContext';

import ModalCheck from '../ModalCheck/ModalCheck';


const CheckCanClaim = () => {
  const checkContext = useContext(CheckContext);
  const [address, setAddress] = useState<string>("")
  return (
    <>
      <div className="mt-28 w-full lg:mt-20">      
          <div className="flex">
            <input placeholder='Wallet Address' style={{padding: 5}} className='mr-5 mt-4 w-full rounded-[10px] bg-[#3D3D3D]/[0.8] py-2 text-white lg:py-3' onChange={(e)=> {
              setAddress(e.target.value)
            }}></input>
            <button
              onClick={()=>checkContext?.handleCheck(address)}
              className="mr-5 mt-4 w-full rounded-[10px] bg-[#3D3D3D]/[0.8] py-2 font-Inter font-bold text-white lg:py-3"
            >
              Check
            </button>

          </div>
      </div>
      <ModalCheck
        address={address}
        open={checkContext?.stateCheck.isOpenModal}
        onClose={() => {
          checkContext.setStateCheck((prev) => ({
            ...prev,
            isOpenModal: false,
          }));
        }}
      />
    </>
  );
};

export default CheckCanClaim;
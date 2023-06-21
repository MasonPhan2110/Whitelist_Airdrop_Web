import { SECTION_ID } from '@/constants/common';

import { ClaimContextProvider } from '@/hooks/Context/ClaimContext';
import { CheckContextProvider } from '@/hooks/Context/CheckContext';
import CheckCanClaim from '../CheckClaim/CheckCanClaim';

const ClaimAirdropSection = () => {

  return (
    <CheckContextProvider>
      <ClaimContextProvider>
      <section
        id={SECTION_ID.CHECK}
        className="relative h-full bg-cover  bg-no-repeat py-28"
        style={{ backgroundColor: "rgb(0,0,50)" }}
      > 
        <div className="container">
        <h1
            className="text-center font-pepe text-2xl text-white lg:text-5xl"
            style={{ textShadow: '-1.78967px 2.38622px 0px #0043C4' }}
          >
            Check In Whitelist
          </h1>
          
            <div className="relative mt-20 hidden lg:block">
              
              <div className="container relative">
                <div className="absolute left-1/2 top-1/2  w-[862px] -translate-x-1/2 -translate-y-1/2">
                  <CheckCanClaim />
                </div>
              </div>
            </div>
          
        </div>
      </section>
      </ClaimContextProvider>
    </CheckContextProvider>
  );
};

export default ClaimAirdropSection;

import React from 'react';

import { SECTION_ID } from '@/constants/common';
import UpgradeTier from '../UpgradeTier/UpgradeTier';

const UpgradeTierSection = () => {
  return (
    <section id={SECTION_ID.UPGRADE} className="relative" style={{ backgroundColor: "rgb(0,0,50)", paddingBottom:60, paddingTop: 200 }}>
      <div className=" bg-cover bg-center bg-no-repeat pt-20">
        <div className="container ">
          <h1
            className="text-center font-pepe text-2xl text-white lg:text-5xl"
            style={{ textShadow: '-1.78967px 2.38622px 0px #0043C4' }}
          >
            Upgrade Tier
          </h1>
        </div>
      </div>
      <div className=" bg-cover bg-center bg-no-repeat py-20">
        <div className="container relative">
          <div className="absolute left-1/2 top-1/2  w-[862px] -translate-x-1/2 -translate-y-1/2">
            <UpgradeTier />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpgradeTierSection;

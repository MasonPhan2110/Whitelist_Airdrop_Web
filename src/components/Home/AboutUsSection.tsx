import React from 'react';

import { SECTION_ID } from '@/constants/common';

const AboutUsSection = () => {
  return (
    <section
      id={SECTION_ID.ABOUT}
      className="relative  bg-cover  bg-no-repeat lg:flex lg:min-h-screen lg:items-center"
      style={{ backgroundColor: "rgb(0,0,50)" }}
    >
      <div className="container relative py-32  lg:mx-auto lg:max-w-[646px] ">
        <h1
          className="font-pepe text-2xl text-white  lg:text-4xl"
          style={{ textShadow: '-1.78967px 2.38622px 0px #0043C4' }}
        >
          About
        </h1>
        <p className="mt-12 text-white lg:text-xl">
          This is a Project for VIKOISOFT interview. You can claim Vik as a reward if you hold eVik NFT. The reward amount according to the following rule Super Rare NFT is x5, Rare is x2 and Normal is x1.
        </p>
        <br />
        <p className="mt-12 text-white lg:text-xl">
          And you can upgrade the tier of your NFT by Vik. If you want to ugrade your NFT to  Super Rare, you need to pay 50 Vik for Rare and 60 Vik for Normal.
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;

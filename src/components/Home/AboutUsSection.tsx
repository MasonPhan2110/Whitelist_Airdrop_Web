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
          This is a Project for DayOne interview. You can claim airdrop if you is Seed or Private User.
        </p>
        <br />
        <p className="mt-12 text-white lg:text-xl">
          If you in Seed list, you can claim 1000 MIRL tokens per month, otherwise, if you in Private list you can claim 2000 MIRL tokens per month
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;

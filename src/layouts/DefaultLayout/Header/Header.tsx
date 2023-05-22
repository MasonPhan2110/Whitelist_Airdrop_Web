import Link from 'next/link';
import React from 'react';

import { LIST_NAV } from './constants/common';
import MenuDropdown from './MenuDropdown/MenuDropdown';
import ConnectWalletButton from '../../../components/ConnectWalletButton';


const Header = () => {
  const scrollIntoView = (id: string) => {
    document.getElementById(id)?.scrollIntoView();
  };
  return (
    <header className="fixed z-10 w-full bg-header py-6 backdrop-blur">
      <div className="container flex items-center justify-between ">
        <div>
          <Link href="/" className="border-none ">
            <h3 className="font-pepe">
              <span >Claim Airdrop</span> <br />
            </h3>
          </Link>
        </div>
        <nav className="hidden w-full flex-1 lg:block">
          <ul className="flex flex-wrap justify-center text-xl">
            {LIST_NAV.map((item) => {
              return (
                <li className="mx-10" key={item.label}>
                  <Link
                    onClick={() => {
                      scrollIntoView(item.href);
                    }}
                    href={item.href}
                    className="border-none text-lg font-semibold text-white  opacity-50 hover:opacity-100"
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center">
            <ConnectWalletButton className="mt-4 w-full rounded-[10px] bg-[#38A0F0] py-2 font-Inter font-bold text-white lg:py-3"/>
          <MenuDropdown />
        </div>
      </div>
    </header>
  );
};

export default Header;

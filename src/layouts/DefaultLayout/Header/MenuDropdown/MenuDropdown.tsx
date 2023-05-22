import React, { useState } from 'react';

import { LIST_NAV } from '../constants/common';

const MenuDropdown = () => {
  const [isShow, setIsShow] = useState(false);
  const scrollIntoView = (id: string) => {
    document.getElementById(id)?.scrollIntoView();
    setIsShow(false);
  };
  return (
    <div className="relative ml-3 flex lg:hidden">
      <button
        className="h-10 w-10"
        onClick={() => {
          setIsShow((prev) => !prev);
        }}
      >
        <img
          className="relative h-full w-full"
          src="/assets/images/options.svg"
          alt=""
        />
      </button>
      {isShow && (
        <div className="absolute right-1 top-16 z-10 min-w-[180px]">
          <ul>
            {LIST_NAV.map((item) => (
              <li key={item.label} className="break-keep text-right">
                <a
                  onClick={() => {
                    scrollIntoView(item.href);
                  }}
                  href={item.href}
                  className="text-lg text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;

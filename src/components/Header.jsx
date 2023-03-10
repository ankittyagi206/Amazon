import Image from "next/image";
import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header>
      {/* Tope header */}
      <div className="flex items-center bg-amazon_blue p-1  flex-grow px-4 py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            style={{ objectFit: "contain" }}
            className="cursor-pointer px-4"
            alt="amazon_logo"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center h-10  bg-yellow-400  hover:bg-yellow-500  rounded-md flex-grow  cursor-pointer">
          <input
            type="text"
            className="p-4 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
          />
          <MagnifyingGlassIcon className="h-12 p-4 font-bold cursor-pointer " />
        </div>

        <div className="flex text-white items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link ">
            <p>Hello Ankit Tyagi</p>
            <p className="font-extrabold md:text-sm">Accounts & Lists</p>
          </div>
          <div className="link ">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="flex items-center link relative">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 rounded-lg text-center text-black font-bold">
              0
            </span>
            <ShoppingCartIcon className="link h-10 " />
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* bottom nav */}
      <div className="space-x-3 p-2 pl-6 flex items-center bg-amazon_blue-light text-white test-xs">
        <p className="link flex items-center">
          <Bars3Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link"> Amazon Business</p>
        <p className="link"> Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
      </div>
    </header>
  );
};

export default Header;

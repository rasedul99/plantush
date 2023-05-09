"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FiSearch,
  FiUser,
  FiInstagram,
  FiLinkedin,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleHambarger = () => {
    setShow(!show);
  };
  const menuItems = [
    { title: "Home", link: "/home", Icon: BiChevronDown },
    { title: "About Us", link: "/aboutus" },
    { title: "Pages", link: "/pages", Icon: BiChevronDown },
    { title: "Product", link: "/product" },
    { title: "Blog", link: "/blog" },
    { title: "Contact Us", link: "/contactus" },
  ];
  return (
    <nav>
      <div className="max-w-7xl mx-2 md:mx-auto my-6 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-x-[60px]">
          <div className="bg-primary p-4 w-[50px] rounded-tl-[10px] rounded-br-[10px]">
            <FiSearch size={20} className="text-white " />
          </div>

          <ul className="hidden md:flex gap-x-10  text-lg font-poppins font-medium">
            {menuItems.slice(0, 3).map((item, index) => (
              <li
                className="cursor-pointer font-poppins font-medium text-lg"
                key={index}
              >
                <Link href={item.link} className="flex  gap-x-2">
                  {item.title}
                  {item.Icon && (
                    <span>
                      <item.Icon />
                    </span>
                  )}
                </Link>{" "}
              </li>
            ))}
          </ul>
        </div>

        <RxHamburgerMenu
          onClick={handleHambarger}
          size={20}
          className="md:hidden "
        />

        <img src="/assets/images/logo.png" className="mx-3 " />

        <div className="flex justify-center gap-x-[60px]">
          <ul className="hidden  md:flex items-center gap-x-10  text-lg font-poppins font-medium">
            {menuItems.slice(3).map((item, index) => (
              <li
                className="cursor-pointer font-poppins font-medium text-lg"
                key={index}
              >
                <Link href={item.link} className="flex  gap-x-2">
                  {item.title}
                  {item.Icon && (
                    <span>
                      <item.Icon />
                    </span>
                  )}
                </Link>{" "}
              </li>
            ))}
          </ul>

          <div className="bg-primary p-4 w-[50px] rounded-tl-[10px] rounded-br-[10px]">
            <FiUser size={20} className="text-white " />
          </div>
        </div>
      </div>
      {show ? (
        <div className="absolute top-0 bottom-0 left-0 w-full z-10">
          <div className="flex">
            <div className=" w-3/5 bg-white  h-screen">
              <div className="px-1 py-2 flex justify-between items-center mt-1 shadow-md">
                <img src="/assets/images/logo.png" className="mx-3" />
                <RxCross2 size={20} onClick={handleHambarger} />
              </div>
              <div className="mx-2 flex justify-between  my-3">
                <FiFacebook size={20} />
                <FiTwitter size={20} />
                <FiInstagram size={20} />
                <FiLinkedin size={20} />
              </div>

              <div className="border border-green-500  flex items-center  gap-x-3 rounded-3xl m-2">
                <CiSearch size={20} className="mx-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none py-2 "
                />
              </div>
              <hr className="border-gray-200 border my-5 " />
              <div className="flex flex-col mx-2">
                <ul>
                  {menuItems.map((item, index) => (
                    <li
                      key={index}
                      className="py-5 font-poppins font-medium   hover:text-primary "
                    >
                      <Link href={item.link} className="flex justify-between ">
                        {item.title}
                        {item.Icon && (
                          <span>
                            <item.Icon />
                          </span>
                        )}
                      </Link>{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="w-2/5 h-screen bg-current opacity-50 "
              onClick={handleHambarger}
            ></div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;

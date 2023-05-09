import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiInstagram, FiLinkedin } from "react-icons/fi";
const Header = () => {
  return (
    <div className="hidden md:flex">
      <div className="bg-primary py-3 text-white font-poppins font-medium w-full">
        <div className="max-w-7xl mx-auto ">
          <div className=" flex justify-between items-center">
            <div className="flex gap-x-[22px]  ">
              <div className="flex gap-x-[6px] items-center">
                <img
                  src="/assets/icons/call.png"
                  className="w-[19px] h-[19px]"
                />
                <p className="text-lg">00440012345678 </p>
              </div>
              <div className="flex gap-x-[6px] items-center">
                <AiOutlineMail size={18} />
                <p className="text-lg">plantush@plantush.com</p>
              </div>
            </div>
            <div className="flex gap-x-[21px] ">
              <img
                src="/assets/icons/facebook.png"
                className="w-[10px] h-[18px]"
              />
              <img src="/assets/icons/twitter.png" className="w-5 h-4" />
              <FiInstagram size={18} />
              <FiLinkedin size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

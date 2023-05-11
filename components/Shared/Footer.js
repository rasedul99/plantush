import Link from "next/link";
import React from "react";
import { FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="px-2 w-full  mt-[130px] md:h-[655px] bg-primary md:bg-[url('/assets/images/footer/background.png')] bg-no-repeat bg-center bg-cover">
      <div className="py-5 md:py-[130px] max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:gap-x-[90px] md:grid-cols-3 lg:grid-cols-4 gap-y-2 text-white">
          <div>
            <Link href="/" className="flex justify-center md:justify-start">
              {" "}
              <img src="/assets/images/logo.png" className="" />
            </Link>

            <p className="font-poppins font-normal  my-10 text-justify text-primary6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed
              nulla eu dui suscipit ultricies. Mauris vestibulum volutpat nisl
              vel cursus. Cras finibus nec mauris tincidunt condimentum.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="mb-[42px] font-poppins font-semibold text-[25px] ">
              Link
            </h3>
            <ul className="flex flex-col gap-y-[10px] font-poppins font-normal ">
              <li className="">Home</li>
              <li className="">About Us</li>
              <li className="">Products</li>
              <li className="">Contact Us</li>
              <li className="">Blog</li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="mb-[42px] font-poppins font-semibold text-[25px] ">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-y-5">
              <li className="flex items-center gap-x-[15px]">
                <img src="/assets/icons/footer/address.png" alt="address" />
                <p>00440012345678</p>
              </li>
              <li className="flex items-center gap-x-[15px]">
                <img src="/assets/icons/footer/address.png" alt="address" />
                <p>plantush@plantush.com</p>
              </li>
              <li className="flex items-center gap-x-[15px]">
                <img src="/assets/icons/footer/address.png" alt="address" />
                <p>29 Washington Pl, New York, NY 10003, USA</p>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h3 className="mb-[42px] font-poppins font-semibold text-[25px] ">
              Stay In The Loop
            </h3>
            <p className="mb-[30px] font-poppins font-normal   text-justify">
              Stay in the loop with special offers,plant-parenting tips, and
              more.
            </p>
            <div className="border-b  pb-[10px] border-primary5 flex justify-between items-center font-poppins font-normal">
              {" "}
              <input
                type="text"
                placeholder="Your email address"
                className="outline-none bg-transparent  "
              />
              <img
                src="/assets/icons/email.png"
                className="w-[15px] h-[20px] bg-white"
              />
            </div>

            <div className="flex justify-center md:justify-start mt-10 gap-x-[10px]">
              <div className="bg-white text-primary py-4 px-5 rounded-tl-[10px] rounded-br-[10px]">
                {" "}
                <FiLinkedin size={18} />
              </div>
              <div className="bg-white text-primary py-4 px-5 rounded-tl-[10px] rounded-br-[10px]">
                <img
                  src="/assets/icons/email.png"
                  className="w-[22px] h-[18px]"
                />
              </div>
              <div className="bg-white text-primary py-4 px-5 rounded-tl-[10px] rounded-br-[10px]">
                <FiInstagram size={18} />
              </div>
              <div className="bg-white text-primary py-4 px-5 rounded-tl-[10px] rounded-br-[10px]">
                {" "}
                <FiLinkedin size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-between bg-primary2 pt-[27px] pb-[26px] px-[67px] rounded-tl-[40px] rounded-br-[40px]">
          <p className="text-white font-medium">
            Copyright & Design by Plantush-2022
          </p>
          <div className="flex flex-wrap gap-x-[9px] gap-y-[9px]">
            <img
              src="/assets/images/footer/express.png"
              alt="American express"
            />

            <img src="/assets/images/footer/payoneer.png" alt="payoneer" />
            <img src="/assets/images/footer/visa.png" alt="visa" />
            <img src="/assets/images/footer/mastercard.png" alt="mastercard" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

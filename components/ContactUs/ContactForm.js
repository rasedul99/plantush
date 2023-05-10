import Button from "@components/Shared/Button";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FiInstagram, FiLinkedin } from "react-icons/fi";

const ContactForm = () => {
  return (
    <div className="max-w-7xl mx-1 md:mx-auto my-[130px]">
      <h2 className="font-oswald mb-5 font-bold text-[40px] text-primary text-center md:text-left">
        Send Us A Message
      </h2>
      <hr className="border border-secondary5" />
      <div className="flex flex-col md:flex-row gap-x-[30px] ">
        <form className="basis-[70%]">
          <div className="grid  md:grid-cols-2  gap-x-[30px] gap-y-10 mt-10">
            <div className="border-b mb-5 border-primary5 flex items-center gap-x-[14px]  md:basis-1/2">
              {" "}
              <img src="/assets/icons/user.png" className="w-[15px] h-[20px]" />
              <input
                type="text"
                placeholder="Name"
                className="outline-none py-2 "
              />
            </div>
            <div className="border-b mb-5 border-primary5 flex items-center gap-x-[14px] md:basis-1/2">
              {" "}
              <img
                src="/assets/icons/email.png"
                className="w-[15px] h-[20px]"
              />
              <input
                type="email"
                placeholder="Email"
                className="outline-none py-2 "
              />
            </div>
            <div className="border-b mb-5 border-primary5 flex items-center gap-x-[14px] md:basis-1/2">
              {" "}
              <img src="/assets/icons/call.png" className="w-[15px] h-[20px]" />
              <input
                type="text"
                placeholder="Phone"
                className="outline-none py-2 "
              />
            </div>
            <div className="border-b  mb-5 border-primary5 flex items-center gap-x-[14px] md:basis-1/2">
              {" "}
              <img
                src="/assets/icons/website.png"
                className="w-[15px] h-[20px]"
              />
              <input
                type="text"
                placeholder="Website"
                className="outline-none py-2 "
              />
            </div>
            <div className="border-b pb-10 mt-[60px] border-primary5 flex items-center gap-x-[14px] md:basis-1/2">
              {" "}
              <img
                src="/assets/icons/massege.png"
                className="w-[15px] h-[20px]"
              />
              <input
                type="text"
                placeholder="message"
                className="outline-none py-2 "
              />
            </div>
          </div>

          {/* <textarea
          id="message"
          rows="4"
          class="block p-2.5 w-1/2  border-b border-[#D3DCD9] outline-none"
          placeholder="message..."
        ></textarea> */}
          <div className="mt-10 text-center md:text-left">
            {" "}
            <Button>Contact Us Now</Button>
          </div>
        </form>
        <div className="basis-[30%] flex flex-col gap-y-[30px] mt-10">
          <div className="flex border border-black4">
            <img
              src="/assets/icons/call.png"
              className="w-11 h-11 text-primary  mx-[38px] my-6"
            />

            <div className="border-l border-black4 my-2"></div>
            <div className="ml-6 my-[14px]">
              <p className="font-poppins font-semibold text-xl">
                Give Us a call
              </p>
              <p className="font-poppins font-medium text-lg">00440012345678</p>
            </div>
          </div>
          <div className="flex border border-black4">
            <img
              src="/assets/icons/email.png"
              className="w-11 h-11 text-primary  mx-[38px] my-6"
            />

            <div className="border-l border-black4 my-2"></div>
            <div className="ml-6 my-[14px]">
              <p className="font-poppins font-semibold text-xl">
                Send an email
              </p>
              <p className="font-poppins font-medium text-lg">
                plantush@plantush.com
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-x-6 py-[22px] border border-black4">
            <div className="bg-primary text-white py-4 px-5 rounded-tl-[10px] rounded-br-[10px]">
              {" "}
              <img
                src="/assets/icons/facebook.png"
                className="w-[22px] h-[18px] "
              />
            </div>
            <div className="bg-primary text-white py-4 px-5 rounded-tl-[10px] rounded-br-[10px]">
              <img
                src="/assets/icons/twitter.png"
                className="w-[22px] h-[18px]"
              />
            </div>
            <div className="bg-primary text-white py-4 px-5 rounded-tl-[10px] rounded-br-[10px]">
              <FiInstagram size={18} />
            </div>
            <div className="bg-primary text-white py-4 px-5 rounded-tl-[10px] rounded-br-[10px]">
              {" "}
              <FiLinkedin size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

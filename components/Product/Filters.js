import React from "react";

const Filters = () => {
  return (
    <div>
      <h3 className="font-poppins font-semibold text-3xl">Filters</h3>
      <div className="mt-[42px]">
        <div className="flex justify-between font-poppins font-semibold text-xl">
          <p>Color</p>
          <p>-</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-[10px] mt-5">
          <div className="bg-primary rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
          <div className="bg-[#426006] rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
          <div className="bg-secondary rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
          <div className="bg-[#B54B5E] rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
          <div className="bg-primary rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
          <div className="bg-[#426006] rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
          <div className="bg-[#5B1212] rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
          <div className="bg-[#2FF5AF] rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
          <div className="bg-[#D9D9D9] rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
          <div className="bg-[#A56021] rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
          <div className="bg-[#5B1212] rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
          <div className="bg-[#2FF5AF] rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
          <div className="bg-[#387FD3] rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
          <div className="bg-[#832368] rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
          <div className="bg-[#BFCB34] rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
          <div className="bg-[#387FD3] rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
          <div className="bg-[#832368] rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
          <div className="bg-[#5B1212] rounded-tl-[5px] rounded-br-[5px] w-10 h-10"></div>
        </div>

        <div className="mt-[30px]">
          <div className="flex justify-between font-poppins font-semibold text-xl">
            <p>Categories</p>
            <p>-</p>
          </div>

          <div className="mt-5 mb-[30px] font-poppins font-medium text-lg text-black3">
            <p className="text-primary">All</p>
            <p>Medium</p>
            <p>Small</p>
            <p>Tiny</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between font-poppins font-semibold text-xl">
            <p>Price</p>
            <p>-</p>
          </div>

          <div className="mt-5 mb-[30px] font-poppins font-medium text-lg text-black3">
            <p className="text-primary">All</p>
            <p>$00.00 - $10.00</p>
            <p>$10.00 - $20.00</p>
            <p>$20.00 - $30.00</p>
            <p>$30.00 - $40.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;

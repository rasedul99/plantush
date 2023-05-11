"use client";

import React from "react";

const TestimoialCard = ({ image, name, designation, review }) => {
  return (
    <div className="px-4 md:px-[34px] py-[45px]  rounded-tl-[60px] rounded-br-[60px] bg-primary">
      <div className="flex items-center gap-x-[9px]">
        <img src={image} alt={name} />
        <div className="flex flex-col">
          <h3 className="font-poppins font-semibold text-[25px] text-white">
            {name}
          </h3>
          <h2 className="font-poppins font-medium text-xl text-secondary">
            {designation}
          </h2>
        </div>
      </div>
      <p className=" font-poppins font-normal text-justify text-base text-primary5 mt-5 ">
        {review}
      </p>
    </div>
  );
};

export default TestimoialCard;

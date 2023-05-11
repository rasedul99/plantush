"use client";
import React from "react";
import CountUp from "react-countup";

const ExperienceCard = ({ icon, digit, title }) => {
  return (
    <div>
      <div className=" bg-primary md:bg-inherit border-solid md:border-dashed	border-2 border-white	 rounded-tl-[80px] rounded-br-[80px] py-8 md:py-[60px] flex flex-col items-center ]">
        <img
          src={icon}
          className="bg-white rounded-tl-[20px] rounded-br-[20px] p-2 md:p-[25px] "
        />
        <h3 className="font-poppins text-secondary font-bold text-base md:text-[35px] my-2 md:my-5">
          <CountUp end={digit} />
        </h3>
        <p className="font-poppins font-semibold text-white text-center  text-lg md:text-[25px] ">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ExperienceCard;

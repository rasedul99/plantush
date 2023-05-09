import React from "react";

const WorkProcessCard = ({ image, title, desc }) => {
  return (
    <div className="rounded-tl-[80px] rounded-br-[80px] px-[14px] py-[60px] flex flex-col items-center shadow-[0_10px_30px_0_rgba(0,0,0,0.1)] hover:border-b-[15px] hover:border-r-[15px] hover:border-secondary hover:transition-all">
      <img src={image} className="" />
      <h3 className="font-poppins font-semibold text-xl mt-5 mb-[10px]">
        {title}
      </h3>
      <p className="font-poppins font-normal text-gray">{desc}</p>
    </div>
  );
};

export default WorkProcessCard;

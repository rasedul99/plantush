import React from "react";

const TestimoialCard = ({ image, name, designation, comment }) => {
  return (
    <div className="px-[34px] py-[45px]  rounded-tl-[60px] rounded-br-[60px] bg-primary">
      <div className="flex items-center gap-x-[9px]">
        <img src="/assets/images/garden/user.png" alt="md" />
        <div className="flex flex-col">
          <h3 className="font-poppins font-semibold text-[25px] text-white">
            Albert John Bosh
          </h3>
          <h2 className="font-poppins font-medium text-xl text-secondary">
            Managing Director
          </h2>
        </div>
      </div>
      <p className="font-poppins font-normal text-justify text-base text-primary5 mt-5 ">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters,
      </p>
    </div>
  );
};

export default TestimoialCard;

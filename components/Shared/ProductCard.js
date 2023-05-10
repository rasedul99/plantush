import React from "react";

const ProductCard = ({ image, title, desc, price }) => {
  return (
    <div className="relative rounded-tl-[80px] rounded-br-[60px] px-5 pt-[20px] flex flex-col items-center shadow-[0_10px_30px_0_rgba(0,0,0,0.1)]">
      <img
        src={image}
        className="bg-[#F4F4F4] rounded-tl-[80px] rounded-br-[80px]"
      />
      <h3 className="font-poppins text-primary font-semibold text-xl mt-5 mb-[10px]">
        {title}
      </h3>
      <p className="font-poppins font-normal text-gray mt-[10px] mb-[60px]">
        {desc}
      </p>
      <button className="bg-secondary text-white  py-[10px]  rounded-br-[80px] w-full absolute bottom-0 font-poppins font-medium text-lg">
        ${price}
      </button>
    </div>
  );
};

export default ProductCard;

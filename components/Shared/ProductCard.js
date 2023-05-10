import React from "react";

const ProductCard = ({ image, title, desc, price }) => {
  return (
    <div className="relative group rounded-tl-[80px] rounded-br-[60px] px-5 pt-[20px] flex flex-col hover:bg-primary hover:transition-all items-center shadow-[0_10px_30px_0_rgba(0,0,0,0.1)]">
      <img
        src={image}
        className="bg-[#F4F4F4] rounded-tl-[80px] rounded-br-[80px]"
      />
      <h3 className=" font-poppins text-primary font-semibold text-xl mt-5 mb-[10px] group-hover:text-white ">
        {title}
      </h3>
      <p className="font-poppins font-normal text-gray mt-[10px] mb-[60px] text-center group-hover:text-black7">
        {desc}
      </p>
      <div className="absolute -top-4 -right-2 opacity-0 group-hover:opacity-100 py-10 px-[7px] bg-secondary rounded-tl-[20px] rounded-br-[20px]">
        <img
          src="/assets/icons/products/eye.png"
          alt="eye"
          className="bg-white py-4 px-[14px] rounded-tl-[10px] rounded-br-[10px] mb-5"
        />
        <img
          src="/assets/icons/products/cart.png"
          alt="cart"
          className="bg-white py-4 px-[14px] rounded-tl-[10px] rounded-br-[10px] "
        />
      </div>
      <button className="bg-secondary group-hover:bg-white group-hover:text-primary text-white  py-[10px]  rounded-br-[80px] w-full absolute bottom-0 font-poppins font-medium text-[25px] ">
        ${price}
      </button>
    </div>
  );
};

export default ProductCard;

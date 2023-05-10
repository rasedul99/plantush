import React from "react";
import Filters from "./Filters";

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto my-[130px]">
      <div className="flex">
        <div className="w-[20%]">
          <Filters />
        </div>

        <div className="w-[80%] flex items-start  justify-between">
          <button className=" font-poppins font-medium text-md text-dark3 flex items-center  gap-x-12 py-3 px-6 border border-primary rounded-tl-[20px] rounded-br-[20px]">
            <p>Show : 12</p>
            <img src="/assets/icons/products/arrowdown.png" />
          </button>

          <div className="flex items-center gap-x-[88px]">
            <div className="flex gap-x-5">
              <img
                src="/assets/icons/products/menu icon.png"
                className="bg-[#F4F4F4]  py-5 px-4 rounded-tl-[10px] rounded-br-[10px] "
              />

              <img
                src="/assets/icons/products/menu icon 2.png"
                className="bg-[#F4F4F4] py-5 px-4 rounded-tl-[10px] rounded-br-[10px]"
              />

              <img
                src="/assets/icons/products/menu icon 3.png"
                className="bg-primary py-5 px-4 rounded-tl-[10px] rounded-br-[10px]"
              />
            </div>

            <button className=" font-poppins font-medium text-md text-dark3 flex items-center  gap-x-[70px] py-3 px-6 border border-primary rounded-tl-[20px] rounded-br-[20px]">
              <p>Default sorting</p>
              <img src="/assets/icons/products/arrowdown.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

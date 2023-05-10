import React from "react";
import Filters from "./Filters";
import ProductCard from "@components/Shared/ProductCard";
import Button from "@components/Shared/Button";

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto my-[130px]">
      <div className="flex gap-x-12">
        <div className="w-[20%]">
          <Filters />
        </div>
        <div className="w-[80%]">
          <div className=" flex flex-col gap-y-5 md:flex-row items-start  justify-between">
            <button className="self-center md:self-start font-poppins font-medium text-md text-dark3 flex items-center  gap-x-12 py-3 px-6 border border-primary rounded-tl-[20px] rounded-br-[20px]">
              <p>Show : 12</p>
              <img src="/assets/icons/products/arrowdown.png" />
            </button>

            <div className="flex items-start gap-x-[88px]">
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

          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3 gap-x-[30px] mt-12">
            <ProductCard
              image="/assets/images/planthouse/one.png"
              title="Aliquam Quaerat"
              desc="Lorem ipsum dolor sit amet, consectetur adipi "
              price="20"
            />
            <ProductCard
              image="/assets/images/planthouse/two.png"
              title="Voluptas Assumenda"
              desc="Lorem ipsum dolor sit amet, consectetur adipi "
              price="20"
            />
            <ProductCard
              image="/assets/images/planthouse/three.png"
              title="Exercitat Virginia"
              desc="Lorem ipsum dolor sit amet, consectetur adipi "
              price="20"
            />
            <ProductCard
              image="/assets/images/planthouse/four.png"
              title="Exercitat Virginia"
              desc="Lorem ipsum dolor sit amet, consectetur adipi "
              price="20"
            />
            <ProductCard
              image="/assets/images/planthouse/one.png"
              title="Aliquam Quaerat"
              desc="Lorem ipsum dolor sit amet, consectetur adipi "
              price="20"
            />
            <ProductCard
              image="/assets/images/planthouse/two.png"
              title="Voluptas Assumenda"
              desc="Lorem ipsum dolor sit amet, consectetur adipi "
              price="20"
            />
            <ProductCard
              image="/assets/images/planthouse/three.png"
              title="Exercitat Virginia"
              desc="Lorem ipsum dolor sit amet, consectetur adipi "
              price="20"
            />
            <ProductCard
              image="/assets/images/planthouse/four.png"
              title="Exercitat Virginia"
              desc="Lorem ipsum dolor sit amet, consectetur adipi "
              price="20"
            />
            <ProductCard
              image="/assets/images/planthouse/one.png"
              title="Aliquam Quaerat"
              desc="Lorem ipsum dolor sit amet, consectetur adipi "
              price="20"
            />
          </div>
          <div className="mt-10 mb-[130px] text-center">
            <Button>Load More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

import React from "react";
import ProductCard from "../../Shared/ProductCard";

const PlantHouse = () => {
  return (
    <div className="max-w-7xl mx-3 md:mx-auto mt-[163px] mb-[50px]">
      <div className="flex justify-center items-center">
        <img src="/assets/images/aboutuslogo.png" />
        <p className="text-secondary font-poppins font-semibold text-xl">
          Our Plant House
        </p>
      </div>
      <h3 className="text-center text-primary font-oswald font-bold text-[40px]">
        Our Product
      </h3>

      {/* Plant house Product section */}

      <div className="grid grid-cols-1 gap-y-10 md:grid-cols-4 gap-x-[30px] mt-12">
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
      </div>

      {/* Plant house Product section end*/}
    </div>
  );
};

export default PlantHouse;

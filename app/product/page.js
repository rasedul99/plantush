import Products from "@components/Product/Products";
import Banner from "@components/Shared/Banner";
import React from "react";

const Product = () => {
  return (
    <div>
      <div className="w-full h-[400px]  bg-[url('/assets/images/banner/product.png')] bg-no-repeat bg-center bg-cover">
        <Banner title="Product" path="Home > Product" />
        <Products />
      </div>
    </div>
  );
};

export default Product;

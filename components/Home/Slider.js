"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SimpleSlider = () => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider {...settings} className="w-[490px]">
      <div className="bg-white py-5 px-4 rounded-tl-[40px] rounded-br-[40px]">
        {" "}
        <img src="/assets/images/slider/sliderone.png" />
      </div>
      <div className=" bg-white py-5 px-4 rounded-tl-[40px] rounded-br-[40px]">
        <img src="/assets/images/slider/sliderone.png" />
      </div>
      <div className=" bg-white py-5 px-4 rounded-tl-[40px] rounded-br-[40px]">
        <img src="/assets/images/slider/sliderone.png" />
      </div>
      <div className=" bg-white py-5 px-4 rounded-tl-[40px] rounded-br-[40px]">
        <img src="/assets/images/slider/sliderone.png" />
      </div>
      <div className=" bg-white py-5 px-4 rounded-tl-[40px] rounded-br-[40px]">
        <img src="/assets/images/slider/sliderone.png" />
      </div>
      <div className="bg-white py-5 px-4 rounded-tl-[40px] rounded-br-[40px]">
        <img src="/assets/images/slider/sliderone.png" />
      </div>
    </Slider>
  );
};

export default SimpleSlider;

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
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="w-[300px] md:w-[350px] lg:w-[470px]">
      <div className="bg-white  py-4 px-[6px] rounded-tl-[40px] rounded-br-[40px]">
        {" "}
        <img
          src="/assets/images/slider/sliderone.png"
          className="w-[110px] h-[104px]"
        />
      </div>
      <div className=" bg-white py-4 px-[6px] rounded-tl-[40px] rounded-br-[40px]">
        <img
          src="/assets/images/slider/slidertwo.png"
          className="w-[110px] h-[104px]"
        />
      </div>
      <div className=" bg-white py-4 px-[6px] rounded-tl-[40px] rounded-br-[40px]">
        <img
          src="/assets/images/slider/sliderthree.png"
          className="w-[110px] h-[104px]"
        />
      </div>
      <div className=" bg-white py-4 px-[6px] rounded-tl-[40px] rounded-br-[40px]">
        <img
          src="/assets/images/slider/sliderone.png"
          className="w-[110px] h-[104px]"
        />
      </div>
      <div className=" bg-white py-5 px-4 rounded-tl-[40px] rounded-br-[40px]">
        <img
          src="/assets/images/slider/slidertwo.png"
          className="w-[110px] h-[104px]"
        />
      </div>
      <div className="bg-white py-4 px-[6px] rounded-tl-[40px] rounded-br-[40px]">
        <img
          src="/assets/images/slider/sliderthree.png"
          className="w-[110px] h-[104px]"
        />
      </div>
    </Slider>
  );
};

export default SimpleSlider;

"use client";
import React from "react";
import TestimoialCard from "./TestimoialCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="mt-[122px] mb-[130px] max-w-7xl mx-2 md:mx-auto flex gap-x-[30px]">
      <div className="w-full md:w-2/3">
        <div className="flex  items-center">
          <img src="/assets/images/aboutuslogo.png" />
          <p className="text-secondary font-poppins font-semibold text-xl">
            Testimonials
          </p>
        </div>
        <h3 className="text-primary font-oswald font-bold text-[40px]">
          People Say About Us
        </h3>
        <p className="font-poppins font-normal px-1 my-10 text-justify text-gray">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
        </p>
        <Slider {...settings}>
          <TestimoialCard />
          <TestimoialCard />
          <TestimoialCard />
        </Slider>
      </div>
      <div className="hidden md:flex md:w-1/3 ">
        <img
          src="/assets/images/testimonial/worker.png"
          alt="worker"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Testimonials;

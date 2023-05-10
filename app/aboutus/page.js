import Banner from "@components/Shared/Banner";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="w-full h-[400px]  bg-[url('/assets/images/banner/aboutus.png')] bg-no-repeat bg-center bg-cover">
        <Banner title="About Us" path="Home > About Us" />
      </div>
    </div>
  );
};

export default AboutUs;

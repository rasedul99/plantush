import React from "react";
import SimpleSlider from "./Slider";

const Hero = () => {
  return (
    <div className="w-full h-[400px] md:h-[700px] bg-[url('/assets/images/homebackground.png')] bg-no-repeat bg-center bg-cover relative">
      <div className="max-w-7xl mx-auto">
        <div className="mx-2">
          <div>
            <img
              src="/assets/images/title.png"
              className="absolute top-[109px] w-[200px] md:w-[464px]"
            />
          </div>
          <div>
            <img
              src="/assets/images/pantush.png"
              className="w-[150px] md:w-[200px] lg:w-[487px] absolute top-[80px] left-0 right-0	mx-auto"
            />
          </div>
          <div className="absolute  bottom-14 right-16">
            <SimpleSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

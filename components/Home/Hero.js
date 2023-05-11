import React from "react";
import SimpleSlider from "./Slider";

const Hero = () => {
  return (
    <div className="w-full h-[400px] md:h-[700px] bg-[url('/assets/images/homebackground.png')] bg-no-repeat bg-center bg-cover">
      <div className="max-w-7xl mx-auto h-full">
        <div className="mx-2 h-full flex flex-col md:flex-row justify-evenly md:justify-between items-center ">
          
          <div className="md:w-[70%] flex justify-between">
            <div>
              <img
                src="/assets/images/title.png"
                className="w-[200px] md:w-[464px]"
              />
            </div>
            <div>
              <img
                src="/assets/images/pantush.png"
                className="w-[200px]  md:w-[487px]"
              />
            </div>
          </div>

          {/* Slider section using slick-carousel */}
          <div className="md:w-[30%] md:mt-[35%] ">
            <SimpleSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

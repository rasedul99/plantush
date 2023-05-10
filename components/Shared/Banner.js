import React from "react";

const Banner = ({ title, path, bgImage }) => {
  return (
    <div className="w-full h-[400px]  bg-[url('/assets/images/homebackground.png')] bg-no-repeat bg-center bg-cover">
      <div className="bg-gradient-to-r from-primary rounded-br-[200px] max-w-[894px] h-full flex  justify-center items-center ">
        <div className="flex flex-col gap-x-[10px]">
          <h3 className="font-oswald font-bold text-[40px] text-white">
            {title}
          </h3>
          <p
            className="font-poppins font-medium text-lg text-secondary
          "
          >
            {path}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;

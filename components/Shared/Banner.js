import React from "react";

const Banner = ({ title, path }) => {
  return (
    <div className=" bg-gradient-to-r from-[#21503FF5] to-[#4D7365A3] rounded-br-[200px] max-w-[894px] h-full flex  justify-center items-center ">
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
  );
};

export default Banner;

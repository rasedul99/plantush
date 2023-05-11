import React from "react";

const Branding = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-10 md:mt-[130px] mb-[122px] flex flex-col gap-y-[30px]">
        {/* Top side image */}
        <div className="flex flex-col md:flex-row gap-x-[30px] gap-y-4">
          <div className="basis-1/2">
            <img
              src="/assets/images/branding/one.png"
              className=" object-cover max-w-full"
            />
          </div>
          <div className="w-1/2 flex ">
            <img
              src="/assets/images/branding/two.png"
              className="object-cover max-w-full "
            />
            <img
              src="/assets/images/branding/three.png"
              className="object-cover max-w-full "
            />
          </div>
        </div>
        {/* Top side image end*/}

        {/* Botom  side image */}
        <div className="flex flex-col md:flex-row gap-x-[30px] gap-y-4 ">
          <div className=" w-1/2 flex  md:gap-x-[30px] ">
            <img
              src="/assets/images/branding/four.png"
              className="object-cover"
            />
            <img
              src="/assets/images/branding/five.png"
              className="object-cover"
            />
          </div>
          <div className="basis-1/2">
            <img
              src="/assets/images/branding/six.png"
              className="object-cover"
            />
          </div>
        </div>
        {/* Botom  side image */}
      </div>
    </div>
  );
};

export default Branding;

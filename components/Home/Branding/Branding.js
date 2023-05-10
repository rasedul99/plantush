import React from "react";

const Branding = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-[730px] md:mt-[130px] mb-[122px] grid grid-cols-1 gap-y-2">
        <div className="flex flex-col md:flex-row gap-x-[30px]">
          <img src="/assets/images/branding/one.png" className="grow-0" />
          <div className="flex flex-wrap gap-x-[30px] ">
            <img src="/assets/images/branding/two.png" />
            <img src="/assets/images/branding/three.png" />
          </div>
        </div>

        <div className="flex flex-wrap  gap-x-[30px] ">
          <div className="flex flex-wrap gap-x-[30px]">
            <img src="/assets/images/branding/four.png" />
            <img src="/assets/images/branding/five.png" />
          </div>
          <img src="/assets/images/branding/six.png" />
        </div>
      </div>
    </div>
  );
};

export default Branding;

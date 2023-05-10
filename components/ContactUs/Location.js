import React from "react";

const Location = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-[10px] justify-center items-center">
        <h3 className="text-primary font-oswald font-bold text-[40px]">
          Our Location
        </h3>
        <div className="flex items-center gap-x-4">
          <img src="/assets/icons/home.png" />
          <div className="font-poppins font-semibold text-xl text-dark1">
            <p>29 Washington Pl, New</p>
            <p> York, NY 10003, USA</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <img src="/assets/images/map.png" alt="map" className="max-h-[600px]" />
      </div>
    </div>
  );
};

export default Location;

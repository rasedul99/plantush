import React from "react";

const Planting = () => {
  return (
    <div className=" my-[131px]   flex flex-col gap-y-5 md:flex-row gap-x-[30px] ">
      <div className="basis-1/2">
        <img
          src="/assets/images/garden/planting.png"
          alt="plant"
          className="w-full h-full "
        />
      </div>
      <div className="basis-1/2">
        <div className="flex  items-center">
          <img src="/assets/images/aboutuslogo.png" />
          <p className="text-secondary font-poppins font-semibold text-xl">
            Welcome to Our Garden
          </p>
        </div>
        <h3 className="text-primary font-oswald font-bold text-[40px]">
          We Want Help You to Grow Planting
        </h3>
        <p className="font-poppins font-normal px-1 my-10 text-justify text-gray">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 place-items-center gap-x-[30px] gap-y-11">
            <div className="flex gap-x-[10px]">
              <img src="/assets/icons/garden/planticon.png" />
              <p className="font-poppins font-semibold text-lg text-primary">
                Watering & Irrigation
              </p>
            </div>
            <div className="flex gap-x-[10px]">
              <img src="/assets/icons/garden/planticon.png" />
              <p className="font-poppins font-semibold text-lg text-primary">
                Lawn Maintenance
              </p>
            </div>
            <div className="flex gap-x-[10px]">
              <img src="/assets/icons/garden/planticon.png" />
              <p className="font-poppins font-semibold text-lg text-primary">
                Plant Stands & Trays
              </p>
            </div>
            <div className="flex gap-x-[10px]">
              <img src="/assets/icons/garden/planticon.png" />
              <p className="font-poppins font-semibold text-lg text-primary">
                Yard & Garden Decor
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:gap-x-12 mt-10">
          <img
            src="/assets/images/garden/satisfied-customer.png"
            alt="satisfied customer"
          />
          <img src="/assets/images/garden/success.png" alt="success" />
        </div>
      </div>
    </div>
  );
};

export default Planting;

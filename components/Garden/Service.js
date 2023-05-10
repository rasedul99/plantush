import React from "react";

const Service = () => {
  return (
    <div className=" my-[131px]   flex flex-col gap-y-5 md:flex-row gap-x-[30px] ">
      <div className="basis-1/2">
        <div className=" flex  items-center">
          <img src="/assets/images/aboutuslogo.png" />
          <p className="text-secondary font-poppins font-semibold text-xl">
            Welcome to Our Garden
          </p>
        </div>
        <h3 className="text-primary font-oswald font-bold text-[40px]">
          We Provide Gardening Best Service
        </h3>
        <p className="font-poppins font-normal px-1 my-10 text-justify text-gray">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>

        <div className="flex gap-x-[28px]">
          <div className="flex grow gap-x-[10px]">
            <img src="/assets/icons/garden/soil.png" />
            <p className="font-poppins font-semibold text-lg text-primary">
              Soil Marking & Carbo
            </p>
          </div>
          <div className="flex grow gap-x-[10px]">
            <img src="/assets/icons/garden/commercial.png" />
            <p className="font-poppins font-semibold text-lg text-primary">
              Commercial Planting
            </p>
          </div>
        </div>

        <div className="flex items-start gap-x-7 mt-[60px]">
          <img src="/assets/images/garden/user.png" alt="md" />
          <div className="flex flex-col">
            <h3 className="font-poppins font-semibold text-[25px] text-primary">
              Albert John Bosh
            </h3>
            <h2 className="font-poppins font-medium text-lg text-[#5D8834]">
              Managing Director
            </h2>
            <p className="font-poppins font-normal text-justify text-base text-dark3 mt-[5px] mb-[10px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec
              pellentesque, nibh
            </p>
            <img
              src="/assets/images/garden/sign.png"
              className="w-[106px] h-[35px]"
            />
          </div>
        </div>
      </div>
      <div className="basis-1/2">
        <img
          src="/assets/images/garden/service.png"
          alt="plant"
          className="w-full h-full rounded-tl-[80px] rounded-br-[80px]"
        />
      </div>
    </div>
  );
};

export default Service;

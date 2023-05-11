import Button from "@components/Shared/Button";
import React from "react";

const AboutUs = () => {
  return (
    <div className="mx-2 my-[131px] md:mx-[276px]  flex flex-col md:flex-row gap-x-[72px]">
      <div className="basis-1/2">
        <img src="/assets/images/aboutusleft.png" className="w-full h-full" />
      </div>
      <div className="basis-1/2 flex flex-col  items-center md:items-start">
        <div className="flex items-center">
          <img src="/assets/images/aboutuslogo.png" />
          <p className="text-secondary font-poppins font-semibold text-xl">
            About Us
          </p>
        </div>
        <h3 className="text-primary font-oswald font-bold text-[40px]">
          Welcome to Plantush
        </h3>
        <p className="font-poppins font-normal px-1 my-10 text-justify text-gray">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.It is a long established fact that a reader
          will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
        </p>

        <Button>Read More</Button>
      </div>
    </div>
  );
};

export default AboutUs;

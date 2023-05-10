import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="w-full h-[400px] md:h-[700px] bg-[url('/assets/images/experincebg.png')] bg-no-repeat bg-center bg-cover">
      <div className="max-w-7xl mx-auto pt-10 md:pt-[148px] md:pb-[130px]">
        <div className="flex justify-center items-center">
          <img src="/assets/images/aboutuslogo.png" />
          <p className="text-secondary font-poppins font-semibold text-xl">
            Our Fun Fact
          </p>
        </div>
        <h3 className="text-center text-white font-oswald font-bold text-[40px]">
          25 Years of Experience
        </h3>

        <div className=" grid  grid-cols-2  gap-y-10 md:grid-cols-4 gap-x-[30px] mt-10">
          <ExperienceCard
            icon="/assets/icons/experience/experience.png"
            digit="25"
            title="Year of Experience"
          />
          <ExperienceCard
            icon="/assets/icons/experience/gardener.png"
            digit="50"
            title="Expert Gardener"
          />
          <ExperienceCard
            icon="/assets/icons/experience/customer.png"
            digit="5000"
            title="Happy Customer"
          />
          <ExperienceCard
            icon="/assets/icons/experience/experience.png"
            digit="20"
            title="Professional Awards"
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;

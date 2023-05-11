import React from "react";
import WorkProcessCard from "./WorkProcessCard";

const WorkProcess = () => {
  return (
    <div className="max-w-7xl md:mx-auto mx-2 ">
      <div className="flex justify-center items-center">
        <img src="/assets/images/aboutuslogo.png" />
        <p className="text-secondary font-poppins font-semibold text-xl">
          Work Process
        </p>
      </div>
      <h3 className="text-center text-primary font-oswald font-bold text-[40px]">
        Our Easy Work Process
      </h3>

      {/* workprocess card */}

      <div className="grid grid-cols-1 gap-y-5 md:grid-cols-4 gap-x-11 mt-10">
        <WorkProcessCard
          image="/assets/icons/workprocess/plant.png"
          title="Ready To Plant"
          desc="It is a long established fact that a reader will be distracted by the "
        />
        <WorkProcessCard
          image="/assets/icons/workprocess/soil.png"
          title="Soil Filtering"
          desc="It is a long established fact that a reader will be distracted by the "
        />
        <WorkProcessCard
          image="/assets/icons/workprocess/garden.png"
          title="Garden Design"
          desc="It is a long established fact that a reader will be distracted by the "
        />
        <WorkProcessCard
          image="/assets/icons/workprocess/soilmedic.png"
          title="Using Soil Medic"
          desc="It is a long established fact that a reader will be distracted by the "
        />
      </div>

      {/* workprocess card end*/}
    </div>
  );
};

export default WorkProcess;

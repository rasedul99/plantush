import AboutUs from "@components/Home/AboutUs";
import Experience from "@components/Home/Experience/Experience";
import Hero from "@components/Home/Hero";
import PlantHouse from "@components/Home/PlantHouse/PlantHouse";
import WorkProcess from "@components/Home/WorkProcess";
import Head from "next/head";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <WorkProcess />
      <PlantHouse />
      <Experience />
    </div>
  );
};

export default Home;

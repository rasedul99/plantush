import AboutUs from "@components/Home/AboutUs";
import Blog from "@components/Home/Blog/Blog";
import Branding from "@components/Home/Branding/Branding";
import Experience from "@components/Home/Experience/Experience";
import Hero from "@components/Home/Hero";
import PlantHouse from "@components/Home/PlantHouse/PlantHouse";
import Testimonials from "@components/Home/Testimonials/Testimonials";
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
      <Branding />
      <Testimonials />
      <Blog />
    </div>
  );
};

export default Home;

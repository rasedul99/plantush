import AboutUs from "@components/Home/AboutUs";
import Hero from "@components/Home/Hero";
import WorkProcess from "@components/Home/WorkProcess";
import Head from "next/head";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <WorkProcess />
    </div>
  );
};

export default Home;

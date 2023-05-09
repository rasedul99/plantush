import AboutUs from "@components/Home/AboutUs";
import Hero from "@components/Home/Hero";
import Head from "next/head";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
    </div>
  );
};

export default Home;

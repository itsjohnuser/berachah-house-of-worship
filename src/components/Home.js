import React from "react";
import { bannerimg2 } from "../utils/constants";

const Home = () => {
  return (
    <>
      <img src={bannerimg2} alt="church" className="w-full" />
      <div className="w-[1024px] mx-auto"></div>
    </>
  );
};

export default Home;

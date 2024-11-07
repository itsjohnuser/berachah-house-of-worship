import React from "react";
import { bannerimg2 } from "../utils/constants";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      {/* <Header /> */}
      <img src={bannerimg2} alt="church" className="w-full" />
      <div className="w-[1024px] mx-auto"></div>
      {/* <Footer /> */}
    </>
  );
};

export default Home;

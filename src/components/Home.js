import React from "react";
import Slider from "./Slider"
import { Slider1, Slider2, Slider3 } from "../utils/constants";

const Home = () => {
    const slidesData = [
        {
            name: "Slider1",
            url : Slider1,
        },
        {
            name: "Slider2",
            url: Slider2,
        },
        {
            name: "Slider3",
            url: Slider3,
        },
        
    ]

    const imageUrls = slidesData.map((slide, index) => slide.url); 

  return (
    <>
              <Slider slides={slidesData} />
        {/* <Slider slides={slidesData} /> */}
        <div className="w-full lg:w-[1024px] mx-auto">
            <div className="about p-5 md:p-2 md:py-7 lg:p-0 lg:py-7">
                <h3>Wecome to <span>Berachah House of Worship</span></h3>
            </div>
        </div>
    </>
  );
};

export default Home;

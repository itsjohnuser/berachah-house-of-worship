import React from "react";
import Slider from "./Slider"

const Home = () => {
    const slidesData = [
        {
            name: "Slider1",
            url : "https://img.freepik.com/free-photo/3d-music-related-scene_23-2151125037.jpg?t=st=1731569536~exp=1731573136~hmac=b3167e8a5e3a45e40a2ec13de78aca6670ab050a2e5c5ba49891522201bc2383&w=2000",
        },
        {
            name: "Slider2",
            url: "https://img.freepik.com/free-photo/purple-hand-background-showing-invisible-object-gesture_53876-104228.jpg?t=st=1731571928~exp=1731575528~hmac=13bebaef9e29453d9e49b389cb88ed3be23fd3f16518abbba1f1c2d594db007f&w=1480",
        },
        {
            name: "Slider3",
            url: "https://img.freepik.com/free-vector/realistic-purple-candles-advent-background_23-2149209346.jpg?t=st=1731578062~exp=1731581662~hmac=e2e0a098d669ea953e8456e4033eca9b9aa283288d032c378109586bf89d293b&w=1800",
        },
        
    ]
  return (
    <>
        <Slider slides={slidesData} />
        <div className="w-full lg:w-[1024px] mx-auto">
            <div className="about p-5 md:p-2 md:py-7 lg:p-0 lg:py-7">
                <h3>Wecome to <span>Berachah House of Worship</span></h3>
            </div>
        </div>
    </>
  );
};

export default Home;

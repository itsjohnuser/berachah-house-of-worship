import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white p-3">
        <div className="w-full lg:w-[1024px] flex items-center mx-auto flex-col md:flex-row md:justify-between justify-center">
          <div className="text-center md:text-left">
            <p className="m-0">
              &copy; 2024 Berachah Church. All Rights Reserved
            </p>
          </div>
          <div className="text-center lg:text-left mt-4 lg:mt-0">
            <p className="m-0">
              Designed & Developed by{" "}
              <a href="https://www.linkedin.com/in/schigurupatis/" target="_blank" className="text-red-500">
                Santha Kumar Chigurupati
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

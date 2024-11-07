import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white p-3">
        <div className="flex justify-between items-center w-[1024px] mx-auto">
          <div>
            <p className="m-0">
              &copy; 2024 Berachah Church. All Rights Reserved
            </p>
          </div>
          <div>
            <p className="m-0">
              Designed & Developed by{" "}
              <a href="#" className="text-red-500">
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

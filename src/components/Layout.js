import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children} {/* This will render the content passed as children */}
      <Footer />
    </>
  );
};

export default Layout;

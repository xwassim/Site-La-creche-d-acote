import React from "react";
import Choice from "./Choice";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../HomePage/Footer";

const PageChoice = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="bg-[#f9d1d1] ">
        <div className="mb-5 ld:mb-0">
          <Choice> </Choice>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default PageChoice;

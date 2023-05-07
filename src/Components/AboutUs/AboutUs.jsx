import React from "react";
import Navbar from "../Navigation/Navbar";
import Footer from "../HomePage/Footer";
import CCM from "../HomePage/CCM";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import SiteComments from "./SiteComments";

const AboutUs = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <Section1 />

        <CCM />
        <Section4 />
        <Section3 />

        <Section2 />
        <SiteComments />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default AboutUs;

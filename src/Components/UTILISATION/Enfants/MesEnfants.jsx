import React from "react";
import Navbar from "../../Navigation/Navbar";
import GstEnfants from "./GstEnfants";
import Footer from "../../HomePage/Footer";

const MesEnfants = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <GstEnfants />
      </div>
      <footer className="mt-10">
        <Footer />
      </footer>
    </>
  );
};

export default MesEnfants;

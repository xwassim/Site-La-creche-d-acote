import React from "react";
import Navbar from "../../../Navigation/Navbar";
import Footer from "../../../HomePage/Footer";
import FormEnfant from "./FormEnfant";

const AjoutEnfant = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className=" mx-[20%] ">
        <FormEnfant />
      </div>
    </>
  );
};

export default AjoutEnfant;

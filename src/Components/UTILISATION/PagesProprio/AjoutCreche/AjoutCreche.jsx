import React from "react";
import Navbar from "../../../Navigation/Navbar";
import FormCreche from "./FormCreche";
import Footer from "../../../HomePage/Footer";
const AjoutCreche = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className="mx-[10%]">
        <h2 className="text-3xl font-semibold text-blue-950 text-center mx-10">Formulaire d'ajout d'une creche</h2>
        <FormCreche />
      </div>
      <footer className="mt-5">
        <Footer />
      </footer>
    </>
  );
};

export default AjoutCreche;

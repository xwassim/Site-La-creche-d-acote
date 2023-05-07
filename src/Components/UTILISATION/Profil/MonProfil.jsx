import React from "react";
import Navbar from "../../Navigation/Navbar";
import DescriptionProfile from "./Descriptions/DescriptionProfile";
import Footer from "../../HomePage/Footer";
import DescriptionCompte from "./Descriptions/DescriptionCompte";

import { useRef } from "react";

const MonProfil = () => {
  const sectionRef = useRef(null);

  function handleClick() {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <h2 className="text-xl text-blue-950  text-center mb-5 font-medium sm:text-3xl ">
          Informations concernat votre compte
        </h2>
        <DescriptionProfile />

        <DescriptionCompte />
      </div>
      <footer className="mt-10">
        <Footer />
      </footer>
    </>
  );
};

export default MonProfil;

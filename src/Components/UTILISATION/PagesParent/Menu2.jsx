import React from "react";

import profil from "../assets/profil.svg";
import enfant from "../assets/enfants (1).svg";
import Navbar from "../../Navigation/Navbar";
import { Link } from "react-router-dom";

const Menu2 = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <h2 className="mt-5 mb-5  text-blue-950 font-semibold text-4xl text-center  ">
          Menu d'utilisation
        </h2>
        <div className="Menu my-10 ">
          <Link to="/MesEnfants">
            {" "}
            <img
              src={enfant}
              alt="/"
              className="hover:scale-105 duration-300"
            ></img>
          </Link>
          <Link to="/MonProfil">
            <img
              src={profil}
              alt="/"
              className="hover:scale-105 duration-300"
            ></img>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu2;

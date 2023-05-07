import React from "react";
import Navbar from "../../../Navigation/Navbar";

import Authentification from "./Authentification";

const PageAuthentification = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div>
        <Authentification />
        <div className="flex justify-center">
          <a href="/Choice">
            {" "}
            <button
              type="submit"
              className="mt-10 rounded-lg bg-red-400 px-12 py-4 text-xl ring-2 ring-red-500  font-semibold text-white shadow-sm hover:bg-rose-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:scale-105 duration-300"
            >
              Suivant
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default PageAuthentification;

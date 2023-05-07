import React from "react";
import Navbar from "../../Navigation/Navbar";
import Searchbar from "./Searchbar";
import CrecheSlider from "../CrecheSlider";
import Footer from "../../HomePage/Footer";

const Search = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className=" w-full mx-auto mt-[50px]">
        <h1 className=" text-3xl font-bold text-[#5B112B] font-[Inter] text-center ">
          Rechercher Une Créche qui Satisfait Vos Besoins{" "}
        </h1>
        <div className=" ld:mx-[18%] md:mx-[14%] sm:mx-[10%]  xxs:mx-[2%]">
        <Searchbar />
        </div>
        <h2 className="text-3xl font-semibold font-[inter] text-center mt-10 text-blue-950">
          Nos Creches les plus Appreciées
        </h2>
        <div>
          <CrecheSlider />
          <CrecheSlider />
          <CrecheSlider />
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Search;

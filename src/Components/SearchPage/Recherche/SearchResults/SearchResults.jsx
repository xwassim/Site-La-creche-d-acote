import React from "react";
import Navbar from "../../../Navigation/Navbar";
import Searchbar from "../Searchbar";

import Creches from "./Creches";
import Footer from "../../../HomePage/Footer";


const SearchResults = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="max-w-[1300px] mx-auto ">
        <Searchbar />
      </div>
       <div className="flex">
      <h2 className="text-4xl mx-auto justify-self-center font-inter text-rose-950 my-5 font-semibold" >Les resultats de votre recherche : </h2>
      </div>
        <Creches/>
      <Creches/>  

<footer className="mt-5">
  <Footer/>
</footer>
    
    </>
  );
};

export default SearchResults;

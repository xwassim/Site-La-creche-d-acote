import React from "react";
import fam from "./assets/Family (2).svg";
import bg from "./assets/Ellipse.svg";
import searchbar from "../SearchPage/Recherche/Searchbar"
import Searchbar from "../SearchPage/Recherche/Searchbar";
import LOGO from "../Assets/Logo1.svg"

  import LogoFloatingImage from "../Functions/LogoFloatingImage";
 
const Section1 = () => {
  return (
    <>
      <div className=" section1 flex max-h-full h-full flex-row justify-evenly mx-[15%]">
        <div className="mt-[50px] ">
          <div>
            <h1 className="text-5xl text-blue-950 font-[Concert One] ml-10">
              Bienvenue ! 
            </h1>
            
            <h2 className="mt-10  text-blue-950  text-3xl ml-10 font-bold ">
              <span className=" text-[#ff3d3d] font-normal">LA CRÈCHE D'ACOT<span className="text-blue-950">É</span></span> est 
              Le site référence pour trouver <br/>la crèche la mieux adaptée a vos enfants en Algérie
          
              
            </h2>
            <div className="">
            <Searchbar/>
            </div>
          </div>
        </div>
        <div>
          {/* <img src={LOGO} height={200} width={400}></img> */}
          <LogoFloatingImage/>
        </div>
      </div>
    </>
  );
};

export default Section1;

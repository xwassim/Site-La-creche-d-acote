import React from "react";
import pic from "./assets/aboutphoto.svg";



const Section1 = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row mx-10 md:mb-[160px] md:mt-[60px]">
      <div className="md:w-1/2 md:pr-10">
        <h1 className="ld:text-4xl text-2xl text-blue-950 font-[Concert One] mb-4 md:mb-6 md:ml-10">
          <span className="ld:text-5xl text-3xl  text-[#F55D4C]">La Crèche D'acoté:</span>{" "}
          votre partenaire pour trouver une place en crèche rapidement et facilement.
        </h1>
        <h2 className="md:ml-11 mx-10 md:mt-12 text-blue-950 text-lg font-semibold ">
          Chez  <span className=" text-[#F55D4C]"> La Crèche d'acôté,</span> nous sommes convaincus que chaque parent mérite de
          pouvoir travailler sans se soucier du bien-être de son enfant. C'est pourquoi
          nous avons crée un moteur de recherche de crèche, offrant
          une solution pratique et personnalisée à chaque famille. Notre approche
          collaborative permet d'offrir un équilibre entre la vie professionnelle et la vie
          familiale, en respectant les besoins de chacun. De plus, nous offrons aux
          responsables de crèches la possibilité d'ajouter leur établissement sur notre
          site afin de bénéficier d'une meilleure visibilité.
        </h2>
      </div>
      <div className="mt-6 md:mt-0 md:w-1/2">
        <img src={pic} alt="about" className="w-full h-auto" />
      </div>
    </div>
  

    </>
  );
};

export default Section1;
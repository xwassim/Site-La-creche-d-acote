import React from 'react'

import pic2 from "./assets/team.svg";

const Section3 = () => {
  return (
    <>
        <div className="flex flex-col md:flex-row mx-10  md:mt-[80px]">
    <div className=" md:mt-0 md:w-1/2 ">
        <img src={pic2} alt="about" className="w-full h-auto mt-[-70px]" />
      </div>
      <div className="md:w-1/2 md:pr-10">
        <h1 className="text-4xl text-blue-950 font-[Concert One] mb-4 md:mb-6 md:ml-10">
          <span className="text-5xl text-[#F55D4C]">Notre  équipe:</span>{" "}
        </h1>
        <h2 className="md:ml-11 mx-10 md:mt-12 text-blue-950 text-lg font-semibold ">
        Notre équipe est composée de 6 membres passionnés et dévoués qui travaillent 
  ensemble pour offrir un service de qualité à tous les parents  
  cherchant une solution de garde pour leurs enfants. Nous avons une approche 
  collaborative, où chacun apporte sa contribution unique pour faire progresser 
  le site et le rendre toujours plus utile et efficace. Nous sommes une équipe 
  jeune, dynamique et enthousiaste, et nous partageons tous la même mission de 
  faciliter la vie des parents en leur proposant un service de qualité supérieure. 
  Que ce soit à travers le développement web, la conception graphique, ou la gestion
  des partenariats, chaque membre de notre équipe est hautement qualifié et engagé 
  à fournir un service optimal pour satisfaire nos clients.De plus, nous offrons 
  une solution pratique aux responsables de crèches pour présenter leurs 
  établissements sur notre site et faciliter leur recherche de clients potentiels.
        </h2>
      </div>
      
    </div>
    </>
  )
}

export default Section3
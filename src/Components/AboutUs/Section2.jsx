import React from 'react'

import one from "./assets/mission.svg";
import two from "./assets/engagement.svg";
import three from "./assets/value.svg";
import four from "./assets/vocation.svg";


const Section2 = () => {
  return (
    <>
      <div>
    {/*<div className="flex justify-end ">
        <img src={kid} alt="/" className=""></img>
  </div> */}
      <div className="w-full mt-5 py-[6rem] px-4 bg-[#1C1635]">
        
          {/********************************************************************************************************************* */}
        <div className="py-[4rem] max-w-[1240px] mx-auto ld:grid ld:grid-cols-4 gap-10 flex flex-wrap">
          <div className="bg-[#F6C9C7] w-full shadow-xl flex flex-col p-4 my-4 rounded-3xl hover:bg-[#5B112B] hover:text-white hover:scale-105 duration-300">
            <img className="w-20 mx-auto mt-[-3rem]" src={one} alt="/" />
            <h2 className="text-2xl font-bold text-center py-8">
              Notre Mission
            </h2>
            <p className="text-center text-base py-4 mx-4 font-medium ">
            Notre mission est de mettre à la disposition des parents un
            réseau de crèches fiable et facilement accessible pour 
            trouver une place pour leur enfant. Nous voulons être le 
            partenaire de confiance des parents dans leur recherche de 
            mode de garde, et nous engageons à leur offrir un service de 
            qualité supérieure qui répondra à leurs besoins.

            </p>
            
          </div>
          {/********************************************************************************************************************* */}

          <div className="bg-[#F6C9C7] w-full shadow-xl flex flex-col p-4  my-4 rounded-3xl hover:bg-[#5B112B] hover:text-white hover:scale-105 duration-300">
            <img className="w-20 mx-auto mt-[-3rem]" src={two} alt="/" />
            <h2 className="text-2xl font-bold text-center py-8">
            Notre engagement
            </h2>
            <p className="text-center text-base py-4 mx-8 font-medium ">
            Notre engagement est de fournir un service de qualité à tous 
            les parents, entreprises et crèches. Nous sommes engagés dans
            la promotion d'un mode de garde de qualité pour les enfants 
            et nous croyons que notre service peut aider à améliorer leur
            bien-être et leur épanouissement.
            </p>
          </div>
          {/********************************************************************************************************************* */}

          <div className="bg-[#F6C9C7] w-full shadow-xl flex flex-col p-4 my-4 rounded-3xl hover:bg-[#5B112B] hover:text-white hover:scale-105 duration-300">
            <img className="w-20 mx-auto mt-[-3rem]" src={three} alt="/" />
            <h2 className="text-2xl font-bold text-center py-8">
            Nos valeurs
            </h2>
            <p className="text-center text-base py-4 mx-8 font-medium ">
            Chez Crèche d'À Côté, nous sommes animés par des valeurs 
            fondamentales telles que l'engagement, la disponibilité, 
            l'empathie et l'efficacité. Nous sommes à l'écoute de nos 
            clients et nous nous engageons à leur fournir un service de 
            qualité qui respecte ces valeurs.
            </p>
          </div>
          {/********************************************************************************************************************* */}

          <div className="bg-[#F6C9C7] w-full shadow-xl flex flex-col p-4 my-4 rounded-3xl hover:bg-[#5B112B] hover:text-white hover:scale-105 duration-300">
            <img className="w-20 mx-auto mt-[-3rem]" src={four} alt="/" />
            <h2 className="text-2xl font-bold text-center py-8">
            Notre vocation
            </h2>
            <p className="text-center text-sm py-4 mx-8 font-medium ">
            
            Nous avons pour vocation de créer un environnement harmonieux 
            entre les parents et les structures d'accueil pour enfants, tout 
            en contribuant à la sérénité et à l'épanouissement de chacun. 
           Nous pensons que le bien-être des enfants doit être au cœur de 
             tout projet professionnel et familial, et c'est pourquoi nous  
           offrant un service de qualité qui satisfait les attentes 
           de toutes les parties prenantes.
            </p>
          </div>
          {/********************************************************************************************************************* */}

        </div>
        
      </div>
    </div>
    </>
  )
}

export default Section2

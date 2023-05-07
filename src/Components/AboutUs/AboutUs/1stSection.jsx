import React from "react";
import pic from "./aboutphoto.svg";
import kid from "./KIDD.svg";
import one from "./mission.svg";
import two from "./engagement.svg";
import three from "./value.svg";
import four from "./vocation.svg";
import pic2 from "./team.svg";


const Section1 = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row mx-10 md:mb-[160px] md:mt-[60px]">
      <div className="md:w-1/2 md:pr-10">
        <h1 className="text-4xl text-blue-950 font-[Concert One] mb-4 md:mb-6 md:ml-10">
          <span className="text-5xl text-[#F55D4C]">Crèche D'Acoté:</span>{" "}
          votre partenaire pour trouver une place en crèche rapidement et facilement.
        </h1>
        <h2 className="md:ml-11 mx-10 md:mt-12 text-blue-950 text-lg font-semibold ">
          Chez Crèche d'Acôté, nous sommes convaincus que chaque parent mérite de
          pouvoir travailler sans sacrifier le bien-être de leur enfant. C'est pourquoi
          nous avons créé un service dédié à la recherche de places en crèche, offrant
          une solution pratique et personnalisée à chaque famille. Notre approche
          collaborative permet d'offrir un équilibre entre vie professionnelle et vie
          familiale, en respectant les besoins de chacun. De plus, nous offrons aux
          responsables de crèches la possibilité d'ajouter leur établissement sur notre
          site afin de faciliter la visibilité de leurs offres.
        </h2>
      </div>
      <div className="mt-6 md:mt-0 md:w-1/2">
        <img src={pic} alt="about" className="w-full h-auto" />
      </div>
    </div>
    <div>
    {/*<div className="flex justify-end ">
        <img src={kid} alt="/" className=""></img>
  </div> */}
      <div className="w-full -mt-6 py-[6rem] px-4 bg-[#1C1635]">
        
          {/********************************************************************************************************************* */}
        <div className="py-[4rem] max-w-[1240px] mx-auto grid ld:grid-cols-4 gap-10 flex flex-wrap">
          <div className="bg-[#F6C9C7] w-full shadow-xl flex flex-col p-4 my-4 rounded-3xl hover:bg-[#5B112B] hover:text-white hover:scale-105 duration-300">
            <img className="w-20 mx-auto mt-[-3rem]" src={one} alt="/" />
            <h2 className="text-2xl font-bold text-center py-8">
              Notre Mission
            </h2>
            <p className="text-center text-base py-4 mx-8 ">
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
            <p className="text-center text-base py-4 mx-8 ">
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
            <p className="text-center text-base py-4 mx-8 ">
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
            <p className="text-center text-sm py-4 mx-8 ">
            
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
  );
};

export default Section1;
import React from "react";
import Creches from "./Creches";
import { AiOutlinePlus } from 'react-icons/ai';




const GstCreches = () => { 
  return (   
    <div className="  w-[90%] max-w-[1100px] mt-[5]  mx-auto text-center flex flex-col justify-center font-semibold text-[#0B0C38] font-inter ">

    <h2 className=" md:text-4xl sm:text-3xl text- 2xl  md:py-6 ">
      Espace Propiétaire
    </h2>
    <div className=" grid grid-cols-2 text-center items-center w-full border-b-4 border-red-100 border-t-4 my-3 ">
      <h4 className=" md:text-4xl sm:text-3xl pio:text-2xl text-xl my-2 font-semibold   md:py-6  text-start ml-[5%]  ">
        Mes Creches
      </h4>
      <div className="justify-self-end">
        <a href="/AjoutCreche">
      <button className="bg-[#FB9B90]  w-fit rounded-md my-2 font-medium text-center  text-[#191A43] ring-2 ring-[#ED6361] hover:bg-[#5B112B] hover:text-white hover:scale-105 duration-300" title="Ajouter">
        < AiOutlinePlus size={20} className=' text-center cursor-pointer mx-1 my-1 xs:mx-3 xs:my-2 md:mx-5 md:my-4' />
      </button>
      </a>
      </div>
      
    </div>


   <Creches/>

    
  







  </div>

  
  )
}

export default GstCreches;
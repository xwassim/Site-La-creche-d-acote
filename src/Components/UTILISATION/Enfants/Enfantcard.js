import React from "react";
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import PopUp from "../../Functions/PopUp";
import { useRef, useState } from "react";

import Select from "react-select";
 

function  EnfantCard (props) {
  const options = [
    { value: "garçon", label: " Garçon" },
    { value: "fille", label: "Fille" },
];
  function Modifie() {  
 
    const [showButton, setShowButton] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
      setShowPopup(true);
    };
  
    const closePopup = () => {
      setShowPopup(false);
      
    };

  
   
  
  

 
  
    return (
      <div className="z-50">
 
        <div className="hover:text-blue-950">
        {showButton && (

    <button 
    onClick={() => { openPopup();   }}
      
    className="bg-[#2b305e] ring ring-[#c21010]   w-fit rounded-md font-medium text-center my-2    hover:scale-105 duration-75 hover:bg-[#091278]" title="Modifier">
    < AiFillEdit size={20} className=' text-center text-white  cursor-pointer mx-1 my-1  xs:mx-2 xs:my-2 md:mx-3 md:my-3' />
  </button>

    )}
    </div>
        {showPopup && <PopUp content={<>
        <div className="xl:w-[1000px]  ld:w-[600px]">
        <div className="flex flex-col mx-[5%] ring-[#ff5353] ring-4  rounded-lg p-10 mt-[50px]">
            <h2 className="text-xl font-semibold">Modification des informations</h2>
            
            <div className="grid md:grid-cols-2 md:gap-6 my-2">
      
                <div className="relative z-0 w-full mb-2 group mt-3">
                    <input
                        type="date"
                        name="floating_first_name"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-rose-400 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        for="floating_first_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Date de naissance
                    </label>
                </div>
            
               
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-blue-950 hover:text-red-500"
        >
          <a href="/MesEnfants">Annuler</a> 
        </button>
        <button
          type="submit"
          className="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 hover:scale-105 duration-100 ring-2 ring-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <a href="/MesEnfants">Sauvgarder</a>
        </button>
      </div>

        </div>
        </div>
         </>}
           closePopup={closePopup} />}
      </div>
    );
  };

return (
<div className="mx-3 my-3 rounded-2xl bg-white ring ring-[#ff7c7c] font-inter">
<div className=" grid grid-cols-3 text-center items-center w-full border-b-2 border-red-200 border-t-2 my-3 ">
       <div className="justify-self-start ml-[6%] ">
<Modifie/>
       </div>
        <h1 className="font-inter font-bold justify-self-center">{props.prenom}</h1>
        <button className="bg-[#ff6565] justify-self-end mr-[6%]  w-fit  rounded-md font-medium text-center my-2  ring ring-[#081060]  hover:scale-105 duration-75 hover:bg-[#c21010]" title="Supprimer">
          < AiFillDelete size={20} className=' text-center text-white cursor-pointer mx-1 my-1 xs:mx-2 xs:my-2 md:mx-3 md:my-3' />
        </button>
 </div>
    <h1 className="font-inter mt-5 mb-2 "> <span className="font-bold"> Nom : </span> {props.nom} </h1>
    <h1 className="font-inter my-2 "> <span className="font-bold"> Prénom : </span>  {props.prenom} </h1>
    <h1 className="font-inter my-2 "> <span className="font-bold"> Sexe : </span> {props.Sexe} </h1>
    <h1 className="font-inter mt-2 mb-5 "> <span className="font-bold"> Age : </span> {props.Age} </h1>
    
</div>
    
)


}

export default EnfantCard;
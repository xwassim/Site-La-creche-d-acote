import { useStepperContext } from "../GestionDesSteps/StepperContext";
import React from "react";
import Select from "react-select";
import { useState } from "react";
import AccordionAjouterAutreEnfant from "../../../PagesAccordions/AccordionAjouterAutreEnfant";
import AccordionEnfantDejaAjoutes from "../../../PagesAccordions/AccordionEnfantDejaAjoutes";

export default function Details() {
  const { userData, setUserData } = useStepperContext();

  const [valeur, setValeur] = useState("");

  const handleChange = (event) => {
    setValeur(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("La valeur est : ", valeur);
  };
  const options = [
    { value: "homme", label: " HOMME" },
    { value: "femme", label: "FEMME" },
  ];
  const options1 = [
    { value: "master", label: "MASTER" },
    { value: "magister", label: "MAGISTER" },
    { value: "ingeniorat", label: "INGENIORAT" },
  ];

  return (<>
   
          <h2 className="text-xl font-semibold mb-10">Choisissez une date et une heure pour votre rendez vous</h2>
         

       <div className="">
       <div className="relative z-0 w-full mb-2 group mt-0">
            <input
              type="date"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-rose-400 peer"
             
              required
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Date de rendez-vous
            </label>
          </div>

       </div>
       <div className='mr-2' >
              <label
                htmlFor="etab"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Heure du rendez-vous
              </label>
              <div className=" ring-red-400 rounded-md mt-2 hover:cursor-pointer ">
                <input
           
                  type="time" name="start" id="start-time" required
                 
                 
                  
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0  py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

   
    
    </>
  );
}
import { useStepperContext } from "../GestionDesSteps/StepperContext";
import { useState } from "react";
import Accordion3 from "../../../PagesAccordions/AccordionAjouterAutreEnfant";
import Select from "react-select";

import React from "react";
import Logo from "../../../Assets/Logo1.svg";


import FloatingImage from "../../../Functions/LogoFloatingImage";

export default function Step1Connexion() {
  const { userData, setUserData } = useStepperContext();
  const [valeur, setValeur] = useState("");

  const handleChange = (event) => {
    setValeur(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("La valeur est : ", valeur);
  };
  const options1 = [
    { value: "master", label: "MASTER" },
    { value: "magister", label: "MAGISTER" },
    { value: "ingeniorat", label: "INGENIORAT" },
  ];

  return (
    <><>
     <div className="  max-w-[1240px] mt-5 ml-[5%] grid md:grid-cols-2 md:items-center md:justify-center ">
        <div className="flex items-center justify-center">
          <div class="flex flex-col items-center justify-center px-3 py-8 mx-auto w-[80%]  md:w-full lg:py-0">
            <div class="w-full bg-[#F5D5D5] rounded-xl ring ring-[#ff5b5b] shadow  md:mt-0 sm:max-w-md xl:p-0">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                
                <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-semibold text-[#0B0C38] "
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-50 ring ring-[#f67261] shadow-[-4.09869px_3.27895px_3px_rgba(0,0,0,0.25)]  sm:text-sm  rounded-2xl block w-full p-2.5"
                      placeholder="nom@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-semibold text-[#0B0C38]"
                    >
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 ring ring-[#f67261] shadow-[-4.09869px_3.27895px_3px_rgba(0,0,0,0.25)]  sm:text-sm  rounded-2xl block w-full p-2.5 "
                      required=""
                    />
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          class="w-4 h-4 border border-[#FD8C7D] rounded bg-gray-50 accent-[#FD8C7D]"
                          required=""
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label
                          for="remember"
                          className="font-semibold text-[#191A43]"
                        >
                          Se souvenir de moi
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      class="text-sm font-semibold text-[#191A43] hover:underline hover:text-[#F16951] "
                    >
                      Mot de passe oublié ?
                    </a>
                  </div>
                  {/* <button
                    type="submit"
                    class="w-full text-[#191A42] bg-[#FD8C7D] ring ring-[#191A42] font-semibold rounded-2xl text-sm px-5 py-2.5 text-center shadow-[0px_3.27895px_3.27895px_rgba(0,0,0,0.25),inset_3.27895px_6.5579px_3.27895px_rgba(0,0,0,0.25)]  hover:scale-105 duration-300"
                  >
                    Se connecter
                  </button> */}
                  <p class="text-sm text-center font-medium text-[#152071]">
                    Vous n'avez pas de compte{" "}
                    <a
                      href="#"
                      class="font-medium text-[#F16951] hover:underline "
                    >
                        Inscrivez-vous
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden     md:flex md:flex-col  md:items-center     ">
          {/* <FloatingImage /> */}
          <img src={Logo} alt="/" width={280}></img>
        </div>
      </div>
    </>
      {/* <>
        <>
          <div className="grid md:grid-cols-2 md:gap-6 my-2">
            <div className="relative z-0 w-full mb-3 group">
              <input
                type="text"
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
                NOM DIRECTEUR
              </label>
            </div>
            <div className="relative z-0 w-full mb-3 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-x-0 border-1 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-rose-400 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                PRENOM DIRECTEUR
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6 my-2">
            <div className="relative z-0 w-full mb-3 group">
              <input
                type="text"
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
                MAIL
              </label>
            </div>
            <div className="relative z-0 w-full mb-3 group">
              <input
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-x-0 border-1 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-rose-400 peer"
                placeholder=" "
                s
                required
              />
              <label
                for="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                TELEPHONE
              </label>
            </div>
          </div>
        </>
        <>
          <div className="grid md:grid-cols-2 md:gap-6 my-2">
            <div className="relative z-0 w-full mb-3 group">
              <input
                type="text"
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
                GRADE
              </label>
            </div>
            <div className="relative z-0 w-full mb-3 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-x-0 border-1 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-rose-400 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                ETABLISSEMENT
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6 my-2">
            <div className="relative z-0 w-full mb-3 group">
              <input
                type="text"
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
                LABORATOIRE
              </label>
            </div>
            <div className="relative z-0 w-full mb-3 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-rose-400 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                SPECIALITE
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6 my-2">
            <div id="select">
              <div className="mb-2 block">
                <label htmlFor="type" value="Select your type" s>
                  DIPLOME
                </label>
              </div>
              <Select options={options1} />
            </div>
          </div>
          <br></br>
          <div className="relative z-0 w-full mb-3 group my-2">
            <Accordion3></Accordion3>
          </div>
        </>
      </> */}
    </>
  );
}
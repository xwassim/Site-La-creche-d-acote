import React from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../HomePage/Footer";
import { AiFillEdit } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import PopUp from "../../Functions/PopUp";
import { useRef, useState } from "react";
import { CrecheSliderdata} from '../../../data'

import Select from "react-select";

const RdvParent = (props) => {
  const User = 
    {
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      Tel: "0563748202",
      Jour: "12/05/2023",
      Heure: "10:00",
      
    };

  const Creche =[
    {
       nameCreche :"Les Anges",
    },
    {
        nameCreche :"Mini World",
    },
    {
        nameCreche :"Le jardin des merveilles",
    },
    {
        nameCreche :" tofoula",
    },

  ];

  function Decaler() {
    const [showButton, setShowButton] = useState(true);
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
      setShowPopup(true);
    };

    const closePopup = () => {
      setShowPopup(false);
    };

    return (
      <div className="">
        <div className="hover:text-blue-950">
          {showButton && (
            <button
              onClick={() => {
                openPopup();
              }}
              type="submit"
              className="rounded-md bg-[#ff8f1f] px-4 py-2 text-sm font-semibold text-blue-950 shadow-sm hover:bg-[#ff7d0c] hover:scale-105 duration-100 ring-2 ring-[#091098] "
            >
              Decaler
            </button>
          )}
        </div>
        {showPopup && (
          <PopUp
            content={
              <>
                <div className="xl:w-[800px] z-50  ld:w-[600px] w-[400]">
                  <h2 className="my-5 text-center text-2xl ld:text-3xl font-bold text-rose-900 ">
                    Veuillez choisir une nouvelle date
                  </h2>
                  <div className="relative w-full mb-2 group mt-0">
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
                <div className="mr-2">
                  <label
                    htmlFor="etab"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Heure du rendez-vous
                  </label>
                  <div className=" ring-red-400 rounded-md mt-2 hover:cursor-pointer ">
                    <input
                      type="time"
                      name="start"
                      id="start-time"
                      required
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0  py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="button"
                      className="text-sm font-semibold leading-6 text-blue-950 hover:text-red-500"
                    >
                      <a href="/RdvParent">Annuler</a>
                    </button>
                    <button
                      type="submit"
                      className="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 hover:scale-105 duration-100 ring-2 ring-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <a href="/RdvParent">Sauvgarder</a>
                    </button>
                  </div>
                </div>
              </>
            }
            closePopup={closePopup}
          />
        )}
      </div>
    );
  }
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <h2 className="my-5 text-center text-3xl font-bold text-rose-900 ">
        Vos Rendez-vous
      </h2>
      <ul role="list" className="mx-[5%] sm:mx-[10%] ld:mx-[20%]">
        {Creche.map((Creche) => (
          <li
            key={User.email}
            className=" mt-5 pt-10  pb-8 px-10 ring ring-[#ff7171] rounded-lg bg-[#ffc6c6] "
          >
            <div className="flex justify-between">
              <div className="flex gap-x-4">
                {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={User.imageUrl} alt="" /> */}
                <UserCircleIcon
                  className="h-12 w-12 text-[#000000] "
                  aria-hidden="true"
                />
                <div className="min-w-0 flex-auto">
                  <h2 className="text-lg text-rose-900 font-semibold">
                    Vos Informations
                  </h2>
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {User.name}
                  </p>
                  <p className="mt-1 font-semibold  truncate text-sm leading-6 text-blue-950">
                    {User.email}
                  </p>
                  <p className="mt-1 font-semibold  truncate text-sm leading-8 text-blue-950">
                    {User.Tel}
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-lg font-semibold  leading-6 text-blue-950">
                  Le : {User.Jour}
                </p>

                <p className="mt-1 text-lg font-semibold  leading-6 text-blue-950">
                  heure : {User.Heure}
                </p>
                <p className="text-lg mt-5 leading-6 font-bold text-[#ff4242]">
                  <span className="text-blue-950 font-semibold">Creche : </span>
                  {Creche.nameCreche}
                </p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className="text-sm rounded-md ring-2 ring-[#091098] px-4 py-1.5 bg-[#d81b1b] font-semibold leading-6 text-white hover:bg-[red] hover:scale-105 duration-100 "
              >
                <a href="/">Annuler</a>
              </button>
              <Decaler />
            </div>
          </li>
        ))}
      </ul>
      <footer className="mt-10">
        <Footer />
      </footer>
    </>
  );
};

export default RdvParent;

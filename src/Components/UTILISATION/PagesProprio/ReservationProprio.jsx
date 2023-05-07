import React from "react";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../HomePage/Footer";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import PopUp from "../../Functions/PopUp";
import { useRef, useState } from "react";
import { CrecheUserx } from "../../../data";
import { Accordion } from "flowbite-react";

const ReservationProprio = () => {
  const UserProprio = {
    name: "Leslie Alexander",
    email: "leslie.alexander@example.com",
    Tel: "0563748202",
 
    CrechesProprio : [
      {
        nameCreche: "Les Anges",
        Client: [
          {   name: "Cerine Benghanemr",
          email: "Cerine.Benghanem@example.com",
          Tel: "0563748202",
       
    
            Enfants:[
              {
                nom: "Benghanem",
                prenom: "Ines",
                Sexe: "Fille",
                Age: "4",
                Jour: "12/05/2023",
              },
              {
                nom: "Benghanem",
                prenom: "Riyad",
                Sexe: "Garcon",
                Age: "3",
                Jour: "12/05/2023",
              },
              {
                nom: "Benghanem",
                prenom: "Wassim",
                Sexe: "Garcon",
                Age: "5",
                Jour: "12/05/2023",
              },
              {
                nom: "Benghanem",
                prenom: "yacine",
                Sexe: "Gracon",
                Age: "3",
                Jour: "12/05/2023",
              },
            ]
          },
          {   name: "Kader Taibi",
          email: "Kader.Taibi@example.com",
          Tel: "0563748202",
        
    
            Enfants:[
              {
                nom: "Taibi",
                prenom: "Ines",
                Sexe: "Fille",
                Age: "4",
                Jour: "13/07/2023",
              },
            
              {
                nom: "Taibi",
                prenom: "yacine",
                Sexe: "Gracon",
                Age: "3",
                Jour: "13/07/2023",
              },
            ]
          },
          {   name: "Rayane Remadna",
          email: "Rayane.Remadna@example.com",
          Tel: "0563748202",
          Jour: "22/05/2023",
    
            Enfants:[
              {
                nom: "Remadna",
                prenom: "Ines",
                Sexe: "Fille",
                Age: "4",
                Jour: "22/05/2023",
                
              },
              {
                nom: "Remadna",
                prenom: "Riyad",
                Sexe: "Garcon",
                Age: "3",
                Jour: "22/05/2023",
              },
              {
                nom: "Remadna",
                prenom: "Wassim",
                Sexe: "Garcon",
                Age: "5",
                Jour: "22/05/2023",
              },
              {
                nom: "Remadna",
                prenom: "yacine",
                Sexe: "Gracon",
                Age: "3",
                Jour: "22/05/2023",
              },
            ]
          },
     
        ],
      },
      {
        nameCreche: "Mini World",
        Client: [
          {  name: "Cerine Benghanemr",
          email: "Cerine.Benghanem@example.com",
          Tel: "0563748202",
          
    
            Enfants:[
              {
                nom: "Benghanem",
                prenom: "Ines",
                Sexe: "Fille",
                Age: "4",
                Jour: "12/05/2023",
    
              },
              {
                nom: "Benghanem",
                prenom: "Riyad",
                Sexe: "Garcon",
                Age: "3",
                Jour: "12/05/2023",
    
              },
              {
                nom: "Benghanem",
                prenom: "Wassim",
                Sexe: "Garcon",
                Age: "5",
                Jour: "12/05/2023",
    
              },
              {
                nom: "Benghanem",
                prenom: "yacine",
                Sexe: "Gracon",
                Age: "3",
                Jour: "12/05/2023",
    
              },
              {
                nom: "Benghanem",
                prenom: "Riyad",
                Sexe: "Garcon",
                Age: "3",
                Jour: "12/05/2023",
    
              },
              {
                nom: "Benghanem",
                prenom: "Wassim",
                Sexe: "Garcon",
                Age: "5",
                Jour: "12/05/2023",
    
              },
            ]
          },
          {   name: "Jamal Bouchendouka",
          email: "Jamal.Bouchendouka@example.com",
          Tel: "0563748202",
         
    
            Enfants:[
              {
                nom: "Bouchendouka",
                prenom: "Ines",
                Sexe: "Fille",
                Age: "4",
                Jour: "12/05/2023",
              },
              {
                nom: "Bouchendouka",
                prenom: "Riyad",
                Sexe: "Garcon",
                Age: "3",
                Jour: "12/05/2023",
              },
              {
                nom: "Bouchendouka",
                prenom: "Wassim",
                Sexe: "Garcon",
                Age: "5",
                Jour: "12/05/2023",
              },
              {
                nom: "Bouchendouka",
                prenom: "yacine",
                Sexe: "Gracon",
                Age: "3",
                Jour: "12/05/2023",
              },
            ]
          },
          {   name: "Leslie Alexander",
          email: "leslie.alexander@example.com",
          Tel: "0563748202",
          
    
            Enfants:[
              {
                nom: "Benghanem",
                prenom: "Ines",
                Sexe: "Fille",
                Age: "4",
                Jour: "12/05/2023",
              },
              {
                nom: "Taibi",
                prenom: "Riyad",
                Sexe: "Garcon",
                Age: "3",
                Jour: "12/05/2023",
              },
              {
                nom: "Remadna",
                prenom: "Wassim",
                Sexe: "Garcon",
                Age: "5",
                Jour: "12/05/2023",
              },
              {
                nom: "Bouchendouka",
                prenom: "yacine",
                Sexe: "Gracon",
                Age: "3",
                Jour: "12/05/2023",
              },
            ]
          },
     
        ],
      },
      {
        nameCreche: "Le jardin des merveilles",
        Client: [
          {   name: "Leslie Alexander",
          email: "leslie.alexander@example.com",
          Tel: "0563748202",
         
    
            Enfants:[
              {
                nom: "Benghanem",
                prenom: "Ines",
                Sexe: "Fille",
                Age: "4",
                Jour: "12/05/2023",
              },
              {
                nom: "Taibi",
                prenom: "Riyad",
                Sexe: "Garcon",
                Age: "3",
                Jour: "12/05/2023",
              },
              {
                nom: "Remadna",
                prenom: "Wassim",
                Sexe: "Garcon",
                Age: "5",
                Jour: "12/05/2023",
              },
              {
                nom: "Bouchendouka",
                prenom: "yacine",
                Sexe: "Gracon",
                Age: "3",
                Jour: "12/05/2023",
              },
            ]
          },
          {   name: "Leslie Alexander",
          email: "leslie.alexander@example.com",
          Tel: "0563748202",
          
    
            Enfants:[
              {
                nom: "Benghanem",
                prenom: "Ines",
                Sexe: "Fille",
                Age: "4",
                Jour: "12/05/2023",
              },
              {
                nom: "Taibi",
                prenom: "Riyad",
                Sexe: "Garcon",
                Age: "3",
                Jour: "12/05/2023",
              },
              {
                nom: "Remadna",
                prenom: "Wassim",
                Sexe: "Garcon",
                Age: "5",
                Jour: "12/05/2023",
              },
              {
                nom: "Bouchendouka",
                prenom: "yacine",
                Sexe: "Gracon",
                Age: "3",
                Jour: "12/05/2023",
              },
            ]
          },
          {   name: "Leslie Alexander",
          email: "leslie.alexander@example.com",
          Tel: "0563748202",
       
    
            Enfants:[
              {
                nom: "Benghanem",
                prenom: "Ines",
                Sexe: "Fille",
                Age: "4",
                Jour: "12/05/2023",
              },
              {
                nom: "Taibi",
                prenom: "Riyad",
                Sexe: "Garcon",
                Age: "3",
                Jour: "12/05/2023",
              },
              {
                nom: "Remadna",
                prenom: "Wassim",
                Sexe: "Garcon",
                Age: "5",
                Jour: "12/05/2023",
              },
              {
                nom: "Bouchendouka",
                prenom: "yacine",
                Sexe: "Gracon",
                Age: "3",
                Jour: "12/05/2023",
              },
            ]
          },
     
        ],
      },
      {
        nameCreche: " EL Tofoula",
        Client: [
          {   name: "Leslie Alexander",
          email: "leslie.alexander@example.com",
          Tel: "0563748202",
         
    
            Enfants:[
              {
                nom: "Benghanem",
                prenom: "Ines",
                Sexe: "Fille",
                Age: "4",
                Jour: "12/05/2023",
              },
              {
                nom: "Taibi",
                prenom: "Riyad",
                Sexe: "Garcon",
                Age: "3",
                Jour: "12/05/2023",
              },
            
            ]
          },
          {   name: "Leslie Alexander",
          email: "leslie.alexander@example.com",
          Tel: "0563748202",
          
    
            Enfants:[
              {
                nom: "Benghanem",
                prenom: "Ines",
                Sexe: "Fille",
                Age: "4",
                Jour: "12/05/2023",
              },
              {
                nom: "Taibi",
                prenom: "Riyad",
                Sexe: "Garcon",
                Age: "3",
                Jour: "12/05/2023",
              },
            ]
          },
          {   name: "Leslie Alexander",
          email: "leslie.alexander@example.com",
          Tel: "0563748202",
         
    
            Enfants:[
              {
                nom: "Benghanem",
                prenom: "Ines",
                Sexe: "Fille",
                Age: "4",
                Jour: "12/05/2023",
              },
              {
                nom: "Taibi",
                prenom: "Riyad",
                Sexe: "Garcon",
                Age: "3",
                Jour: "12/05/2023",
              },
            ]
          },
     
        ],
      },
    ],
  };



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
        Nouvelles reservations
      </h2>
      <ul role="list" className="mx-[5%] sm:mx-[10%] ld:mx-[20%]">
        {UserProprio.CrechesProprio.map((Creche) => (
          
          <li
            key={UserProprio.email}
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
                  <p className="text-sm font-semibold leading-6 text-blue-950">
                    {UserProprio.name}
                  </p>
                  <p className="mt-1 font-semibold  truncate text-sm leading-6 text-blue-950">
                    {UserProprio.email}
                  </p>
                  <p className="mt-1 font-semibold  truncate text-sm leading-8 text-blue-950">
                    {UserProprio.Tel}
                  </p>
                </div>
              </div>
              {/* {Creche.Enfant.map((Creche) => ( */}
                <div className="hidden sm:flex sm:flex-col ">
                  <p className="text-lg font-semibold  leading-6 text-blue-950">
                     {/* {CrechesProprio.nom} */}
                  </p>

                  <p className="mt-1 text-lg font-semibold  leading-6 text-blue-950">
                    {/* {CrechesProprio.prenom} */}
                  </p>
                  <p className="mt-1 text-lg font-semibold  leading-6 text-blue-950">
                     {/* {CrechesProprio.Age} */}
                  </p>
                  <p className="mt-1 text-lg font-semibold  leading-6 text-blue-950">
                     {/* {CrechesProprio.Sexe} */}
                  </p>
                  {/* <p className="text-lg mt-5 leading-6 font-bold text-[#ff4242]">
                        <span className="text-blue-950 font-semibold">Creche : </span>
                        {Creche.nameCreche}
                      </p> */}
                </div>
              {/* ))} */}
              ,
              <div className="hidden sm:flex sm:flex-col sm:items-end">
              
                <p className="text-lg  font-bold text-[#ff4242]">
                  <span className="text-blue-950 font-semibold">Creche : </span>
                  {Creche.nameCreche} 
                </p>
               
              </div>
            </div>
            

            <Accordion flush={true}   >
  <Accordion.Panel>
    <Accordion.Title>
    <h2 className="text-lg font-semibold  text-[#e83775]">   Les reservations </h2>
    </Accordion.Title>
    <Accordion.Content>
    {Creche.Client.map((Client) => (<>
    
    <div className=" mt-5 pb-5">
      <div className="flex gap-x-4">

      {/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={User.imageUrl} alt="" /> */}
      {/* <UserCircleIcon
        className="h-12 w-12 text-[#000000] "
        aria-hidden="true"
      /> */}
      <div className="min-w-0 flex-auto">
        <h2 className="text-lg text-rose-900 font-semibold">
       Informations du client
        </h2>
        <p className="text-sm font-semibold leading-6 text-gray-900">
          {Client.name}
        </p>
        <p className="mt-1 font-semibold  truncate text-sm leading-6 text-blue-950">
          {Client.email}
        </p>
        <p className="mt-1 font-semibold  truncate text-sm leading-8 text-blue-950">
          {Client.Tel}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className="text-sm rounded-md ring-2 ring-[#091098] px-4 py-1.5 bg-[#d81b1b] font-semibold leading-6 text-white hover:bg-[red] hover:scale-105 duration-100 "
              >
                <a href="/">Annuler</a>
              </button>
              {/* <Decaler /> */}
            </div>
 
        
    </div>
    <Accordion flush={true}  >
  <Accordion.Panel>
    <Accordion.Title>
      <h2 className="text-lg font-semibold text-[#e83775] "> Les enfants du client</h2>
    </Accordion.Title>
    <Accordion.Content>
    {Client.Enfants.map((Enfants) => (<>
    <div className="mt-5 pb-5">
    <div className="flex gap-x-4">

{/* <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={User.imageUrl} alt="" /> */}
{/* <UserCircleIcon
  className="h-12 w-12 text-[#000000] "
  aria-hidden="true"
/> */}
<div className="min-w-0 flex-auto">
  <h2 className="text-lg text-[#ff4242] font-semibold">
    Informations de l'enfant
  </h2>
  <div className="ld:grid-cols-2 ld:grid">
  <div>
  <p className="mt-1 text-sm font-semibold leading-6 text-blue-950">
  <span className="text-gray-900"> Nom : </span>{Enfants.nom}
  </p>
  <p className="mt-1 font-semibold  truncate text-sm leading-6 text-blue-950">
  <span className="text-gray-900">   Prenom : </span>{Enfants.prenom}
  </p>
  </div>
  <div>
  <p className="mt-1 font-semibold  truncate text-sm leading-6 text-blue-950">
  <span className="text-gray-900"> Age : </span>{Enfants.Age}
  </p>
  <p className="mt-1 font-semibold  truncate text-sm leading-6 text-blue-950">
  <span className="text-gray-900">     Sexe :  </span>{Enfants.Sexe} 
        </p>
        </div>
</div>
</div>

<div className="hidden sm:flex sm:flex-col sm:items-end">
              
          
             
              
<p className="text-lg  font-bold text-[#ff4242]">
                <span className="text-blue-950 text-md font-normal">Date de reservation : </span>
                {Enfants.Jour} 
              </p>    
              </div>
       
   
</div>
    </div>
    </>))}
    </Accordion.Content>
  </Accordion.Panel>


</Accordion>
    </div>
    </>
    ))}
    </Accordion.Content>
  </Accordion.Panel>
 
 
</Accordion>

          </li>
         ))} 
      </ul>
      <footer className="mt-10">
        <Footer />
      </footer>
    </>
  );
};

export default ReservationProprio
import React from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import AccordionPlusImage from "../../../PagesAccordions/AccordionPlusImage";
import AccordionHoraires from "../../../PagesAccordions/AccordionHoraires";
import { useRef, useState } from "react";

import { Link } from "react-router-dom";
import Select from "react-select";

const FormCreche = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef();
  const inputRef = useRef();
  const formRef = useRef();
  const JoursAcc = [
    { value: 1, label: "Dimanche" },
    { value: 2, label: "Lundi" },
    { value: 3, label: "Mardi" },
    { value: 4, label: "Mercredi" },
    { value: 5, label: "Jeudi" },
    { value: 6, label: "Vendredi" },
    { value: 7, label: "Samedi" },
  ];
  const AgeAcc = [
    { value: 1, label: "2 Ans" },
    { value: 2, label: "3 Ans" },
    { value: 3, label: "4 Ans" },
    { value: 4, label: "5 Ans" },
    { value: 5, label: "6 Ans" },
  ];
  const Typeetab = [
    { value: 21, label: "Etatique" },
    { value: 2, label: "Privé" },
  ];

  const Typeaccueil = [
    { value: 1, label: "Occasionnel" },
    { value: 2, label: "Régulier" },
  ];

  const Mixité = [
    { value: 1, label: "Les deux " },
    { value: 2, label: "Garcons uniquement" },
    { value: 3, label: "Filles uniquement" },
  ];

  const Pedagogie = [
    { value: 1, label: "Reggio Emilia" },
    { value: 2, label: "Snoezelen" },
    { value: 3, label: "Montessori" },
    { value: 4, label: "Pikler-Loczy" },
    { value: 5, label: "Steiner-Waldorf" },
    { value: 6, label: "Freinet" },
    { value: 7, label: "Faber et Mazlish" },
  ];
  const Dispo = [
    { value: 2, label: "Places disponibles" },
    { value: 3, label: "Complet" },
  ];

  const Langues = [
    { value: 1, label: "Aucun" },
    { value: 2, label: "Francais" },
    { value: 3, label: "Anglais" },
    { value: 4, label: "Francais et Anglais" },
  ];

  const Rayon = [
    { value: 1, label: "Aucun" },
    { value: 2, label: "2 Km" },
    { value: 3, label: "5 Km" },
    { value: 4, label: "10 Km" },
    { value: 5, label: "15 Km" },
    { value: 6, label: "30 Km" },
    { value: 7, label: "50 Km" },
    { value: 8, label: "100 Km" },
  ];

  const Capacité = [
    { value: 1, label: "Aucun" },
    { value: 2, label: "jusqu'à 50 places" },
    { value: 3, label: "jusqu'à 100 places" },
    { value: 4, label: "jusqu'à 200 places" },
    { value: 5, label: "jusqu'à 300 places" },
    { value: 6, label: "jusqu'à 400 places" },
    { value: 7, label: "jusqu'à 500 places" },
    { value: 8, label: "jusqu'à 600 places" },
  ];

  const Evaluation = [
    { value: 1, label: "Aucun" },
    { value: 2, label: " 3 étoiles " },
    { value: 3, label: " 4 étoiles " },
    { value: 4, label: " 5 étoiles " },
  ];

  const ServiceSupp = [
    { value: 1, label: "Transport" },
    { value: 2, label: "Alimentation" },
    { value: 3, label: "Médecin" },
    { value: 4, label: "Enfants-Handicapes" },
    { value: 5, label: "Classes-Préparatoires" },
  ];
  const WilayaOptions = [
    { value: 1, label: "Aucun" },
    { value: 2, label: "1-Adrar" },
    { value: 3, label: "2-Chlef" },
    { value: 4, label: "3-Laghouat" },
    { value: 5, label: "4-Oum El Bouaghi" },
    { value: 6, label: "5-Batna" },
    { value: 7, label: "6-Bejaia" },
    { value: 8, label: "7-Beskra" },
    { value: 9, label: "8-Bechar" },
    { value: 10, label: "9-Blida" },
    { value: 11, label: "10-Bouira" },
    { value: 12, label: "11-Tamanrasset" },
    { value: 13, label: "12-Tebessa" },
    { value: 14, label: "13-Telemcen" },
    { value: 15, label: "14-Tiaret" },
    { value: 16, label: "15-Tizi-ouzou" },
    { value: 17, label: "16-Alger" },
    { value: 18, label: "17-Djelfa" },
    { value: 19, label: "18-Jijel" },
    { value: 20, label: "19-Setif" },
    { value: 21, label: "20-Saida" },
    { value: 22, label: "21-Skikda" },
    { value: 23, label: "22-Sidi Bel Abbes" },
    { value: 24, label: "23-Annaba" },
    { value: 25, label: "24-Guelma" },
    { value: 26, label: "25-Constantine" },
    { value: 27, label: "26-Médéa" },
    { value: 28, label: "27-Mostaganem" },
    { value: 29, label: "28-M'Sila" },
    { value: 30, label: "29-Mascara" },
    { value: 31, label: "30-Ouargla" },
    { value: 32, label: "31-Oran" },
    { value: 33, label: "32-El Bayadh" },
    { value: 34, label: "33-Illizi" },
    { value: 35, label: "34-Bordj Bou Arreridj" },
    { value: 36, label: "35-Boumerdès" },
    { value: 37, label: "36-El Tarf" },
    { value: 38, label: "37-Tindouf" },
    { value: 39, label: "38-Tissemsilt" },
    { value: 40, label: "39-El Oued" },
    { value: 41, label: "40-Khenchela" },
    { value: 42, label: "41-Souk Ahras" },
    { value: 43, label: "42-Tipaza" },
    { value: 44, label: "43-Mila" },
    { value: 45, label: "44-Aïn Defla" },
    { value: 46, label: "45-Naâma" },
    { value: 47, label: "46-Aïn Témouchent" },
    { value: 48, label: "47-Ghardaïa" },
    { value: 49, label: "48-Relizane" },
    { value: 50, label: "49-Timimoun" },
    { value: 51, label: "50-Bordj Badji Mokhtar" },
    { value: 52, label: "51-Ouled Djellal" },
    { value: 53, label: "52-Béni Abbès" },
    { value: 54, label: "53-In Salah" },
    { value: 55, label: "54-In Guezzam" },
    { value: 56, label: "55-Touggourt" },
    { value: 57, label: "56-Djanet" },
    { value: 58, label: "57-El M'Ghair" },
    { value: 59, label: "58-El Meniaa " },
  ];
  return (
    <form className="FormInscription">
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-blue-950"
              >
                Nom de la creche:
              </label>
              <div className="mt-2">
                <input
                  onKeyPress={(event) => {
                    if (!/[a-zA-Z]/i.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="text"
                  name="Crechename"
                  id="Crechename"
                  autoComplete="Crechename"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="ml-3 block text-l font-medium leading-6 text-blue-950"
                  >
                    A propos de vous
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-950 sm:py-2 px-2 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mt-3 ml-3 text-sm leading-6 text-gray-700">
                    Ecrivez quelques phrases sur vous.
                  </p>
                </div> */}

            <h2 className="col-span-full text-lg leading-6 text-rose-900 font-bold">
              Informations concernant la localisation
            </h2>
            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-blue-950"
              >
                Adresse complete de la creche :
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street-address"
                  id="street-address"
                  autoComplete="street-address"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <div id="select">
                <div className="block text-sm font-medium leading-6 text-blue-950 ">
                  <label
                    htmlFor="type"
                    value="Select your type font-[Inter] text-blue-950"
                  >
                    Wilaya:
                  </label>
                </div>
                <div className="ring-2 ring-red-400 rounded-md mt-2">
                  <Select options={WilayaOptions} />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-blue-950"
              >
                Commune
              </label>
              <div className="mt-2">
                <div className="ring-2 ring-red-400 rounded-md mt-2">
                  <Select className="z-[10] " options={WilayaOptions} />
                </div>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Code postal
              </label>
              <div className="mt-2">
                <input
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-full">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-blue-950"
              >
                Lien Url de la localisation :
              </label>
              <div className="mt-2">
                <input
                  type="url"
                  name="CrecheUrl"
                  id="CrecheUrl"
                  autoComplete="given-url"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <h2 className="col-span-full text-rose-950">
              Informations sur les contacts
            </h2>
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-blue-950"
              >
                Addresse mail de la creche
              </label>
              <div className="mt-2">
                <input
                  id="email_Creche"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-blue-950"
              >
                Numero de telephone de la creche
              </label>
              <div className="mt-2">
                <input
                  onKeyPress={(event) => {
                    if (!/[0-9]/i.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className=" col-span-full text-lg leading-6 text-rose-900 font-bold">
            Details de la creche{" "}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 xs:grid-cols-6">
            {/* Type etablissement */}
            <div className=" m-3 col-span-2">
              <label
                htmlFor="etab"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Type d'etablissement
              </label>
              <div className="ring-2 ring-red-400 rounded-md mt-2">
                <Select className="z-[65] " options={Typeetab} />
              </div>
            </div>

            {/* Type accueil */}
            <div className=" m-3 col-span-2">
              <label
                htmlFor="acceuil"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Type d'accueil
              </label>
              <div className="ring-2 ring-red-400 rounded-md mt-2">
                <Select className="z-[65] " options={Typeaccueil} />
              </div>
            </div>

            {/* Pedagogie */}
            <div className=" m-3 col-span-2">
              <label
                htmlFor="pedagogie"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Pédagogie
              </label>
              <div className="ring-2 ring-red-400 rounded-md mt-2">
                <Select className="z-[65] " options={Pedagogie} />
              </div>
            </div>

            {/* Langues  */}
            <div className=" m-3 col-span-2">
              <label
                htmlFor="Langue"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Langue supplémentaires
              </label>
              <div className="ring-2 ring-red-400 rounded-md mt-2">
                <Select className="z-[55] " options={Langues} />
              </div>
            </div>

            {/* Services */}
            <div className="m-3 col-span-2">
              <label
                htmlFor="etab"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Services Particuliers
              </label>
              <div className="ring-2 ring-red-400 rounded-md mt-2">
                <Select
                  isMulti={true}
                  className="z-[55]"
                  options={ServiceSupp}
                />
              </div>
            </div>

            {/* mixitee */}
            <div className=" m-3 col-span-2 ">
              <label
                htmlFor="capacité"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mixité
              </label>
              <div className="ring-2 ring-red-400 rounded-md mt-2">
                <Select className="z-[45] " options={Mixité} />
              </div>
            </div>

            {/* disponibilitee des places */}
            <div className="ml-3 col-span-2">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-blue-950"
              >
                Places diponibles
              </label>
              <div className="mt-2">
                <input
                  onKeyPress={(event) => {
                    if (!/[0-9]/i.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="text"
                  name="Place_dispo"
                  id="Place_dispo"
                  autoComplete="Place_dispo"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            {/* Capacitee Max */}
            <div className=" ml-3  col-span-2">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-blue-950"
              >
                Capacitee maximale
              </label>
              <div className="mt-2">
                <input
                  onKeyPress={(event) => {
                    if (!/[0-9]/i.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="text"
                  name="Place_dispo"
                  id="Place_dispo"
                  autoComplete="Place_dispo"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full"></div>
            {/* Age d'accueil */}
            <h2 className=" col-span-full text-lg leading-6 text-rose-900 font-bold ">
              Age d'accueil
            </h2>
            <div className="mx-3 col-span-2">
              <label
                htmlFor="etab"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Age Minimum
              </label>
              <div className=" ring-red-400 rounded-md mt-2">
                <input
                  onKeyPress={(event) => {
                    if (!/[0-9]/i.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="mx-3 col-span-2">
              <label
                htmlFor="etab"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Age maximum
              </label>

              <div className=" ring-red-400 rounded-md mt-2">
                <input
                  onKeyPress={(event) => {
                    if (!/[0-9]/i.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="xxs:col-span-full" />

            <h2 className=" text-lg  text-rose-900 font-bold">
              Jours d'accueil
            </h2>

            <div className="  col-span-full sm:mt-0">
              <h2 className="text-gray-700">
                cochez les jours de la semaine ou vous etes ouverts puis
                choisissez vos horraires d'ouverture et de fermeture
              </h2>
              <ul className="flex flex-row col-span-full">
                <div>
                  <li className="my-5 flex flex-row text-md leading-6 text-blue-950 font-bold">
                    Dimanche {" "}
                    <div className="ml-2">
                      <AccordionHoraires />
                    </div>
                  </li>

                  <li className="my-5 flex flex-row text-md leading-6 text-blue-950 font-bold">
                    Lundi {" "}
                    <div className="ml-11">
                      <AccordionHoraires />
                    </div>
                  </li>
                  <li className="my-5 flex flex-row text-md leading-6 text-blue-950 font-bold">
                    {" "}
                    Mardi {" "}
                    <div className="ml-11">
                      <AccordionHoraires />
                    </div>
                  </li>
                  <li className="my-5 flex flex-row text-md leading-6 text-blue-950 font-bold">
                    Mercredi {" "}
                    <div className="ml-5">
                      <AccordionHoraires />
                    </div>
                  </li>
                  <li className="my-5 flex flex-row text-md leading-6 text-blue-950 font-bold">
                    Jeudi {" "}
                    <div className="ml-12">
                      <AccordionHoraires />
                    </div>
                  </li>
                  <li className="my-5 flex flex-row text-md leading-6 text-blue-950 font-bold">
                    Vendredi 
                    <div className="ml-5">
                      <AccordionHoraires />
                    </div>
                  </li>
                  <li className="my-5 flex flex-row text-md leading-6 text-blue-950 font-bold">
                    Samedi {" "}
                    <div className="ml-8">
                      <AccordionHoraires />
                    </div>
                  </li>
                </div>
                <div className="ml-3 font-medium">
                  {/* <li>{props.hmar1} - {props.hmar2} </li>
                    <li>{props.hmer1} - {props.hmer2} </li>
                    <li>{props.hjeu1} - {props.hjeu2} </li>
                    <li>{props.hven1} - {props.hven2} </li>
                    <li>{props.hsam1} - {props.hsam2} </li> */}
                </div>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-9">
          <h2 className="ml-2 mb-3 text-lg leading-6 text-rose-900 font-bold  ">
            Tarifs{" "}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
            <div className="sm:col-span-3">
              <label
                htmlFor="Tarifs"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Paiement en Dinar/Mois
              </label>
              <div className="mt-2">
                <input
                  onKeyPress={(event) => {
                    if (!/[0-9]/i.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="text"
                  name="tarifs"
                  id="tarifs"
                  autoComplete="tarifs"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-900/10 pb-12">
          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="ml-3 mb-5 block text-l  leading-6 text-lg  text-rose-900 font-bold"
            >
              Inserer des photos de cette creche
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-red-400 px-6 py-10 bg-white">
              <div className="text-center">
                <PhotoIcon
                  className="mx-auto h-12 w-12 text-gray-400"
                  aria-hidden="true"
                />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-red-500 focus-within:outline-none focus-within:ring-2  focus-within:ring-indigo-100 focus-within:ring-offset-2  hover:text-indigo-900"
                  >
                    <span>Inserer une image</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">
                  PNG, JPG, GIF jusqu'a 10MB
                </p>
              </div>
            </div>
            <AccordionPlusImage />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-blue-950 hover:text-red-500"
        >
          <a href="/MesCreches">Annuler</a>
        </button>
        <button
          type="submit"
          className="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 hover:scale-105 duration-100 ring-2 ring-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <a href="/MesCreches">Sauvgarder</a>
        </button>
      </div>
    </form>
  );
};

export default FormCreche;

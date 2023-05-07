import React, { useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Select from "react-select";


const Searchbar = () => {
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
        { value: 7, label: "Samedi" }

    ]
    const AgeAcc = [
        { value: 1, label: "2 Ans" },
        { value: 2, label: "3 Ans" },
        { value: 3, label: "4 Ans" },
        { value: 4, label: "5 Ans" },
        { value: 5, label: "6 Ans" }

    ]
    const Typeetab = [
        { value: 1, label: "Aucun" },
        { value: 2, label: "Etatique" },
        { value: 3, label: "Privé" }
    ]

    const Typeaccueil = [
        { value: 1, label: "Aucun" },
        { value: 2, label: "Occasionnel" },
        { value: 3, label: "Régulier" },

    ]

    const Mixité = [
        { value: 1, label: "Aucun" },
        { value: 2, label: "Garcons uniquement" },
        { value: 3, label: "Filles uniquement" },

    ]

    const Pedagogie = [
        { value: 1, label: "Aucun" },
        { value: 2, label: "Reggio Emilia" },
        { value: 3, label: "Montessori" },
        { value: 4, label: "Pikler-Loczy" },
        { value: 5, label: "Steiner-Waldorf" },
        { value: 6, label: "Freinet" },
        { value: 7, label: "Faber et Mazlish" },
        { value: 8, label: "Snoezelen" },

    ]
    const Dispo = [
        { value: 1, label: "Aucun" },
        { value: 2, label: "Places disponibles" },
        { value: 3, label: "Complet" },
    ]

    const Langues = [
        { value: 1, label: "Aucun" },
        { value: 2, label: "Francais" },
        { value: 3, label: "Anglais" },
        { value: 4, label: "Francais et Anglais" },

    ]

    const Rayon = [
        { value: 1, label: "Aucun" },
        { value: 2, label: "2 Km" },
        { value: 3, label: "5 Km" },
        { value: 4, label: "10 Km" },
        { value: 5, label: "15 Km" },
        { value: 6, label: "30 Km" },
        { value: 7, label: "50 Km" },
        { value: 8, label: "100 Km" },

    ]

    const Capacité = [
        { value: 1, label: "Aucun" },
        { value: 2, label: "jusqu'à 50 places" },
        { value: 3, label: "jusqu'à 100 places" },
        { value: 4, label: "jusqu'à 200 places" },
        { value: 5, label: "jusqu'à 300 places" },
        { value: 6, label: "jusqu'à 400 places" },
        { value: 7, label: "jusqu'à 500 places" },
        { value: 8, label: "jusqu'à 600 places" },
    ]

    const Evaluation = [
        { value: 1, label: "Aucun" },
        { value: 2, label: " 3 étoiles " },
        { value: 3, label: " 4 étoiles " },
        { value: 4, label: " 5 étoiles " },
    ]

    const ServiceSupp = [
        { value: 1, label: "Transport" },
        { value: 2, label: "Alimentation" },
        { value: 3, label: "Médecin" },
        { value: 4, label: "Enfants-Handicapes" },
        { value: 5, label: "Classes-Préparatoires" },
    ]
    const Wilaya = [
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
    ]


    window.addEventListener('click', (e) => {
        if (e.target !== menuRef.current && e.target !== inputRef.current && e.target === formRef.current) {
            setOpen(false);
        }
    })
    return (
        <div className=" font-inter mt-1 w-full h-full flex flex-col justify-center text-center text-white p-4">
          

            <div className="Searchbar flex flex-col mt-4">
                {/* <form
                    className="flex justify-between items-center max-w-[700px] mx-auto w-full border border-[#ED6361] p-1
          rounded-xl text-white bg-[#63132f] ring ring-[#d84f4f] hover:scale-105 duration-75 pr-2"
                >
                    <div>
                        <input
                            onClick={() => setOpen(!open)}
                            ref={inputRef}
                            className="bg-transparent w-full font-[Inter] focus:outline-none pl-5"
                            type="text" 
                            placeholder="  Saisissez un lieu"
                        />
                    </div>

                     <div> 
                     <a href="/SearchResults">    <button className=" mr-1 p-3  border-[#ED6361] bg-transparent rounded-md hover:scale-105 duration-300 hover:bg-[#ED6361] hover:border-rose-950">
                         <AiOutlineSearch
                                size={20}
                                className="color:#5B112B text-2xl cursor-pointer"
                            /> 
                        </button></a>
                     
                    </div>   
                </form> */}
                
<form className=" ">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Rechercher</label>
    <div class="relative ">
        <div class="absolute inset-y-0  flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input 
         onClick={() => setOpen(!open)}
         ref={inputRef}
        type="search" id="default-search" class="block w-full p-4 pl-10 text-sm  border border-gray-300 rounded-xl text-white bg-[#63132f] focus:ring-[#ff5454] focus:border-[#ff5454] " placeholder=" Saisissez un lieu" required />
        <button type="submit" class="text-white absolute right-2.5 bottom-[7px] bg-[#f3817f] border-2 border-[#fb4747] hover:scale-105 duration-300 hover:bg-[#ED6361] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2  hover:bg-rosee-700 focus:ring-rose-800">Rechercher</button>
    </div>
</form>

                {open &&
                    <div ref={menuRef} className="flex justify-center mx-auto items-center bg-white font-medium text-blue-950 ring ring-[#ff4f4f] w-full   mt-3 rounded-xl max-w-[700px]">
                        <form ref={formRef} className=" grid pio:grid-cols-2 xs:grid-cols-3" >
                            
                            <div className="mx-3 my-3">
                                <label
                                    htmlFor="etab"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Age d'acceuil
                                </label>
                                <div className="mt-2">
                                    <Select isMulti={true} className="z-[70]  " options={AgeAcc} />
                                </div>

                            </div>
                            <div className="mx-3 my-3">
                                <label
                                    htmlFor="etab"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Services Particuliers
                                </label>
                                <div className="mt-2">
                                    <Select isMulti={true} className="z-[65]" options={ServiceSupp} />
                                </div>
                            </div>

                            <div className="mx-3 my-3">
                                <label
                                    htmlFor="etab"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Jours d'acceuils
                                </label>
                                <div className="mt-2">
                                    <Select isMulti={true} className="z-[60] " options={JoursAcc} />
                                </div>
                            </div>
                            <div className=" mx-3 my-3">
                                <label
                                    htmlFor="etab"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Type d'etablissement
                                </label>
                                <div className="mt-2">
                                    <Select className="z-[55] " options={Typeetab} />
                                </div>
                            </div>

                            <div className=" mx-3 my-3">
                                <label
                                    htmlFor="acceuil"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Type d'accueil
                                </label>
                                <div className="mt-2">
                                    <Select className="z-[50] " options={Typeaccueil} />
                                </div>
                            </div>

                            <div className=" mx-3 my-3">
                                <label
                                    htmlFor="pedagogie"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Pédagogie
                                </label>
                                <div className="mt-2">
                                    <Select className="z-[45] " options={Pedagogie} />
                                </div>
                            </div>

                            <div className=" mx-3 my-3">
                                <label
                                    htmlFor="dispo"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Disponibilité
                                </label>
                                <div className="mt-2">
                                    <Select className="z-[40]" options={Dispo} />
                                </div>
                            </div>

                            <div className=" mx-3 my-3">
                                <label
                                    htmlFor="Langue"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Langue supplémentaires
                                </label>
                                <div className="mt-2">
                                    <Select className="z-[35] " options={Langues} />
                                </div>
                            </div>

                            <div className=" mx-3 my-3">
                                <label
                                    htmlFor="rayon"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Rayon
                                </label>
                                <div className="mt-2">
                                    <Select className="z-[30] " options={Rayon} />
                                </div>
                            </div>
                            <div className=" mx-3 my-3">
                                <label
                                    htmlFor="capacité"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Capacité
                                </label>
                                <div className="mt-2">
                                    <Select className="z-[25] " options={Capacité} />
                                </div>
                            </div>

                            <div className=" mx-3 my-3">
                                <label
                                    htmlFor="capacité"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Evaluation
                                </label>
                                <div className="mt-2">
                                    <Select className="z-[20] " options={Evaluation} />
                                </div>
                            </div>

                            <div className=" mx-3 my-3">
                                <label
                                    htmlFor="capacité"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Wilaya
                                </label>
                                <div className="mt-2">
                                    <Select className="z-[15]  " options={Wilaya} />
                                </div>
                            </div>
                            <div className=" mx-3 my-3">
                                <label
                                    htmlFor="capacité"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Communes
                                </label>
                                <div className="mt-2">
                                    <Select className="z-[10] " options={Wilaya} />
                                </div>
                            </div>

                            <div className=" mx-3 my-3">
                                <label
                                    htmlFor="capacité"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Mixité
                                </label>
                                <div className="mt-2">
                                    <Select className="z-[5] " options={Mixité} />
                                </div>
                            </div>
                           
                        </form>

                    </div>
                }
            </div>
        </div>

    );
};

export default Searchbar;


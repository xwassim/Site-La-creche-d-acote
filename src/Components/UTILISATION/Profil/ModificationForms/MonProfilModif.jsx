import React from 'react'

import Select from "react-select";


const MonProfilModif = () => {
  const WilayaOptions = [
    { value: "Adrar", label: "1-Adrar" },
    { value: "Chlef", label: "2-Chlef" },
    { value: "Laghouat", label: "3-Laghouat" },
    { value: "Oum El Bouaghi", label: "4-Oum El Bouaghi" },
    { value: "Batna", label: " 5-Batna" },
    { value: "Béjaïa", label: "6-Béjaïa" },
    { value: "Biskra", label: " 7-Biskra" },
    { value: "Béchar", label: "8-Béchar" },
    { value: "Blida", label: " 9-Blida" },
    { value: "Bouira", label: "10-Bouira" },
    { value: "Tamanrasset", label: "11-Tamanrasset " },
    { value: "Tébessa<", label: "12-Tébessa<" },
    { value: "Tlemcen", label: " 13-Tlemcen" },
    { value: "Tiaret", label: "14-Tiaret" },
    { value: "Tizi Ouzou", label: " 15-Tizi Ouzou" },
    { value: "Alger", label: "16-Alger" },
    { value: "Djelfa", label: "17-Djelfa " },
    { value: "Jijel", label: "18-Jijel" },
    { value: "Sétif", label: "19-Sétif " },
    { value: "Saïda", label: "20-Saïda" },
    { value: "Skikda", label: " 21-Skikda" },
    { value: "Sidi Bel Abbès", label: "22-Sidi Bel Abbès" },
    { value: "Annaba", label: "23-Annaba " },
    { value: "Guelma", label: "24-Guelma" },
    { value: "Constantine", label: " 25-Constantine" },
    { value: "Médéa", label: "26-Médéa" },
    { value: "Mostaganem", label: " 27-Mostaganem" },
    { value: "M'Sila", label: "28-M'Sila" },
    { value: "Mascara", label: " 29-Mascara" },
    { value: "Ouargla", label: "30-Ouargla" },
    { value: "Oran", label: " 31-Oran" },
    { value: "El Bayadh", label: "32-El Bayadh" },
    { value: "Illizi", label: " 33-Illizi" },
    { value: "Bordj Bou Arreridj", label: "34-Bordj Bou Arreridj" },
    { value: "Boumerdès", label: "35-Boumerdès " },
    { value: " El Tarf", label: " 36-El Tarf" },
    { value: "Tindouf", label: " 37-Tindouf" },
    { value: "Tissemsilt", label: "38-Tissemsilt" },
    { value: "El Oued", label: "39-El Oued " },
    { value: "Khenchela", label: "40-Khenchela" },
    { value: "Souk Ahras", label: "41-Souk Ahras " },
    { value: "Tipaza", label: "42-Tipaza" },
    { value: "Mila", label: " 43-Mila " },
    { value: "Aïn Defla", label: "44-Aïn Defla" },
    { value: "Naâma", label: "  45-Naâma" },
    { value: "Aïn Témouchent", label: "46-Aïn Témouchent" },
    { value: "Ghardaïa", label: " 47-Ghardaïa " },
    { value: "Relizane", label: " 48-Relizane" },
    { value: "Timimoun", label: "49-Timimoun " },
    { value: "Bordj Badji Mokhtar", label: " 50-Bordj Badji Mokhtar" },
    { value: "Ouled Djellal", label: " 51-Ouled Djellal" },
    { value: "Béni Abbès ", label: "52-Béni Abbès " },
    { value: "In Salah", label: " 53-In Salah" },
    { value: "In Guezzam", label: "54-In Guezzam" },
    { value: "Touggourt ", label: "55-Touggourt  " },
    { value: "Djanet ", label: "56-Djanet " },
    { value: "El M'Ghair", label: " 57-El M'Ghair" },
    { value: "El Meniaa ", label: "58-El Meniaa " },
  ];
  return (
    <>

    <div className="mx-[5%]">
        <form className="FormInscription">
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-blue-950"
              >
                Nom
              </label>
              <div className="mt-2">
                <input
                   onKeyPress={(event) => {
                    if (!/[a-zA-Z]/i.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-blue-950"
              >
                Prenom
              </label>
              <div className="mt-2">
                <input
                   onKeyPress={(event) => {
                    if (!/[a-zA-Z]/i.test(event.key)) {
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
            <div className="col-span-full">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium leading-6 text-blue-950"
              >
                Votre addresse de residence complete
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
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Addresse mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

    

           

            <div className="sm:col-span-2 sm:col-start-1">
              <div id="select">
                <div className="mb-2 block ">
                  <label
                    htmlFor="type"
                    value="Select your type font-[Inter] text-blue-950"
                  >
                    Wilaya
                  </label>
                </div>
                <div className="ring-2 ring-red-400 rounded-md ">
                  <Select options={WilayaOptions} />
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

            <div className="sm:col-span-2 ">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Numero de telephone
              </label>
              <div className="mt-2">
                <input
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  autoComplete="number"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-blue-950 hover:text-red-500"
        >
          Annuler
        </button>
        <button
          type="submit"
          className="rounded-md bg-red-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 hover:scale-105 duration-100 ring-2 ring-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <a href="/MonProfil">Sauvgarder</a>
        </button>
      </div>
        </form>
      </div>
    </>
  )
}

export default MonProfilModif;
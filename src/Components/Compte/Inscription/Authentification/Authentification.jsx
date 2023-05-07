import React from "react";

import { Link } from "react-router-dom";

function Authentification() {
  return (
    <>
      <div className="titre">
        <h2 className=" text-4xl font-bold">Authentification</h2>
      </div>

      <div className="auth">
        <div className="mt-5 titre">
          <h2 className="phrase font-semibold">
            Verifiez votre boite mail avec un numero qui vous a etait envoyee
            par mail
          </h2>
        </div>
        <div className="code mt-5 flex justify-center">
          <input
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            type="text"
            name="Number"
            id="ConfirmationCode"
            autoComplete="number"
            className=" rounded-xl border-0 mt-5  text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2  text-center focus:ring-inset focus:ring-indigo-600 py-3 ld:py-5  px-6 ld:px-12 "
          ></input>
          {/* 
          <input
            type="number"
            name="2ndNumber"
            id="nb2"
            autoComplete="number"
            className=" rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
          ></input>

          <input
            type="number"
            name="3rdNumber"
            id="nb3"
            autoComplete="number"
            className=" rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
          ></input>

          <input
            type="number"
            name="4thNumber"
            id="nb4"
            autoComplete="number"
            className=" rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
          ></input>

          <input
            type="number"
            name="5thNumber"
            id="nb5"
            autoComplete="number"
            className=" rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
          ></input>

          <input
            type="number"
            name="6thNumber"
            id="nb6"
            autoComplete="number"
            className=" rounded-xl border-0 py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
          ></input> */}
        </div>
        <div className="footerAuth  ">
          <button
            type="submit"
            className=" mt-4 font-semibold text-xl text-blue-950 hover:text-rose-900"
          >
            Renvoyer le code
          </button>

          {/* <a href="/Choice">
            {" "}
            <button
              type="submit"
              className="mt-10 rounded-lg bg-red-400 px-12 py-4 text-xl ring-2 ring-red-500  font-semibold text-white shadow-sm hover:bg-rose-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:scale-105 duration-300"
            >
              Suivant
            </button>
          </a> */}
        </div>
      </div>
    </>
  );
}

export default Authentification;

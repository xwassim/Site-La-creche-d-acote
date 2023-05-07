import React from "react";
import Navbar from "../../Navigation/Navbar";
import Parent from "../../Assets/Parent.svg";
import Proprio from "../../Assets/Proprio.svg";
import { Link } from "react-router-dom";
import Bg from "../../Assets/BlueShapeInclined.svg";

const Choice = () => {
  return (
    <>
      <div className="Choice w-full h-screen   text-rose-900  ">
        <h1 className="text-3xl  pt-5 text-center">Vous etes ?</h1>
        <div className="Choose mt-10 mx-2 flex flex-row">
          <div className="Proprio rounded-md p-10 bg-[#FBEDEC] hover:scale-95 duration-300 mr-2 ring ring-[] ">
            <div className="flex justify-center ">
              <a href="/MenuProprio">
                <img src={Proprio} alt="/"></img>

                <h2 className=" text-3xl text-rose-900 text-center font-semibold mb-3 ">
                  Un Proprietaire
                </h2>
              </a>
            </div>
            <div className="rounded-md bg-[#f9d1d1] p-5 ring ring-[]">
              <h4>
                Un compte propriétaire vous permet de bénéficier des
                fonctionnalités du mode parent, mais également ajouter les
                crèches que vous possédez sur notre site afin d'attirer de
                nouveaux clients. En plus de pouvoir gérer les inscriptions et
                les réservations, ainsi que communiquer par e-mail avec les
                parents intéressés par vos services.{" "}
              </h4>
            </div>
          </div>
          {/* <div class="container">
            <h1 className="text-3xl text-rose-900">Ou bien</h1>
          </div> */}

          <div className="Parent rounded-md p-10 bg-[#FBEDEC] ml-2 ring ring-[] hover:scale-95 duration-300 ">
            <div className="flex justify-center ">
              <a href="/MenuParent">
                {" "}
                <img src={Parent} alt="/"></img>
                <h2 className="text-3xl  text-center font-semibold text-rose-900 mb-3">
                  Un Parent
                </h2>
              </a>
            </div>
            <div className="ring ring-[] rounded-md bg-[#f9d1d1] p-5">
              <h4>
                Un compte parent vous permet d'ajouter à vos favoris les
                différentes crèches disponibles et d'inscrire vos enfants. Vous
                pourrez alors réserver directement une place pour eux dans une
                crèche choisie ou prendre rendez-vous avec une crèche pour en
                savoir plus sur les disponibilités et les modalités
                d'inscription.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choice;

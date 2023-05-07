import React from "react";




function SearchCard(props) {
  const URL='/DescriptionCreche?name='+ props.name;
  return (
    <div className="max-w-[1000px] justify-self-center ">
      <div className="mx-1  my-3 rounded-2xl bg-white font-inter border-4 border-[#ff5252]  ">
        <div className=" grid  text-center items-center w-full border-b-4 border-rose-200  my-3  ">
          <h1 className="font-inter text-3xl  text-rose-950 font-semibold  my-2 justify-self-center">{props.name} </h1>
        </div>
        <div className="grid sm:grid-cols-2 ">
        <div className=" grid  rounded-xl justify-center items-center  justify-self-center ">
           <img src={ props.image[1] }  className="justify-center rounded-3xl ring ring-rose-400 m-5"/>  
         </div>
        <div className="grid justify-center pl-5 ">
          <h1 className="font-inter mt-5 mb-3 justify-self-center "> <span className="font-bold"> Nom : </span> {props.name} </h1>
          <h1 className="font-inter my-3 justify-self-center"> <span className="font-bold"> Location : </span>  {props.Commune} , {props.Wilaya} </h1>
          <h1 className="font-inter my-3  justify-self-center "> <span className="font-bold"> Type d'etablissement : </span> {props.TypeEtab} </h1>
          <h2 className="flex text-left mt-2 justify-center font-semibold text-lg "> <span className="font-semibold"> Tarifs : </span> <span className="ml-1 text-[#f84c4c]">{props.Paiement} DA/Mois</span> </h2>
          <a href={URL} className="justify-self-center" >
            <button className=" bg-red-400 text-white py-2 px-4   w-fit  rounded-md font-medium text-center mt-3 mb-5  ring ring-[#ff4646] hover:bg-[#8a1111] hover:scale-105 duration-0" title="voir details oubien reserver">
              Voir Plus
            </button>
          </a>
        </div>
        

        </div>
      </div>
 


    </div>
  )


}

export default SearchCard; 
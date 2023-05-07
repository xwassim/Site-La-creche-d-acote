import React from "react";
import { AiFillEdit } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from "react-router-dom";



function  CrecheCard (props) {
  const URL='/DescriptionMesCreches?name='+props.name
return (
<div className="mx-3 my-3 rounded-2xl bg-white ring ring-[#ff7c7c] font-inter">
<div className="  grid grid-cols-3 text-center items-center w-full border-b-2 border-red-200 border-t-2 my-3 ">
  
  <div className="justify-self-start ml-[6%] "><a href={URL}>
    
        <button className="bg-[#2b305e] ring ring-[#c21010]   w-fit rounded-md font-medium text-center my-2    hover:scale-105 duration-75 hover:bg-[#091278]" title="Modifier">
          < AiFillEdit size={20} className=' text-center text-white  cursor-pointer mx-1 my-1  xs:mx-2 xs:my-2 md:mx-3 md:my-3' />
        </button>
        </a>
        </div>

        <h1 className="font-inter font-bold justify-self-center">{props.name} </h1>
         <div className="justify-self-end mr-[6%] "><a href={URL}>
        <button className="bg-[#ff6565] justify-self-end  w-fit  rounded-md font-medium text-center my-2  ring ring-[#081060]  hover:scale-105 duration-75 hover:bg-[#c21010]" title="Supprimer">
          < AiFillDelete size={20} className=' text-center text-white cursor-pointer mx-1 my-1 xs:mx-2 xs:my-2 md:mx-3 md:my-3' />
        </button>
        </a>
        </div>
        
 </div>
    <h1 className="font-inter mt-5 mb-3 "> <span className="font-bold"> Nom : </span> {props.name} </h1>
    <h1 className="font-inter my-3"> <span className="font-bold"> Location : </span>  {props.Commune} , {props.Wilaya} </h1>
    <h1 className="font-inter my-3  "> <span className="font-bold"> Description : </span> {props.Description} </h1>
     <a href={URL} >
    <button className=" bg-[#ff9292] text-white  py-2.5 px-8  w-fit  rounded-md font-medium text-center mt-3 mb-5  ring  ring-[#ff4b4b] hover:bg-[#930a0a] hover:scale-105 duration-0" title="Supprimer">
          Voir Plus  
      </button>
      </a>
      
      
      
      
      
    
</div>
    
)


}

export default CrecheCard; 
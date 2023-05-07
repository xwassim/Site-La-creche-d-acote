import React from "react";
import {CrecheSliderdata} from '../../../../data';

import SearchCard from "./SearchCard";


 const Creches = () => { 
   
  const datacamp = CrecheSliderdata.map((data) => {
   
    return (
      
        <SearchCard  name={data.name} Commune={data.Commune} Wilaya={data.Wilaya}  TypeEtab={data.TypeEtab} Paiement={data.Paiement}    image={data.image}  />
      
    )
  }) 

  
      return ( 
      <div className="w-full grid ">
             {datacamp}
      </div>
            

          );
        };

 export default Creches;
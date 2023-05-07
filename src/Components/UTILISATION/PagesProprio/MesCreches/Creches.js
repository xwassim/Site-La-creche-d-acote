import React from "react";
import {CrecheUserx} from '../../../../data';

import CrecheCard from "./CrecheCard";

 const Creches = () => { 
   
  const datacamp = CrecheUserx.map((data) => {
   
    return (
      
        <CrecheCard  name={data.name} Commune={data.Commune} Wilaya={data.Wilaya} Description={data.Description}  />
      
    )
  }) 

  
      return ( 
      <div className="w-full grid xs:grid-cols-2 ">
             {datacamp}
      </div>
            

          );
        };

 export default Creches;
import React  from "react";
import {EnfantUserx} from '../../../data';
import EnfantCard from './Enfantcard';


const Enfants = () => { 

  const datacamp= EnfantUserx.map((data) => {

    return (
      <EnfantCard key={data.key} nom={data.nom} prenom={data.prenom} Sexe={data.Sexe} Age={data.Age} image={data.image} />
    )
  }) 

  
      return ( 
      <div className="w-full grid xs:grid-cols-2 ">
             {datacamp}
      </div>
            

          );
        };

 export default Enfants;
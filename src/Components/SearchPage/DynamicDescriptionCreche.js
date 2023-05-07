import React from "react";
import { CrecheSliderdata} from '../../data';
import { useLocation } from 'react-router-dom';
import DetailsCreche from "./DetailsCreche/DetailsCreche";



const DynamicDescriptionCreche= () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const name = params.get('name');
  
    const filteredItems = CrecheSliderdata.filter(item => item.name === name);
  
    return (
      <div>
       
        { filteredItems.map(item => (
         <DetailsCreche name={item.name} proprio={item.proprio} image={item.image} adr={item.adr} TypeEtab={item.TypeEtab} TypeAcc={item.TypeAcc} Peda={item.Peda} MinAge={item.MinAge} MaxAge={item.MaxAge} Capacite={item.Capacite} PlaceDispo={item.PlaceDispo} 
         hsam1={item.hsam1} hsam2={item.hsam2}
         hdim1={item.hdim1} hdim2={item.hdim2}
         hlun1={item.hlun1} hlun2={item.hlun2}
         hmar1={item.hmar1} hmar2={item.hmar2}
         hmer1={item.hmer1} hmer2={item.hmer2}
         hjeu1={item.hjeu1} hjeu2={item.hjeu2}
         hven1={item.hven1} hven2={item.hven2} 
         Email={item.Email} Tel={item.Tel}
         Paiement={item.Paiement} Description={item.Description}
         Avis={item.Avis} Url={item.Url} 
         Note={item.Note}/>
        
        ))}
   </div>
    );
  };
  
 export default DynamicDescriptionCreche;
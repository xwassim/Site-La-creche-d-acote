import React, { useState } from 'react';
import AccordionSection from './AccordionSection';
import PopUp from '../Functions/PopUp';
import RDVLoggedIN from '../Demande/Prise RDV/TypeRDV/RDVLoggedIN';
import NewAccRDV from '../Demande/Prise RDV/TypeRDV/NewAccRDV';
import ExistAccRDV from '../Demande/Prise RDV/TypeRDV/ExistAccRDV';


const AccordionRDV = () => {
    const [showPopup, setShowPopup] = useState(false);
    function openAccordionRDV() {
        setShowPopup(false); // set state to show accordion pages
      };
      function closeAccordionRDV() {
        setShowPopup(true); // set state to show popup
      }
    const [sections, setSections] = useState([
        { title: <>
        <div className='text-center'>
  <h2 className="text-2xl font-bold font-[Inter] tracking-tight text-blue-950 text-center mt-10 sm:text-3xl hover:cursor-pointer">
         Prenez un Rendez-vous</h2>
          <h2 className='text-sm text-gray-500 font-normal hover:cursor-pointer '>Cliquez pour fermer ou afficher la page</h2>
      
        </div>
    </>, content: <>
    <ExistAccRDV/>
    <RDVLoggedIN/>
    <NewAccRDV/>
        </>, isOpen: true },
        // { title: 'Section 2', content: 'Contenu de la section 2', isOpen: false },
        // { title: 'Section 3', content: 'Contenu de la section 3', isOpen: false },
      ]);
    
      const toggleSection = (index) => {
        const newSections = [...sections];
        newSections[index].isOpen = !newSections[index].isOpen;
        setSections(newSections);
      };
    
      return (
        <div>
          {sections.map((section, index) => (
            <AccordionSection
              key={index}
              title={section.title}
              content={section.content}
              isOpen={section.isOpen}
              toggleSection={() => toggleSection(index)}
            />
          ))}
        </div>
      );
    }
export default AccordionRDV
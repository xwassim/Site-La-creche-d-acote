import React, { useState } from 'react';
import AccordionSection from './AccordionSection';
import PageReservation from '../Demande/Reservation/PageReservation';

import ExistAccReservation from '../Demande/Reservation/TypeReservation/ExistAccReservation'
import NwAccReservation from '../Demande/Reservation/TypeReservation/NwAccReservation'
import ReservationLoggedIN from '../Demande/Reservation/TypeReservation/ReservationLoggedIN'

function AccordionReservation() {
  const [sections, setSections] = useState([
    { title: <>
    <div className='text-center'>
  <h2 className="text-3xl font-bold font-[Inter] tracking-tight text-blue-950 text-center mt-10 sm:text-4xl hover:cursor-pointer">
         Réservation</h2>
          <h2 className='text-sm text-gray-500 font-normal hover:cursor-pointer '>Cliquez pour fermer ou afficher la page</h2>
      
        </div>
</>, content: <>
<div  className=''>

    <ReservationLoggedIN/>
    <NwAccReservation/>
    <ExistAccReservation/>
    </div>
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

export default AccordionReservation;
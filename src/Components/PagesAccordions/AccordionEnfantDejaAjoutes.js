import React, { useState } from 'react';
import AccordionSection from './AccordionSection';
import GstEnfants from '../UTILISATION/Enfants/Enfants';

function AccordionEnfantDejaAjoutes() {
  const [sections, setSections] = useState([
    { title:<h2 className='text-lg cursor-pointer font-semibold hover:text-[#f9466a]'>Inscrire Un enfant deja ajouter ↓</h2> , content:
     <>
     <GstEnfants/>
        </>, isOpen: false },
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

export default AccordionEnfantDejaAjoutes;

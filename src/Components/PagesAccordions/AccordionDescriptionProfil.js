import React, { useState } from 'react';
import AccordionSection from './AccordionSection';
import MonProfilModif from '../UTILISATION/Profil/ModificationForms/MonProfilModif'

function AccordionDescriptionProfil() {
  const [sections, setSections] = useState([
    { title: <><div className='mt-5  flex justify-center'> <button
      type="submit"
      className="rounded-md  bg-red-400 px-16 py-3 text-sm font-semibold text-white shadow-sm hover:bg-rose-900 hover:scale-105 duration-100 ring-2 ring-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
    >
      Modifier
      
    </button>
    </div>
    </> , content: <>
    <MonProfilModif/>
   
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

export default AccordionDescriptionProfil;

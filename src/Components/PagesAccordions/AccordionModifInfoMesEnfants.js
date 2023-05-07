import React, { useState } from 'react';
import AccordionSection from './AccordionSection';
    import FormCreche from '../UTILISATION/PagesProprio/AjoutCreche/FormCreche';

const AccordionModifInfoMesEnfants = () => {
    const [sections, setSections] = useState([
        { title: <>
       <div className="hover:text-blue-950">
    <a href='#modifCreche'><button
          type="submit"
          className="fixed bottom-5 right-5 z-50 ring-4 ring-[#961715]  text-lg font-semibold  text-white rounded-xl flex justify-evenly bg-[#090557] py-4 px-[3rem] hover:cursor-pointer hover:text-blue-950 hover:scale-105 duration-300  hover:ring-[#7e0a0a] hover:bg-[#ff6868] "
        >
          {/* <FaCalendarAlt className="mt-1 mr-3 text-white hover:text-blue-950 " /> Faire une demande */}
          Modifier
        </button>
        </a>
        </div>
    </>, content: <>
    <div id='modifCreche' className='pt-[20px]'>
    <h2 className="text-3xl font-bold font-[Inter] tracking-tight text-blue-950 text-center my-10 sm:text-4xl">
             Modification des informations de la creche
            </h2>
        <FormCreche  />
        </div>
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
    
export default AccordionModifInfoMesEnfants
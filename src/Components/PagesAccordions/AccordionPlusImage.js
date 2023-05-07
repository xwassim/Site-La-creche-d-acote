
import React, { useState } from 'react';
import AccordionSection from './AccordionSection';
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";


const AccordionPlusImage = () => {
    const [sections, setSections] = useState([
        { title:
         <>
<h2 className='text-lg leading-6 text-rose-900 font-semibold mb-5 hover:text-blue-950 hover:cursor-pointer'>Ajouter une image</h2>
    
        </>, content: <>
        <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="ml-3 block  text-lg  text-rose-900 font-bold leading-6 "
                  >
                    Inserer des photos de cette creche
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-red-400 px-6 py-10 bg-white">
                    <div className="text-center">
                      <PhotoIcon
                        className="mx-auto h-12 w-12 text-gray-400"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-red-500 focus-within:outline-none focus-within:ring-2  focus-within:ring-indigo-100 focus-within:ring-offset-2  hover:text-indigo-900"
                        >
                          <span>Inserer une image</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">ou drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF jusqu'a 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <AccordionPlusImage/>
       
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

export default AccordionPlusImage
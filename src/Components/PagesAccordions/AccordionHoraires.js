
import React, { useState, useRef } from 'react';
import AccordionSection from './AccordionSection';


const AccordionHoraires = () => {
  
    const [open, setOpen] = useState(false);

    const menuRef = useRef();
    const inputRef = useRef();
    const formRef = useRef();
      
    function Toggle() {
      const [isOn, setIsOn] = useState(false);
    
      const handleToggle = () => {
        setIsOn(!isOn);
      };
    
      return (
        
             <div  >
         <label class="relative inline-flex items-center cursor-pointer">
       
            <input type="checkbox" onChange={handleToggle} checked={isOn} value="" class="sr-only peer" />
            
          
            <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-rose-300  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-rose-600"></div>
       
          </label>
          {isOn &&<div> <h2 className=' mt-3 hover:cursor-pointer w-full text-center ring ring-[#ff5555] rounded-lg py-3 px-3 bg-[#faaaaa] '> cliquez et indiquez vos horraires </h2></div>}
        </div>
      );
    }
    
   

    
    
    
    
    
    
    

      const [sections, setSections] = useState([
        { title:<> 


<Toggle/>


        </> , content:
         <>
          
<div  className=' '>
      
       <div className='ld:grid ld:grid-cols-2 mt-3   '>
          <div className='mr-2' >
              <label
                htmlFor="etab"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Heure d'ouverture
              </label>
              <div className=" ring-red-400 rounded-md mt-2 ">
                <input
           
                  type="time" name="start" id="start-time" required
                 
                 
                  
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0  py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className='ml-2' >
              <label
                htmlFor="etab"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Heure de fermeture
              </label>
              <div className=" ring-red-400 rounded-md mt-2">
                <input
           
                  type="time" name="end" id="end-time" required
                 
                 
                  
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-2 px-2 text-gray-900 shadow-sm ring-2 ring-inset ring-red-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>      
          </div> </>, isOpen: false },
  
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
    
 
export default AccordionHoraires;
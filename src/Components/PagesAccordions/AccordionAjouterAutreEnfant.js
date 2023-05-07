import React, { useState } from 'react';
import AccordionSection from './AccordionSection';
import Select from 'react-select';

function AccordionAjouterAutreEnfant() {
   
      const options = [
        { value: "homme", label: " HOMME" },
        { value: "femme", label: "FEMME" },
      ];
    const [sections, setSections] = useState([
        { title: <h2 className='text-lg cursor-pointer font-semibold hover:text-[#f9466a]'>Cliquez pour ajouter un autre enfant ↓ <br/>
        <span className='text-sm text-gray-500'>Recliquez pour fermer</span> </h2>,
         content: 
         <>
         <div className="grid md:grid-cols-2 md:gap-6 ">
            <div className="relative z-0 w-full mb-6 group mt-5">
                <input
                    type="text"
                    name="floating_first_name"
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#e94949] peer"
                    placeholder=" "
                    required />
                <label
                    for="floating_first_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    NOM
                </label>
            </div>
            <div className="relative z-0 w-full mb-6 group mt-5">
                <input
                    type="text"
                    name="floating_last_name"
                    id="floating_last_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-x-0 border-1 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-rose-400 peer"
                    placeholder=" "
                    required />
                <label
                    for="floating_last_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    PRENOM
                </label>
            </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
                {/* <div className="relative z-0 w-full mb-6 group">
                    <input
                        type="e-mail"
                        name="floating_first_name"
                        id="floating_first_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-rose-400 peer"
                        placeholder=" "
                        required />
                    <label
                        for="floating_first_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        E-mail
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        } }
                        type="text"
                        name="floating_last_name"
                        id="floating_last_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#f322] peer"
                        placeholder=" "
                        required />
                    <label
                        for="floating_last_name"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#f322] peer-focus:dark:text-[#f322] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        NUMERO DE TELEPHONE
                    </label>
                </div> */}
 <div className="relative z-0 w-full mb-2 group mt-0">
            <input
              type="date"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-rose-400 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              DATE DE NAISSANCE
            </label>
          </div>
        <div id="select">
          <div className="mb-2 block">
            <label htmlFor="type" value="Select your type" s>
             Sexe
            </label>
          </div>
          <Select options={options} />
        </div>

            </div>
           {/* <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group"> 
        <input
          type="e-mail"
          name="floating_first_name"
          id="floating_first_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#f322] peer"
          placeholder=" "
          required />
        <label
          for="floating_first_name"
          className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#f322] peer-focus:dark:text-[#f322] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
         GRADE
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group"> 
            <input
            
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#f322] peer"
              placeholder=" "
              required />
            <label
              for="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#f322] peer-focus:dark:text-[#f322] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              ETABLISSEMENT
            </label>
          </div>
      </div> 
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group"> 
        <input
          type="e-mail"
          name="floating_first_name"
          id="floating_first_name"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-[#f322] peer"
          placeholder=" "
          required />
        <label
          for="floating_first_name"
          className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#f322] peer-focus:dark:text-[#f322] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          LABORATOIRE
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group"> 
            <input
              
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-[#f322] peer"
              placeholder=" "
              required />
            <label
              for="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#f322] peer-focus:dark:text-[#f322] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              SPECIALITE
            </label>
          </div>
      </div> */}
{/*       
      <div className="grid md:grid-cols-2 md:gap-6">  <div id="select">
          <div className="mb-2 block">
            <label
              htmlFor="type"
              value="Select your type"
              s>
              DIPLOME
            </label>
          </div>
          <Select options={options1} />
          </div>
          </div> */}
             <div className="relative z-0 w-full mb-3 group my-2">
            <AccordionAjouterAutreEnfant></AccordionAjouterAutreEnfant>
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

export default AccordionAjouterAutreEnfant;

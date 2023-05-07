import { useState } from "react";
import Stepper from "../../Reservation/GestionDesSteps/Stepper";
import StepperControl from "../../Reservation/GestionDesSteps/StepperControl";
import { UseContextProvider } from "../../Reservation/GestionDesSteps/StepperContext";
import Step2CreationCompte from "../../Reservation/steps/Step2CreationCompte";
import Step3AjoutEnfant  from "../../Reservation/steps/Step3AjoutEnfant";
import Step1Connexion from "../../Reservation/steps/Step1Connexion";
import Step4Final from "../../Reservation/steps/Step4Final";
import Authentification from "../../../Compte/Inscription/Authentification/Authentification";



function NwAccReservation() {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    "Connexion",
    "Inscription",
    "Authentification",
    "Enfants",
    "Fin"
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <div className=""><Step1Connexion/></div>;
      
      case 2:
        return <div className="mx-3 "><Step2CreationCompte /></div>;
        case 3:
          return <div className=" "><Authentification /></div>;
  
      case 4:
        return <div className="mx-3 "><Step3AjoutEnfant /></div>;
      
        case 5:
        return <div className=" "><Step4Final /></div>;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <>
   
      <div className=" rounded-2xl ring ring-[#f54b4b] bg-white pb-2    ">
        {/* Stepper */}
        <div className="horizontal container mt-5 ">
          <Stepper steps={steps} currentStep={currentStep} />

          <div className="  my-1 py-5  ">
            <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
          </div>
        </div>

        {/* navigation button */}
        {currentStep !== steps.length && (
          <div className=" ">
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
          </div>
        )}
      </div>
    
      </>
  );
}

export default NwAccReservation;
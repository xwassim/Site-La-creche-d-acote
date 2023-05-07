import { useState } from "react";
import Stepper from "../GestionDesSteps/Stepper";
import StepperControl from "../GestionDesSteps/StepperControl";
import { UseContextProvider } from "../GestionDesSteps/StepperContext";

import Step3PriseRDV from "../steps/Step3PriseRDV";

import Step4Final from "../steps/Step4Final";

const RDVLoggedIN = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["RDV", "Fin"];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return (
          <div className="mx-2 ">
            <Step3PriseRDV />
          </div>
        );

      case 2:
        return (
          <div className="  ">
            <Step4Final />
          </div>
        );

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
      <div className=" rounded-2xl ring ring-[#f43b57] bg-white pb-2   ">
        {/* Stepper */}
        <div className="horizontal container mt-5 ">
          <Stepper steps={steps} currentStep={currentStep} />

          <div className="my-1 p-10 ">
            <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
          </div>
        </div>

        {/* navigation button */}
        {currentStep !== steps.length && (
          <StepperControl
            handleClick={handleClick}
            currentStep={currentStep}
            steps={steps}
          />
        )}
      </div>
    </>
  );
};

export default RDVLoggedIN;

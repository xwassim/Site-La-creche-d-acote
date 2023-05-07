export default function StepperControl({ handleClick, currentStep, steps }) {
  return (
    <div className="container mt-0 mb-8 flex justify-around">
      <p
        onClick={() => handleClick()}
        className={`cursor-pointer rounded-xl border-2 border-white bg-white py-2 px-4 font-semibold uppercase text-rose-700 transition duration-200 ease-in-out   ${
          currentStep === 1
            ? " cursor-not-allowed opacity-50 border-slate-300 bg-slate-300"
            : " hover:text-[#060054]"
        }`}
      >
        Precedant 
      </p>

      <button
        onClick={() => handleClick("next")}
        className="cursor-pointer rounded-xl bg-[#e69ba3] px-5 ring ring-[#f54c4c] py-1 font-semibold uppercase text-[#060054] text-sm transition duration-200 ease-in-out hover:bg-[#880915] hover:text-white"
      >
        {currentStep === steps.length - 1 ? "Confirmer" : "Suivant"}
      </button>
    </div>
  );
}

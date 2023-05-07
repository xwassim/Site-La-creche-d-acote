export default function Final() {
  return (
    <div className="container md:mt-10">
      <div className="flex flex-col items-center">
        <div className="wrapper ">
          <svg
            className="checkmark "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 52 52"
          >
            <circle
              className="checkmark__circle"
              cx="26"
              cy="26"
              r="25"
              fill="none"
            />
            <path
              className="checkmark__check"
              fill="none"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
            />
          </svg>
        </div>

        <div className="mt-3 text-xl font-semibold uppercase text-[#ff5757]">
          FELICITATION
        </div>
        <div className="text-lg font-semibold text-gray-500">
           Reservation terminee
        </div>
        <div className="flex">
          <a className="mt-10" href="/">
            <button className="h-10 px-5 mx-3 text-[#060675] transition-colors ring ring-[#ff3a3a] bg-[#ffa2a2] duration-150   text-lg rounded-lg focus:shadow-outline hover:bg-[#ff5757] hover:text-white">
              Fermer
            </button>
          </a>
       
        </div>
      </div>
    </div>
  );
}

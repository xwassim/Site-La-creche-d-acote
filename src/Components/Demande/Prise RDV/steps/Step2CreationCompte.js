import { useStepperContext } from "../GestionDesSteps/StepperContext";
import Choice from "../../../Compte/TypeUtilisateur/Choice";
//  
import Select from "react-select";

export default function Step2CreationCompte() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const options = [
    { value: "homme", label: " HOMME" },
    { value: "femme", label: "FEMME" },
   
  ];
  const ModeOptions =[
    {value:"Proprio", label:"Proprietaire"},
    {value:"Parent", label:"Parent"},
  ];

  return (
    <>
    <div className="mx-5">
      <div className="flex flex-col ">
        <h2 className="text-xl font-semibold">Creez un compte pour pouvoir reserver</h2>
        {/* <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-2 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-rose-400 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              MATRICULE
            </label>
          </div>
        </div> */}
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
      </div>*/}
      </div>
      <>
        <div className="grid md:grid-cols-2 md:gap-6 my-3">
          <div className="relative z-0 w-full mb-2 group">
            <input
                onKeyPress={(event) => {
                  if (!/[a-zA-Z]/i.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              type="text"
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
              Nom
            </label>
          </div>
          <div className="relative z-0 w-full mb-2 group">
            <input
              onKeyPress={(event) => {
                if (!/[a-zA-Z]/i.test(event.key)) {
                  event.preventDefault();
                }
              }}
              
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-x-0 border-1 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-rose-400 peer"
              placeholder=" "
              required
            />
            <label
              for="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Prénom
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6 my-4">
        

          {/* <div className="relative z-0 w-full mb-6 group"> 
            <input
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              } }
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-rose-400 peer"
              placeholder=" "
              required />
            <label
              for="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              NUMERO DE TELEPHONE
            </label>
          </div> */}

          <div id="select">
            <div className="mb-2 block">
              <label htmlFor="type" value="Select your type" s>
                Sexe
              </label>
            </div>
            <Select options={options} />
          </div>
        </div>
      </>
      <div className="grid md:grid-cols-2 md:gap-6 my-3">
        <div className="relative z-0 w-full mb-2 group">
          <input

id="email"
name="email"
type="email"
autoComplete="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-rose-400 peer"
            placeholder=" "
            required
          />
          <label
           htmlFor="email"
            for="floating_first_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            E-mail
          </label>
        </div>
        <div className="relative z-0 w-full mb-2 group">
          <input
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            type="text"
            name="floating_last_name"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-rose-400 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Numero de telephone
          </label>
        </div>
        <div className="relative z-0 w-full mb-2 group">
          <input
            // onKeyPress={(event) => {
            //   if (!/[0-9]/.test(event.key)) {
            //     event.preventDefault();
            //   }
            // }}
            type="password"
            name="floating_last_name"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-rose-400 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Mot de passe
          </label>
        </div>
        <div className="relative z-0 w-full mb-2 group">
          <input
            // onKeyPress={(event) => {
            //   if (!/[0-9]/.test(event.key)) {
            //     event.preventDefault();
            //   }
            // }}
            type="password"
            name="floating_last_name"
            id="floating_last_name"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 border-b-2 border-t-0 border-x-0 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-rose-400 peer"
            placeholder=" "
            required
          />
          <label
            for="floating_last_name"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-rose-400 peer-focus:dark:text-rose-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirmation du mot de passe
          </label>
        </div>
     <div>
    
      </div>
      </div>
      <div>
   
      <div className="mb-20">
      <div id="select">
            <div className="mb-2 block">
              <label htmlFor="type" value="Select your type" s>
                Mode d'utilisation
              </label>
            </div>
            <Select options={ModeOptions} />
          </div>
      </div>
      <h2 className="text-lg">Les modes d'utilisation</h2>
      <div className="Choose mt-3 mx-2 flex flex-row">

          <div className="Proprio rounded-md p-10 bg-[#FBEDEC]  mr-2 ring ring-[#ff3b4e] ">
            <div className="flex justify-center ">
          
             

                <h2 className=" text-3xl text-rose-900 text-center font-semibold mb-3 ">
                  Un Proprietaire
                </h2>
             
            </div>
            <div className="rounded-md bg-[white] p-5 ring ring-[#f15968]">
              <h4>
                Un compte propriétaire vous permet de bénéficier des
                fonctionnalités du mode parent, mais également ajouter les
                crèches que vous possédez sur notre site afin d'attirer de
                nouveaux clients. En plus de pouvoir gérer les inscriptions et
                les réservations, ainsi que communiquer par e-mail avec les
                parents intéressés par vos services.{" "}
              </h4>
            </div>
          </div>
          {/* <div class="container">
            <h1 className="text-3xl text-rose-900">Ou bien</h1>
          </div> */}


          <div className="Parent rounded-md p-10 bg-[#FBEDEC] ml-2 ring ring-[#f15968] ">

            <div className="flex justify-center ">
           
              
               
                <h2 className="text-3xl  text-center font-semibold text-rose-900 mb-3">
                  
                  Un Parent
                </h2>
             
            </div>
            <div className="ring ring-[#f15968] rounded-md bg-[white] p-5">
              <h4>
                Un compte parent vous permet d'ajouter à vos favoris les
                différentes crèches disponibles et d'inscrire vos enfants. Vous
                pourrez alors réserver directement une place pour eux dans une
                crèche choisie ou prendre rendez-vous avec une crèche pour en
                savoir plus sur les disponibilités et les modalités
                d'inscription.
              </h4>
            </div>
          </div>
        </div>
        </div>
        </div>
    </>
  );
}

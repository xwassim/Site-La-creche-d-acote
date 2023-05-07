import React from "react";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../HomePage/Footer";

const ForgotPassword = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <div className=" bg-[#ffcfcf]  mx-[10%] max-w-[1200px] flex flex-col justify-center mt-[50px]  rounded-md ring ring-[red] p-10">
        <div className="p-5 text-center text-blue-950 mx-[2%]">
          <h1 className="text-3xl mb-5 ">Réinitialiser votre mot de passe</h1>
          <h2 className="text-lg mb-5 font-semibold ">
            Un mail vous sera envoyé à votre adresse mail pour réinitialiser
            votre mot de passe. Veulliez reintroduire votre addresse mail <br />
            <span className="text-gray-800 text-sm">
              notez en cas d'oublie de votre addresse mail que vous serez
              contraint de creer un nouveau compte
            </span>
          </h2>
        </div>

        <div className="ld:mx-[20%]">
          <div className="mb-10">
            <label
              for="email"
              className="block mb-2 text-sm font-semibold text-[#0B0C38] "
            >
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 ring ring-[#f67261] shadow-[-4.09869px_3.27895px_3px_rgba(0,0,0,0.25)]  sm:text-sm  rounded-xl block w-full p-2.5"
              placeholder="nom@company.com"
              required=""
            />
          </div>

          <a href="/MailSent">
            <button
              type="submit"
              class="w-full text-[#191A42] bg-[#FD8C7D] ring ring-[#900606] font-semibold rounded-xl text-sm px-5 py-2.5 text-center mb-10 hover:scale-105 duration-300"
            >
              Envoyer
            </button>
          </a>
        </div>
        <p class="text-sm text-center font-medium  text-[#152071]">
          Vous avez oublier votre addresse mail ?{" "}
          <a href="/SignUp" class="font-medium text-[#F16951] hover:underline ">
            Inscrivez-vous
          </a>
        </p>
      </div>
      {/* <footer>
    <Footer/>
    </footer> */}
    </>
  );
};

export default ForgotPassword;

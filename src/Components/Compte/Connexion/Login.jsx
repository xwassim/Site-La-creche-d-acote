import React from "react";
import Logo from "../../Assets/Logo1.svg";
import Navbar from "../../Navigation/Navbar";
import { Link } from "react-router-dom";
import LogoFloatingImage from "../../Functions/LogoFloatingImage";
const Login = () => {
  return (
    <>
      <div className=" max-w-[1240px] md:mt-[-60px] mx-auto grid md:grid-cols-2 md:items-center md:justify-center ">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto w-[80%] md:h-screen md:w-full lg:py-0">
            <div className="w-full bg-[#F5D5D5] rounded-xl ring ring-[#ff5b5b] shadow z-50  md:mt-0 sm:max-w-md xl:p-0 hover:scale-105 duration-300">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className=" welcome text-xl font-normal  leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  BIENVENUE !
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
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
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-semibold text-[#0B0C38]"
                    >
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 ring ring-[#f67261] shadow-[-4.09869px_3.27895px_3px_rgba(0,0,0,0.25)]  sm:text-sm  rounded-xl block w-full p-2.5 "
                      required=""
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-[#FD8C7D] rounded bg-gray-50 accent-[#FD8C7D]"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="remember"
                          className="font-semibold text-[#191A43]"
                        >
                          Se souvenir de moi
                        </label>
                      </div>
                    </div>
                    <a
                      href="/ForgotPassword"
                      className="text-sm font-semibold text-[#191A43] hover:underline "
                    >
                      Mot de passe oublié ?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-[#191A42] bg-[#FD8C7D] ring ring-[#900606] font-semibold rounded-xl text-sm px-5 py-2.5 text-center shadow-[0px_3.27895px_3.27895px_rgba(0,0,0,0.25),inset_3.27895px_6.5579px_3.27895px_rgba(0,0,0,0.25)] hover:scale-105 duration-300"
                  >
                    Se connecter
                  </button>
                  <p className="text-sm text-center font-medium  text-[#152071]">
                    Vous n'avez pas de compte ?{" "}
                    <a
                      href="/SignUp"
                      class="font-medium text-[#F16951] hover:underline "
                    >
                      Inscrivez-vous
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden    md:flex md:flex-col md:items-end   ">
          <LogoFloatingImage />
        </div>
      </div>
    </>
  );
};

export default Login;

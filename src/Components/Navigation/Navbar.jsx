import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import LOGO from "../Assets/LOGO (1).svg";
import Home from "../HomePage/Home";
import SignUp from "../Compte/Inscription/Formulaire/SignUp";

import { Link } from "react-router-dom";

const navigation = [
  { name: "Connexion", href: "./Login", current: true },
  { name: "S'inscrire", href: "./SignUp", current: false },
  { name: "Rechercher", href: "./Search", current: false },
  { name: "A propos de nous", href: "/AboutUs", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-[#FBEDEC]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 ld:px-8 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center ld:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center ld:items-stretch ld:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <img src={LOGO} width="160px" alt="logo"></img>
                  </a>
                </div>
                <div className="hidden ld:ml-6 ld:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-red-400 px-1 text-white hover:bg-rose-900 ring-2 ring-[#fe2e2a]"
                            : "text-blue-950 hover:bg-red-400 hover:text-white ",
                          "rounded-md  px-3 py-2 text-sm font-medium "
                        )}
                        aria-current={item.current ? "page" : true}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* MENU PROFIL A DROITE */}
             
            </div>
          </div>

          <Disclosure.Panel className=" ld:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-rose-900 text-white"
                      : "text-blue-950 hover:bg-red-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

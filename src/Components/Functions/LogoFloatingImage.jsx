import React, { useState, useEffect } from "react";
import logo from "../Assets/Logo1.svg";
import Kid from "../HomePage/assets/KIDD.svg";

function LogoFloatingImage() {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFloating((prevIsFloating) => !prevIsFloating);
    }, 1600);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <img
        src={logo}
        alt="Floating Image"
        className={` mr-[10%]  transition-transform duration-1000 w-[440px] h-[440px]  object-contain " ${
          isFloating ? " translate-y-[1.5rem] scale-110  " : " "
        }`}
      />
    </>
  );
}

export default LogoFloatingImage;

import React, { useState, useEffect } from "react";
import logo from "../Assets/Logo1.svg"
import Kid from "../HomePage/assets/KIDD.svg"

function KidFloatingImage() {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFloating((prevIsFloating) => !prevIsFloating);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>

 <img
      src={Kid}
      alt="Floating Image"
      className={`transition-transform duration-700 z-0 object-contain " ${
        isFloating ? " translate-x-[300px] " : ""
      }`}
      
    />
    </>
  );
}

export default KidFloatingImage;
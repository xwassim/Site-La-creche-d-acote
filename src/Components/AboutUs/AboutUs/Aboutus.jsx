import React from "react";
import Footer from '../HomePage/Footer'
import Navbar from "../Navbar";
import Section1 from "./1stSection";


// import Reservation from "../Demande/Reservation/Reservation";

const Home = () => {
  return (
    <>
       <nav>
      <Navbar />
    </nav>
    <div>
    <Section1 />
    </div>
    <footer>
        <Footer/>
    </footer>
   

    </>
  );
};

export default Home;

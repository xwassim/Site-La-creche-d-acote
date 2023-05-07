import React from "react";

import CCM from "./CCM";
import Phonepub from "./Phonepub";
import Navbar from "../Navigation/Navbar";
import ProprioNavbar from "../Navigation/ProprioNavbar";
import ParentNavbar from "../Navigation/ParentNavbar";
import Section1 from "./Section1";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Section5 from "./Section5";
import Filters from "./Filters";
import DsCreche from "../SearchPage/DynamicDescriptionCreche";
// import Reservation from "../Demande/Reservation/Reservation";
import AdminNavbar from "../Navigation/AdminNavbar";

const Home = () => {
  return (
    <>
      <na>
        <Navbar />
        <ParentNavbar/>
        <ProprioNavbar/>
        <AdminNavbar/>

      </na>
      <Section1 />
      <Phonepub />
      <CCM />
      <Filters />
      <Section5 />
      <Footer />

      {/* <Reservation /> */}
    </>
  );
};

export default Home;

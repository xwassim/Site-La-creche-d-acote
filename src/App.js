import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './Components/Compte/Inscription/Formulaire/SignUp';

import PageAuthentification from './Components/Compte/Inscription/Authentification/PageAuthentification';
import PageLogin from './Components/Compte/Connexion/PageLogin';
import PageChoice from './Components/Compte/TypeUtilisateur/PageChoice';
import Menu from './Components/UTILISATION/PagesProprio/Menu'
import Menu2 from './Components/UTILISATION/PagesParent/Menu2';
import Home from './Components/HomePage/Home';
import Search from './Components/SearchPage/Recherche/Search';
import DetailsCreche from './Components/SearchPage/DetailsCreche/DetailsCreche';
import MesEnfants from './Components/UTILISATION/Enfants/MesEnfants';
import MesCreches from './Components/UTILISATION/PagesProprio/MesCreches/MesCreches';
import MonProfil from './Components/UTILISATION/Profil/MonProfil';
import PageReservation from './Components/Demande/Reservation/PageReservation';
import AjoutCreche from './Components/UTILISATION/PagesProprio/AjoutCreche/AjoutCreche';
import DynamicDescriptionCreche from './Components/SearchPage/DynamicDescriptionCreche'
import AjoutEnfant from './Components/UTILISATION/Enfants/AjoutEnfant/AjoutEnfant';
import DynamicDescriptionMesCreches from './Components/UTILISATION/PagesProprio/MesCreches/DetailsMesCreches/DynamicDescriptionMesCreches';
import DynamicDescriptionCrecheRDV from './Components/Demande/Prise RDV/DynamicDescriptionCrecheRDV';
import DynamicDescriptionCrecheReservation from './Components/Demande/Reservation/DynamicDescriptionCrecheReservation';
import SearchResults from './Components/SearchPage/Recherche/SearchResults/SearchResults';
import ForgotPassword from './Components/Compte/Connexion/ForgotPassword';
import MailSent from './Components/Compte/Connexion/MailSent';
import MesNotifs from './Components/UTILISATION/Notifications/MesNotifs';
import AboutUs from './Components/AboutUs/AboutUs';
import RdvProprio from './Components/UTILISATION/PagesProprio/RdvProprio';
import RdvParent from './Components/UTILISATION/PagesParent/RdvParent';
import MesReservations from './Components/UTILISATION/PagesProprio/ReservationProprio';
import DeleteConfirmation from './Components/Functions/DeleteConfirmation';


// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function App() {
  return (

    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Search" element={< Search />} />
      <Route path="/Login" element={<PageLogin/>} />
      <Route path="/Authentification" element={<PageAuthentification />} />
      <Route path="/Choice" element={<PageChoice />} />
      <Route path="/MenuProprio" element={<Menu />} />
      <Route path="/MenuParent" element={<Menu2 />} />
      <Route path="/DescriptionCreche" element={<DynamicDescriptionCreche/>}></Route>
      <Route path='/kkkk' element={<App/>}> </Route>
      <Route path='/MesEnfants' element={<MesEnfants/>}></Route>
      <Route path='/MesCreches' element={<MesCreches/>}></Route>
      <Route path='/MonProfil'  element={<MonProfil/>}/>
      <Route path='/Reservation'  element={<PageReservation/>}/>
      <Route path='/AjoutCreche' element={<AjoutCreche/>}></Route>
      <Route path='/AjoutEnfant' element={<AjoutEnfant/>}/>
      <Route path="/DescriptionMesCreches" element={<DynamicDescriptionMesCreches/>}></Route>
      <Route path='/DescriptionCrecheRDV' element={<DynamicDescriptionCrecheRDV/>}/>
      <Route path='/DescriptionCrecheReservation' element={<DynamicDescriptionCrecheReservation/>}/>
      <Route path="/SearchResults" element={<SearchResults/>}/>
      <Route path='/ForgotPassword' element={<ForgotPassword/>} />
      <Route path='/MailSent' element={<MailSent/>} />
      <Route path='/AboutUs' element={<AboutUs/>}/>
      <Route path='/MesNotifs' element={<MesNotifs/>} />
      <Route path='/RdvProprio' element={<RdvProprio/>} />
      <Route path='/RdvParent' element={<RdvParent/>} />
      <Route path='/MesReservations' element={<MesReservations/>} />
      <Route path='/sup' element={<DeleteConfirmation/>} />

     
    </Routes>
      

    {/* <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper> */}
       </>
  );
}

export default App;

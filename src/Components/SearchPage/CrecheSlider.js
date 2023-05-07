import React, { Fragment } from "react";
import {CrecheSliderdata} from '../../data';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import  { useRef } from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { Rating } from "flowbite-react";
import Evaluation from "./Evaluation";

SwiperCore.use([Navigation]);





const CrecheSlider = () => {
  const sliderRef = useRef();
  
  return (




    <div className="flex justify-center py-5 px-0  gap-8 items-center  ">
       <div className="flex xxs:ml-[5%] ml-[1%] z-50" >
          <button onClick={() => sliderRef.current?.slidePrev()} className="bg-[#FB9B90] ring  ring-rose-900  flex  justify-center items-center xxs:w-10 xxs:h-10 w-5 h-5 rounded-full  shadow focus:outline-none hover:bg-white hover:ring-blue-900 hover:scale-125 duration-300">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="chevron-left w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

      <Swiper freeMode={true} grabCursor={true}
        Pagination={true}
       
      
        onSwiper={it => (sliderRef.current = it)} modules={[Navigation]}
        className="mySwiper mx-[5px] "
        slidesPerView={3} spaceBetween={25}
        


        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          780: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1150: {
            slidesPerView: 3,
            spaceBetween: 25,
          },


        }}
      >
       
        {CrecheSliderdata.map((slide, index) => {
          const { image, name, Wilaya , Commune, Paiement, Note } = slide;
         const  URL='/DescriptionCreche?name='+name;
          return (

            <SwiperSlide key={index} className=" overflow-hidden h-100  mx-auto  w-full flex border-4 border-[#fa6464]  my-4 bg-white shadow-[0px_4.39131px_17.5652px_rgba(158,158,158,0.25)] rounded-[12px]  " >
    
              <img className=" mx-auto mt-2 w-[80%] " src={image[1]} alt="" />
              <div className="flex text-left text-blue-950 justify-center text-xl sm:text-2xl font-bold py-2  ">{name}</div>
              <div className="flex text-left text-blue-950 justify-center  font-bold ">{Commune} , {Wilaya}</div>
              <div className="flex text-left mt-3 justify-center font-semibold text-xl text-[#f84c4c] ">{Paiement} DA/Mois</div>
              <div className="mt-5 flex justify-center"><Evaluation numStars={Note}></Evaluation>  </div>
              <a href={URL} >
              <div className="flex  justify-center">
                <button className="bg-[#FB9B90] w-[60%] rounded-md font-bold my-6  py-3 text-[#191A43] ring  ring-rose-900 hover:scale-110 duration-300"> Voir plus </button>
              </div>

              </a>

            </SwiperSlide>



          );
        })}

        

      </Swiper>

      <div className="flex xxs:mr-[5%] mr-[1%] z-50" >
          <button onClick={() => sliderRef.current?.slideNext()} className="  flex  justify-center items-center xxs:w-10 xxs:h-10 w-5 h-5 rounded-full bg-[#FB9B90] ring  ring-rose-900  shadow focus:outline-none hover:bg-white hover:ring-blue-900 hover:scale-125 duration-300">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="chevron-right w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
       </div>

    </div>
  );

};

export default CrecheSlider;
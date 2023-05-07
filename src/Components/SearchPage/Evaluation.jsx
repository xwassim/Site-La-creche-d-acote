import React from 'react'

import { useState } from 'react';
import { Star } from 'react-feather';
import { Rating } from 'flowbite-react';

const Evaluation = ({ numStars }) => {


  
      const stars = [];
    
      for (let i = 0; i < numStars; i++) {
        stars.push(<Rating.Star key={i} />);
      }
    
      return <div className='text-[#d1b34f] text-3xl '>{stars}</div>;
    };
    
    Rating.Star = ({ filled = true }) => (
      <span>{filled ? '★' : '☆'}</span>
    );
    


export default Evaluation
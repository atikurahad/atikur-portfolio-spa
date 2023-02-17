import React from 'react';
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Tripple from "../assets/tripple.png"

const Card = () => {
  return ( <>
  <div className='w-full py-[10rem] px-4 bg-white'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3'>
<img src={Single} alt="" />
    </div>
    </div>
  </>

  );
};

export default Card;

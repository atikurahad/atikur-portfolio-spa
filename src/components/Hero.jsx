import React from "react";
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div>
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold p-2">
            GROWING WITH MERN DEVELOPER
          </p>
          <h1 className="md:text7xl sm:text-6xl text-4xl font-bold md:py-6">
            Grow like Dev
          </h1>
         <div className="flex justify-center items-center">
           <p className="md:text5xl sm:text font-bold">Fast, Flexible, User friendly for &rarr;	</p>
        <Typed className="lg:text-4xl md:text5xl sm:text-4xl font-bold text-rose-500 md:pl-4 pl-2"  strings={['React.', 'Node.','JavaScript.' ,'MongoDB.']} typeSpeed={120} backSpeed={140} loop />
         </div>
         <p className="md:text-2xl text-xl font-bold text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem molestias ab in?</p>
         <button className="bg-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-black hover:bg-[#a3ce60]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

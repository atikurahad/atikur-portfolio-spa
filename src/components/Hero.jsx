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
            Grow with Dev
          </h1>
          <p className="md:text5xl sm:text font-bold">Fast, Flexible, User friendly for </p>
        <Typed  strings={['React', 'Node' ,'Sass']} typeSpeed={120} backSpeed={140} loop />
        </div>
      </div>
    </div>
  );
};

export default Hero;

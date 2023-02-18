import React from "react";
import Laptop from "../assets/laptop.jpg";

const Projects = () => {
  return (
    <div>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">Junior ReactJS Developer.</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">I am a junior reactJs developer. I am working on reactJS more than 1 year.</h1>
            <p>I am a passionate front-end web developer. I can build user friendly and attractive website UI with reactJS. Good known in react hook like UseEffect, UseMemo, ContextAPI, UseState </p>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-3  hover:bg-[#a3ce60] hover:text-black md:mx-0">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

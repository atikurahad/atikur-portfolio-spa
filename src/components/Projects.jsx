import React from "react";
import Laptop from "../assets/laptop.jpg";

const Projects = () => {
  return (
    <div>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">Lorem ipsum dolor sit amet.</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium dicta voluptatibus necessitatibus corporis voluptatum sunt sapiente repudiandae nesciunt neque voluptatem possimus doloremque autem eum ducimus nihil, numquam debitis fugiat!</p>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium mx-auto my-6 py-3  hover:bg-[#a3ce60] hover:text-black md:mx-0">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import Laptop from "../assets/laptop";

const Projects = () => {
  return (
    <div>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img src={Laptop} alt="laptop" />
        </div>
      </div>
    </div>
  );
};

export default Projects;

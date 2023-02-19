import React from "react";
import Typed from 'react-typed';

import DevImg from "../assets/atik.png";

const About = () => {
  return (
    < >


    <div className="bg-[#0E1A40]">
      <h1 className="text-center p-2 font-bold"> <Typed className="lg:text-4xl md:text5xl sm:text-4xl font-bold text-center text-purple-500 md:pl-4 pl-2"  strings={['About Me']} typeSpeed={120} backSpeed={140} loop /></h1>
          <div>
          {" "}

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center justify-center">
          <div>
            <img className="h-96 w-96 mx-auto" src={DevImg} alt="" />
          </div>
          <div>
            <h1 className="text-center text-2xl mt-2 font-serif font-bold text-[rgb(255,140,0)] sm:mt-2">
              Junior <span> <Typed className="text-white" strings={['ReactJS']} typeSpeed={130} backSpeed={140} loop /></span> Developer
            </h1>
            <ol className="mt-5 p-2 drop-shadow-xl flex flex-col mx-auto my-auto">
              <li className="text-xl font-semibold font-serif text-[#f8b435] ">Good Understanding of Htm5, CSS3, Bootstrap5.</li>
              <li className="text-xl font-semibold font-serif text-[#f8b435]">Good understanding of GIT, Github.</li>
              <li className="text-xl font-semibold font-serif text-[#f8b435]">Good known in ReactJs Hooks, React Router.</li>
              <li className="text-xl font-semibold font-serif text-[#f8b435]">Good Skills on ES6, TailwindCss, MaterialUI, DaisyUI.</li>
              <li className="text-xl font-semibold font-serif text-[#f8b435]">Understanding in core Java, OPP.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default About;

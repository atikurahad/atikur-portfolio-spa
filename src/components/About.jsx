import React from "react";
import DevImg from "../assets/atik.png";

const About = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-yellow-500 text-6xl font-bold ">
          {" "}
          About Me
        </h1>
        <div className="bg-[#0E1A40]  grid grid-cols-2 justify-center items-center">
          <div >
            <img className="" src={DevImg} alt="" />
          </div>
          <div>
            <h1 className="text-center text-4xl font-serif font-bold text-[rgb(255,140,0)]">
              Junior ReactJS Developer
            </h1>
            <ol className="mt-5 p-2 drop-shadow-xl ">
              <li className="text-2xl font-semibold font-serif text-[#f8b435] ">Good Understanding of Htm5, CSS3, Bootstrap5</li>
              <li className="text-2xl font-semibold font-serif text-[#f8b435]">Good understanding of GIT, Github</li>
              <li className="text-2xl font-semibold font-serif text-[#f8b435]">Good known in ReactJs Hooks, React Router</li>
              <li className="text-2xl font-semibold font-serif text-[#f8b435]">Good Skills on ES6, TailwindCss, MaterialUI, DaisyUI</li>
              <li className="text-2xl font-semibold font-serif text-[#f8b435]">Understanding in core Java, OPP</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

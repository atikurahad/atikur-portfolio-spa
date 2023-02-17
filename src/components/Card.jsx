import React from "react";
import Single from "../assets/single.png";
// import Double from "../assets/double.png"
// import Tripple from "../assets/tripple.png"

const Card = () => {
  return (
    <>
      <div className="w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto gap-8 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Single}
              alt="single"
             />
             <h2 className="text-2xl font-bold text-center py-8">$5.99/hour</h2>
             <div className="text-center font-medium ">
              <p className="py-2 border-b mx-8 mt-8">Weekly 4 days</p>
              <p className="py-2 border-b mx-8 ">Monday To Friday 4 days</p>

              <p className="py-2 border-b mx-8 ">9:00am To 05:00pm</p>
             </div>
             <button className="bg-[#00df9a] w-[200px] rounded-md font-medium   mx-auto my-6 py-3 text-black hover:bg-[#a3ce60]">
              Notify Me
             </button>
           </div>

           <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Single}
              alt="single"
             />
             <h2 className="text-2xl font-bold text-center py-8">$5.99/hour</h2>
             <div className="text-center font-medium ">
              <p className="py-2 border-b mx-8 mt-8">Weekly 4 days</p>
              <p className="py-2 border-b mx-8 ">Monday To Friday 4 days</p>

              <p className="py-2 border-b mx-8 ">9:00am To 05:00pm</p>
             </div>
             <button className="bg-[#00df9a] w-[200px] rounded-md font-medium   mx-auto my-6 py-3 text-black hover:bg-[#a3ce60]">
              Notify Me
             </button>
           </div>

           <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Single}
              alt="single"
             />
             <h2 className="text-2xl font-bold text-center py-8">$5.99/hour</h2>
             <div className="text-center font-medium ">
              <p className="py-2 border-b mx-8 mt-8">Weekly 4 days</p>
              <p className="py-2 border-b mx-8 ">Monday To Friday 4 days</p>

              <p className="py-2 border-b mx-8 ">9:00am To 05:00pm</p>
             </div>
             <button className="bg-[#00df9a] w-[200px] rounded-md font-medium   mx-auto my-6 py-3 text-black hover:bg-[#a3ce60]">
              Notify Me
             </button>
           </div>
        </div>
      </div>
    </>
  );
};

export default Card;

import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png"
import Tripple from "../assets/triple.png"

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
             <h2 className="text-2xl font-bold text-center py-8">$5.99/Hourly</h2>
             <div className="text-center font-medium ">
              <p className="py-2 border-b mx-8 mt-8">Weekly 4 days</p>
              <p className="py-2 border-b mx-8 ">Monday To Friday 4 days</p>

              <p className="py-2 border-b mx-8 ">9:00am To 05:00pm</p>
             </div>
             <button className="bg-[#00df9a] w-[200px] rounded-md font-medium   mx-auto my-6 py-3 text-black hover:bg-[#a3ce60]">
              Notify Me
             </button>
           </div>

           <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-gray-100">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Double}
              alt="single"
             />
             <h2 className="text-2xl font-bold text-center py-8">$209.65/Weekly</h2>
             <div className="text-center font-medium ">
              <p className="py-2 border-b mx-8 mt-8">Weekly 5 days</p>
              <p className="py-2 border-b mx-8 ">Sunday To Thursday </p>

              <p className="py-2 border-b mx-8 ">10:00am To 05:00pm</p>
             </div>
              <button className="bg-[#000] w-[200px] rounded-md font-medium   mx-auto my-6 py-3 text-[#00df9a] hover:bg-[#a3c3a0]">
              Notify Me
             </button>

           </div>

           <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Tripple}
              alt="single"
             />
             <h2 className="text-2xl font-bold text-center py-8">$859.99/Month</h2>
             <div className="text-center font-medium ">
              <p className="py-2 border-b mx-8 mt-8">Weekly 5 days</p>
              <p className="py-2 border-b mx-8 ">Monday To Friday 4 days</p>

              <p className="py-2 border-b mx-8 ">10:30am To 05:30pm</p>
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

import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="w-full py-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
          <div className="lg:col-span-2 my-4">
            <h1 className="md:text-5xl sm:text-4xl text-xl">
              Want tips & trick to update your website?
            </h1>
            <p>Lorem Eos, vitae libero magni explicabo atque molestias.</p>
          </div>
          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <input className="p-3 flex w-full rounded-md text-black " type="email" placeholder="Enter Your Email" />
              <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4  mx-auto my-6 py-3 text-black hover:bg-[#a3ce60]">
                Notify Me
              </button>
            </div>
            <p>We are care about your data. read our Lorem ipsum dolor <span className="text-[#00df9a]">privacy policy</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

//53:50 second

export default Contact;

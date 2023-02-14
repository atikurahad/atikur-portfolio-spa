import React from "react";

const Footer = () => {
  return (
    <div>
      <h1> I am from footer</h1>
      <div className="bg-[#1B4D3E] h-[13rem] flex">
        <div className="flex-1">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
          <a href="/">Our Achivement</a>
          <a href="/">Security</a>
        </div>
        <div className="flex-1">
          {" "}
          <a href="/">All Projects</a>
          <a href="/"> Get A Touch</a>
          <a href="/">Contact</a>
          <a href="/">About</a>{" "}
        </div>
      </div>
      <p>All rights reserved by It's owner</p>
    </div>
  );
};

export default Footer;

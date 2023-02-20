import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          Atikur's Portfolio
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, odio
          consectetur. Vero praesentium natus doloremque.
        </p>
        <div className="flex justify-between md:w-[75%] my-6 text-yellow-500">
          <FaFacebookSquare size={50} className="text-blue-500" />
          <FaDribbbleSquare size={50} className="text-white" />
          <FaInstagramSquare size={50} className="text-[red]" />
          <FaGithubSquare size={50} className="text-gray-100" />
          <FaTwitterSquare size={50} className="text-white" />
        </div>
      </div>

      <div className="lg:cols-span-2  flex justify-between mt-6">
        <div>
          <ul>
            <h6 className="font-medium text-gray-400">Solutions</h6>
            <li className="py-2 text-sm">Analytic</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>

        <div>
          <ul>
            <h6 className="font-medium text-gray-400">Support</h6>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Docs</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">Api Status</li>
          </ul>
        </div>

        <div>
          <ul>
            <h6 className="font-medium text-gray-400">Comapny</h6>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Conditions</li>
            <li className="py-2 text-sm">Stay Tune</li>
          </ul>
        </div>

        <div>
          <ul>
            <h6 className="font-medium text-gray-400">Legal</h6>
            <li className="py-2 text-sm">Claims</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="flex pb-20  md:flex-row  gap-20 flex-col bg-gray-200 justify-between md:items-center px-4  pt-30 md:px-10">
      <div className="space-y-3 ">
        <p className="md:font-bold  font-medium">Adress</p>
        <p className="text-gray-600 md:text-xl text-sm">
          Level 1,12 Sample St, Sydnet NSW 2000{" "}
        </p>
        <p className="md:font-bold font-medium">Contact</p>
        <p className="text-gray-600 md:text-xl text-sm">
          1800 123 4567hello@fancycloset.com
        </p>
        <div className="flex items-center gap-4">
          <FaFacebookF className="hover:scale-105 cursor-pointer" />
          <FaInstagram className="hover:scale-110 cursor-pointer" />
          <FaXTwitter className="hover:scale-110 cursor-pointer" />
          <FaLinkedin className="hover:scale-110 cursor-pointer" />
          <FaYoutube className="hover:scale-110 cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-between  md:flex-row flex-col md:gap-20 gap-15 font-medium  cursor-pointer md:font-semibold">
        <div className="space-y-3 ">
          <p className="transition-colors text-secondary hover:text-gray-600">
            Shop now
          </p>
          <p className="transition-colors text-secondary hover:text-gray-600">
            About us
          </p>
          <p className="transition-colors text-secondary hover:text-gray-600">
            Read blog
          </p>
          <p className="transition-colors text-secondary hover:text-gray-600">
            Contact us
          </p>
          <p className="transition-colors text-secondary hover:text-gray-600">
            {" "}
            Size guide
          </p>
        </div>
        <div className="space-y-3">
          <p className="transition-colors text-secondary hover:text-gray-600">
            Returns
          </p>
          <p className="transition-colors text-secondary hover:text-gray-600">
            {" "}
            Shipping info
          </p>
          <p className="transition-colors text-secondary hover:text-gray-600">
            {" "}
            Gift cards
          </p>
          <p className="transition-colors text-secondary hover:text-gray-600">
            {" "}
            Track order
          </p>
          <p className="transition-colors text-secondary hover:text-gray-600">
            Student discount
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <div className="flex pb-25  md:flex-row  gap-20 flex-col bg-black text-white justify-between md:items-center px-4  pt-30 md:px-10">
        <div className="space-y-3  ">
          <h1 className="text-2xl font-bold pb-5">
            Fancy{" "}
            <span className="text-black bg-white px-3 py-1  rounded-lg">
              Closet
            </span>
          </h1>
          <p className="md:font-bold  font-medium">Adress</p>
          <p className="text-gray-400 md:text-xl text-sm">
            Level 1,12 Sample St, Sydnet NSW 2000{" "}
          </p>
          <p className="md:font-bold font-medium">Contact</p>
          <p className="text-gray-400 md:text-xl text-sm">
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
        <div className="flex justify-between underline decoration-secondary underline-offset-8 md:flex-row flex-col md:gap-20 gap-15 font-medium  cursor-pointer md:font-semibold">
          <div className="space-y-3 ">
            <p className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
              Shop now
            </p>
            <p className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
              About us
            </p>
            <p className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
              Read blog
            </p>
            <p className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
              Contact us
            </p>
            <p className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
              {" "}
              Size guide
            </p>
          </div>
          <div className="space-y-3">
            <p className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
              Returns
            </p>
            <p className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
              {" "}
              Shipping info
            </p>
            <p className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
              {" "}
              Gift cards
            </p>
            <p className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
              {" "}
              Track order
            </p>
            <p className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
              Student discount
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

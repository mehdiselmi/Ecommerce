import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="mt-20">
      <div className="bg-black text-white px-4 md:px-10 pt-30">
        <div className="flex pb-25 md:flex-row flex-col gap-20 justify-between md:items-center">
          <div className="space-y-3  ">
            <h1 className="text-2xl font-bold pb-5 text-primary">
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
            <div>
              <ul className="space-y-3 ">
                <li className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
                  Shop now
                </li>
                <li className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
                  About us
                </li>
                <li className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
                  Read blog
                </li>
                <li className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
                  Contact us
                </li>
                <li className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
                  {" "}
                  Size guide
                </li>{" "}
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
                  Returns
                </li>
                <li className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
                  {" "}
                  Shipping info
                </li>
                <li className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
                  {" "}
                  Gift cards
                </li>
                <li className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
                  {" "}
                  Track order
                </li>
                <li className="transition-colors text-gray-400 hover:text-secondary focus:text-secondary active:text-secondary">
                  Student discount
                </li>
              </ul>
            </div>
          </div>{" "}
        </div>
        <div className="pb-10">
          <hr className="border-gray-700" />{" "}
          <p className="pt-5 text-center text-gray-400">
            © 2026 Fancy Closet. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;

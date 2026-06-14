import React from "react";
import { Link } from "react-router-dom"; // 1. استيراد Link لجعل القوائم قابلة للضغط والانتقال
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <footer className="mt-20 bg-gray-950 text-white px-6 md:px-16 pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto">

        <div className="flex pb-16 flex-col md:flex-row gap-12 md:gap-20 justify-between items-start">
          

          <div className="space-y-4 max-w-sm">
            <h1 className="text-2xl font-bold pb-2 text-primary">
              Fancy{" "}
              <span className="text-black bg-white px-3 py-1 rounded-lg font-extrabold tracking-wide">
                Closet
              </span>
            </h1>
            
            <div className="space-y-1">
              <p className="font-bold text-sm text-gray-400 uppercase tracking-wider">Address</p>
              <p className="text-gray-300 text-sm md:text-base">
                Level 1, 12 Sample St, Sydney NSW 2000
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-bold text-sm text-gray-400 uppercase tracking-wider">Contact</p>

              <div className="text-gray-300 text-sm md:text-base flex flex-col gap-1">
                <a href="tel:18001234567" className="hover:text-primary transition-colors duration-250">
                  1800 123 4567
                </a>
                <a href="mailto:hello@fancycloset.com" className="hover:text-primary transition-colors duration-250">
                  hello@fancycloset.com
                </a>
              </div>
            </div>

     
            <div className="flex items-center gap-5 pt-2">
              {[
                { icon: <FaFacebookF />, url: "https://facebook.com" },
                { icon: <FaInstagram />, url: "https://instagram.com" },
                { icon: <FaXTwitter />, url: "https://twitter.com" },
                { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/mehdi-selmi-939a82273/" },
                { icon: <FaYoutube />, url: "https://youtube.com" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                 
                  className="text-gray-400 hover:text-white hover:scale-115 transition-all duration-300 text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

       
          <div className="flex flex-row md:gap-24 gap-16 font-medium md:font-semibold">
            
        
            <div>
              <ul className="space-y-3.5 text-sm md:text-base">
                {[
                  { name: "Shop now", path: "/" },
                  { name: "About us", path: "/about" },
                  { name: "Read blog", path: "/blog" },
                  { name: "Contact us", path: "/contact" },
                  { name: "Size guide", path: "/size-guide" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline underline-offset-4">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          
            <div>
              <ul className="space-y-3.5 text-sm md:text-base">
                {[
                  { name: "Returns", path: "/returns" },
                  { name: "Shipping info", path: "/shipping" },
                  { name: "Gift cards", path: "/gift-cards" },
                  { name: "Track order", path: "/track-order" },
                  { name: "Student discount", path: "/discount" }
                ].map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="text-gray-400 hover:text-white transition-colors duration-200 hover:underline underline-offset-4">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      
        <div className="pb-10">
          <hr className="border-gray-800 border-t" /> 
          <p className="pt-6 text-center text-xs md:text-sm text-gray-500">
            © 2026 MS. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Contact;
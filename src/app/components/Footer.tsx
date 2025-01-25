
import React from "react";
import Image from "next/image";

import footer1 from "../assets/footer1.png";
import footer2 from "../assets/footer2.png";
import footer3 from "../assets/footer3.png";

import { PiClockClockwiseBold } from "react-icons/pi";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-black w-full">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-center px-5 md:px-[135px] py-[50px]">
        <div className="text-white md:w-1/2 w-full">
          <h2 className="text-[20px] md:text-[32px] font-semibold">
            <span className="text-[#FF9F0D]">St</span>ill Need Our Support
          </h2>
          <p className="text-[10px] md:text-[16px] font-normal mt-[17px]">
            Don&#39;t wait, make a smart & logical quote here. It&#39;s pretty easy.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center w-full md:w-auto md:mt-0 mt-[20px]">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="bg-[#FF9F0D] text-white py-[10px] px-[20px] mr-2 mb-2 md:mb-0 border border-white w-full md:w-auto"
          />
          <button className="text-[#FF9F0D] bg-white py-[10px] px-[20px] font-medium w-full md:w-auto">
            Subscribe Now
          </button>
        </div>
      </div>

      <hr className="my-4 border-[#FF9F0D] mx-5 md:mx-[135px]" />

      {/* Middle Section */}
      <div className="px-5 md:px-[135px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-6 lg:py-8">
          {/* About Us */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold uppercase text-white">About Us</h2>
            <p className="text-[#FFFFFF] text-[16px] font-normal">
              Corporate clients and leisure travelers have been relying on Groundlink
              for dependable, safe, and professional chauffeured car service in major
              cities across the world.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <div className="bg-[#FF9F0D] flex justify-center items-center w-[72px] h-[72px]">
                <PiClockClockwiseBold className="text-white text-[40px]" />
              </div>
              <div>
                <h3 className="text-[16px] text-[#FFFFFF] font-normal">Opening Hours</h3>
                <p className="text-[10px] text-[#FFFFFF] font-normal">Mon - Sat (8.00 - 6.00)</p>
                <p className="text-[10px] text-[#FFFFFF] font-normal">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold uppercase text-white">Useful Links</h2>
            <ul className="text-white font-medium space-y-4">
              {["About", "News", "Partner", "Team", "Menu", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold uppercase text-white">Help?</h2>
            <ul className="text-white font-medium space-y-4">
              {[
                "FAQ",
                "Terms & Conditions",
                "Reporting",
                "Documentation",
                "Support Policy",
                "Privacy",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Post */}
          <div>
            <h2 className="mb-6 text-[24px] font-semibold uppercase text-white">Recent Post</h2>
            <ul className="space-y-4">
              {[footer1, footer2, footer3].map((image, index) => (
                <li className="flex gap-4" key={index}>
                  <Image src={image} alt="Post" className="w-16 h-16" />
                  <div>
                    <p className="text-[12px] text-[#FFFFFF] font-normal">20 Feb 2022</p>
                    <p className="text-[14px] text-[#FFFFFF] font-normal">Keep Your Business</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#FF9F0D] py-6 px-5 md:px-[135px] flex flex-col md:flex-row justify-between items-center">
        <span className="text-sm text-gray-300">
          © 2024 <a href="#">Wajahat Ali Khan™</a>. All Rights Reserved.
        </span>
        <div className="flex gap-4 mt-4 md:mt-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest].map((Icon, index) => (
            <div
              key={index}
              className="bg-white w-[36px] h-[36px] flex justify-center items-center rounded-full"
            >
              <Icon className="text-black" />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
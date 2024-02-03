import React from "react";
import logo1 from "../assets/img/LastSlideLogos/logo1.jpeg"
import logo2 from "../assets/img/LastSlideLogos/logo2.jpeg"
import logo3 from "../assets/img/LastSlideLogos/logo3.png"
import logo4 from "../assets/img/LastSlideLogos/logo4.png"
import image from '../assets/img/logo.png'

const LastSlide = () => {
  return (
    <div className=" rounded-xl bg-[#2699fb] sm:grid grid-cols-4 max-w-[1240px] sm:gap-6 text-center mx-auto p-5 items-center">
    <div className=" mt-12 w-[300px] text-center">
        <h1 className=" font-bold text-3xl"><img src={image} className="w-[112px] m-auto" alt="" /></h1>
        <p className=" text-white mt-4 mb-7">
        Make your business shine online with a custom tech website designed just for you by a professional designer. Need ideas? We’ve collected some amazing examples of technology websites from our global community of designers. Get inspired and start planning the perfect tech web design today.
        </p>
        <div className=" flex gap-11 p-4 h-[60px]">
          <div className=" transition-[.6s] w-11 flex cursor-pointer hover:opacity-[.5]"><img src={logo2} alt="instagram" href = "#" /></div>
          <div className=" transition-[.6s] w-11 flex cursor-pointer hover:opacity-[.5]"><img src={logo1} alt="fb" /></div>
          <div className=" transition-[.6s] w-11 flex cursor-pointer hover:opacity-[.5]"><img src={logo3} alt="twitter" href = "#" /></div>
          <div className=" transition-[.6s] w-11 flex cursor-pointer hover:opacity-[.5]"><img src={logo4} alt="github" href = "#" /></div>
        </div>
      </div>
      <div className=" inline md:ml-[120px] md:w-[95px] ml-[80px]">
        <h1 className="text-2xl font-semibold mb-4">Solutions</h1>
        <p className="text-white">Analytics</p>
        <p className="text-white">Marketing</p>
        <p className="text-white">Commerce</p>
        <p className="text-white">Insights</p>
      </div>
      <div className=" inline md:ml-[110px] ml-[80px] md:w-[95px]">
        <h1 className="text-2xl font-semibold mb-4">Support</h1>
        <p className="text-white">Pricing</p>
        <p className="text-white">Documentation</p>
        <p className="text-white">Guides</p>
        <p className="text-white">API Status</p>
      </div>
      <div className=" inline ml-[80px] md:w-[95px]">
        <h1 className="text-2xl font-semibold mt-5 mb-4">Company</h1>
        <p className="text-white">About</p>
        <p className="text-white">Blog</p>
        <p className="text-white">Jobs</p>
        <p className="text-white">Press</p>
        <p className="text-white">Carrers</p>
      </div>
      
    </div>












  );
};

export default LastSlide;

import React from "react";
import bannerImg from "/images/home/banner.jpeg";

const Banner = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100%">
      <div className="py-24 flex flex-col md:flex-row-reverse items-center justify-between gap-8">

        {/* img */}
        <div className="md:w-1/2">
          <img src={bannerImg} alt="" />
        </div>

        {/* texts */}
        <div className="md:w-1/2 px-4 space-y-7">
        <h2 className="md:text-5xl text-4xl text-black font-bold md:leading-snug leading-snug">
        Indulge in a symphony of <span className="text-red">flavors.</span>
          </h2>
          <p className="text-[#4A4A4A] text-xl">
          Our chefs tell a story with every dish, showcasing their mastery and passion
          </p>
          <button className="bg-red font-semibold btn text-white px-8 py-3 rounded-full">
            Order Now
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;

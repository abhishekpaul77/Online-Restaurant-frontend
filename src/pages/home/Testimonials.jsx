/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="section-container">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="/images/home/testimonials/testimonial.jpeg" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Feedback</p>
            <h2 className="title text-black">Our Customer Reviews</h2>
            <blockquote className="my-5 text-blue-900 leading-[30px]">
            "Last night's dinner at KhaanPaan was unforgettable! The presentation and service were flawless, and I can't stop raving about the entire experience."
            </blockquote>
           
           {/* avater */}

           <div className="flex items-center gap-4 flex-wrap">
           <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12 cursor-pointer">
                  <img src="/images/home/testimonials/testimonial1.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12 cursor-pointer">
                  <img src="/images/home/testimonials/testimonial2.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12 cursor-pointer">
                  <img src="/images/home/testimonials/testimonial3.png" />
                </div>
              </div>
            </div>
            
            <div className="space-y-1">
              <h5 className="text-lg font-semibold">Customer Feedback</h5>
              <div className="flex items-center gap-2"><FaStar className="text-yellow-400"/> <span className="font-medium">4.9</span> <span className="text-[#807E7E]">(18.6k Reviews)</span></div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;

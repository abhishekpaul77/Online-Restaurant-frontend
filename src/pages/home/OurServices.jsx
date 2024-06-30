import React from "react";

const serviceLists = [
    {id:1, title: "Table Booking", des: "Create a memorable event with our delicious food and stunning presentation", img: "/images/home/services/icon1.png"},
    {id:2, title: "Order Tracking", des:"Get your food hot and fresh, delivered straight to your doorstep", img: "/images/home/services/icon2.png"},
    {id:3, title: "Online Ordering", des: "Order your favorites quickly and easily through our user-friendly online platform", img: "/images/home/services/icon3.png"},
    {id:4, title: "Vouchers", des: "Share the joy of KhaanPaan with a gift card, perfect for any occasion", img: "/images/home/services/icon4.png"},
]

const OurServices = () => {
  return (
    <div className="section-container my-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">Our USP & Services</p>
            <h2 className="title text-black">Embark on a Delicious Adventure with KhaanPaan</h2>
            <p className="my-5 text-secondary leading-[30px]">
            Driven by a love for food, we create unforgettable meals and exceptional service, where artistic dishes meet welcoming warmth.
            </p>

            <button className="bg-red font-semibold btn text-white px-8 py-3 rounded-full">
              Explore Menu
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 items-center">
                {
                    serviceLists.map((service) => (
                        <div key={service.id} className="shadow-md rounded-sm py-5 px-4 text-center space-y-2 text-red cursor-pointer hover:border hover:border-indigo-600 transition-all duration-200">
                            <img src={service.img} alt="" className=" mx-auto"/>
                            <h5 className="pt-3 font-semibold"> {service.title}</h5>
                            <p className="text-[#000100]">{service.des}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

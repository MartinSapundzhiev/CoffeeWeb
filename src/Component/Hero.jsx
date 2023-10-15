import React, { useEffect } from "react";
import AOS from 'aos';
import './aos/dist/aos.css';

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div className="w-screen h-[300px] flex flex-col md:flex-row justify-center my-[20px] gap-10 mt-[250px] pl-[30px] md:mb-[-130px] md:mt-[40px]">
        <div data-aos="fade-right">
          <img
            className="w-[350px] h-[350px] object-cover"
            src="https://images.unsplash.com/photo-1553787499-4036afbbcd8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlJTIwbWFjaGluZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div data-aos="fade-left" className="w-[300px] mt-[30px]">
          <p className="text-amber-600 font-serif">Our coffee shop</p>
          <h1 className="text-2xl ">
            We Combine Classics and Modernity
          </h1>
          <p className="md:pt-[20px]">
            We appreciate your trust greatly. Our clients choose us and our
            products because they know we are the best.
          </p>
          <ul className="flex gap-4 my-[20px] font-bold">
            <li className="hover:text-amber-700 duration-300">Cappuccino</li>
            <li className="hover:text-amber-700 duration-300">Latte</li>
            <li className="hover:text-amber-700 duration-300">Arabica</li>
          </ul>
          <button className="mt-[20px] bg-amber-700 px-[50px] py-[10px] rounded-[20px] mr-[30px] hover:bg-transparent border-[1px] border-amber-600 duration-300">
            About Us
          </button>{" "}
          <button className="hover:border-[1px] hover:border-amber-600 px-[12px] py-[10px] rounded-2xl hover:duration-500 hover:text-amber-600">
            SEE MORE
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;

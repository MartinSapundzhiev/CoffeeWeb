import React, { useEffect, useState } from "react";
import { FaArrowLeft,FaArrowRight } from "react-icons/fa6";
import AOS from 'aos'
import './aos/dist/aos.css';

function Spon(params) {
  const people = [
    {
      img:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      des:
        "Your coffee hits the stop every time. Thank you for the experience of pure, delicious coffee masterfully roasted! I will never purchase any other and I will spread the word!",
      title: "Marnie Rotter",
      job: "App Developer",
    },
    {
      img:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      des:
        "Your coffee hits the stop every time. Thank you for the experience of pure, delicious coffee masterfully roasted! I will never purchase any other and I will spread the word!",
      title: "Marnie Rotter",
      job: "App Developer",
    },
    {
      img:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      des:
        "Your coffee hits the stop every time. Thank you for the experience of pure, delicious coffee masterfully roasted! I will never purchase any other and I will spread the word!",
      title: "Marnie Rotter",
      job: "App Developer",
    },
  ];

  useEffect(()=>{
   AOS.init({duration:2000});
  },[])

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === people.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? people.length - 1 : prevIndex - 1
    );
  };

  const currentPerson = people[currentIndex];

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-zinc-100 drop-shadow-2xl">
      <div data-aos='fade-down' className="w-[400px] text-center">
        <p className="text-amber-600 font-serif">Reviews</p>
        <h1 className="text-2xl font-bold">What Clients Say</h1>
        <p className="text-[15px] opacity-70 mt-2">
          Some reviews that customers said about coffee services and business
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt magnam
          totam repellat, labore commodi exercitationem!
        </p>

        <div className="mt-6">
          <img
            src={currentPerson.img}
            alt={currentPerson.title}
            className="w-[200px] h-[200px] object-cover rounded-full mx-auto"
          />
          <div className="mt-2">
            <h2>{currentPerson.title}</h2>
            <p>{currentPerson.job}</p>
          </div>
          <p className="mt-2">{currentPerson.des}</p>
        </div>

        <div className="mt-4 flex justify-between">
          <FaArrowLeft onClick={prevReview}/>
          <FaArrowRight onClick={nextReview}/>
        </div>
      </div>
    </div>
  );
}

export default Spon;

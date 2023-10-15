import React, { useEffect } from "react";
import AOS from 'aos'
import './aos/dist/aos.css';

function Menu() {

  

        useEffect(()=>{
         AOS.init({duration:2000});
        },[])

    const menuItems = [
        {
            img: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            title: "Americano Roasted Coffee",
            des: "It is a long established fact that a reader will be distracted by the readable.",
            price: "$18.99",
            normalPrice: "$20.66",
        },
        {
            img: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            title: "Americano Roasted Coffee",
            des: "It is a long established fact that a reader will be distracted by the readable.",
            price: "$18.99",
            normalPrice: "$20.66",
        },
        {
            img: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            title: "Americano Roasted Coffee",
            des: "It is a long established fact that a reader will be distracted by the readable.",
            price: "$18.99",
            normalPrice: "$20.66",
        },
        {
            img: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
            title: "Americano Roasted Coffee",
            des: "It is a long established fact that a reader will be distracted by the readable.",
            price: "$18.99",
            normalPrice: "$20.66",
        },
       ];
   

    return(
        <>
        <div  className="w-screen h-[1000px] bg-gray-900 mt-[300px] flex flex-col md:h-[700px] ">
            <div data-aos='fade-up' className="flex  flex-col">
                <div className="flex justify-center">
                    <div className="flex mt-[20px] flex-col gap-4">
                        <p className="text-amber-600 font-serif ml-[70px]">Our Menu</p>
                        <h1 className="text-white text-2xl font-bold">Our Popular Menu</h1>
                        <p className="text-white w-[400px]">Our place designed by pro architecture with psychologist to build the best place to suit you.</p>
                    </div>
                </div>
            </div>

            <div data-aos='fade-down' className="flex items-center flex-col md:flex-row">
                <div className="mt-[20px] mb-[50px]">
                    {menuItems.map((item, index) => (
                        <div key={index} className="flex text-black bg-white w-[300px] h-[100px] mt-[20px] items-center mb-[20px] ml-[40px] drop-shadow-2xl rounded-xl md:w-[500px] md:h-[80px] ">
                            <img src={item.img} className="w-[40px] h-[70px] ml-[10px] object-cover rounded-[50%] " alt={item.title} />
                            <div className="pl-[10px]">
                                <h2 className="font-sans">{item.title}</h2>
                                <p  className="font-sans">{item.des}</p>
                            </div>
                            <div className="">
                                <p className="font-sans">Price: {item.price}</p>
                                <p className="font-sans"> {item.normalPrice}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div  className="w-[300px] bg-white text-black border-bottom-1px p-[20px] text-center ml-[0px] md:ml-[300px]">
                    <p className="bg-amber-600 rounded-xl">Categories Time</p>
                    <div className="mt-[20px]">
                        <div className="flex justify-between border-b-[1px]">
                            <p>Sunday</p>
                            <p>closed</p>
                        </div>
                        <div className="flex justify-between border-b-[1px]">
                            <p>Monday</p>
                            <p>7.00am-3.00pm</p>
                        </div>
                        <div className="flex justify-between border-b-[1px]">
                            <p>Tuesday</p>
                            <p>7.00am-3.00pm</p>
                        </div>
                        <div className="flex justify-between border-b-[1px]">
                            <p>Wednesday</p>
                            <p>7.00am-3.00pm</p>
                        </div>
                        <div className="flex justify-between border-b-[1px]">
                            <p>Thursday</p>
                            <p>7.00am-3.00pm</p>
                        </div>
                        <div className="flex justify-between border-b-[1px]">
                            <p>Friday</p>
                            <p>7.00am-3.00pm</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Saturday</p>
                            <p>8.00am-2.00pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
export default Menu
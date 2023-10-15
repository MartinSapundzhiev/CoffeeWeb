import React, { useEffect, useState } from "react";
import {FaHandsPraying} from "react-icons/fa6";
import AOS from 'aos'
import './aos/dist/aos.css';

 function Feedback(params) {
    ;
        const[Input,SetInput] = useState ("");

        const onClick = () =>{
            SetInput("")
        }
     
    
     useEffect(()=>{
     AOS.init({duration:2000})
     },[])
        
    return(
        <>
        <div data-aos='fade-down' className="w-screen h-[300px] flex justify-center">
              <div className="flex flex-col w-[400px] mt-[30px] ]">
              <FaHandsPraying className="ml-[180px] " size={40}/>
                <p>This is the perfect place to find a nice and cozy spot to sip some. You will find the Java Jungle,Coffee Bean and more shops right in this website.</p>
                 <div className="mt-[30px] flex gap-4">
                      <input type="text" placeholder="emai@example.com" className="border-[1px] border-black py-2 ml-[10px] rounded " value={Input} onChange={(e) => SetInput(e.target.value)}/> <button className=" bg-amber-700 px-7"  onClick={onClick}>Subscribe</button>
                 </div>
              </div>
        </div>
        </>
    )
 }
 export default Feedback
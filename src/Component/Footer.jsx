import React, { useDeferredValue, useEffect, useState } from "react";
import AOS from 'aos'
import './aos/dist/aos.css';

function Footer(params) {

      

     useEffect(()=>{
       AOS.init({duration:2000});
     },[])
     
    return(
        <>        
                   <div data-aos='fade-down' className="bg-gray-500 w-screen h-[50px] flex justify-center items-center">
                    <p className="text-[14px]">@MartiEood</p>
                   </div>
        </>
    );
}

export default Footer;
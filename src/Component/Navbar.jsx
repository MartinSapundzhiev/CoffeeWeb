import React, { useState } from "react";
import { FaPhone, FaBarsStaggered, FaXmark } from "react-icons/fa6";

function Navbar() {
  const [Nav, SetNav] = useState(false);

  const NavToggle = () => {
    SetNav(!Nav);
  }

  return (
    <>
      <div className={`bg-amber-900 w-screen h-[50px] fixed top-0 ${Nav ? 'z-10' : 'z-50'}`}>
        <div className="flex justify-between items-center mx-[30px]">
          <h1 className="text-white text-2xl font-bold">Coffee</h1>
          <ul className={`flex gap-7 text-white hidden md:flex ${Nav ? 'hidden' : 'md:flex md:pr-[100px]'}`}>
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black duration-500">Home</li>
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black duration-500">About</li>
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black duration-500">Menu</li>
            <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black duration-500">Review</li>
          </ul>
          <div className="flex items-center gap-2 text-white z-10">
            <FaPhone className="hidden md:flex" />
            <p className="hidden md:flex">0022-0303-2030</p>
            {Nav ? <FaXmark className="md:hidden" onClick={NavToggle} /> : <FaBarsStaggered className="md:hidden" onClick={NavToggle} />}
          </div>
        </div>
        {Nav && (
          <div className="w-screen h-screen bg-amber-800 z-50 absolute top-0 left-0 flex justify-center items-center ">
              <FaXmark className="absolute right-7 top-7 text-white text-[60px]" onClick={()=>SetNav(false)}/>
            <ul className="text-white text-4xl flex flex-col gap-7 ">
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black duration-500">Home</li>
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black duration-500">About</li>
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black duration-500">Menu</li>
              <li className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black duration-500">Review</li>
            </ul>
          </div>
        )}
      </div>

      <div style={{ position: 'relative' }}>
  <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="w-screen object-cover" alt="Coffee" />

  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
    <p style={{ fontSize: '12px' }}>We really like what we do</p>
    <h1 style={{ fontSize: '2xl', fontWeight: 'bold' }}>Coffee Beans with <br />Perfect Aroma</h1>
    <button className="text-2xl bg-amber-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black duration-300" style={{ marginTop: '20px',  padding: '5px 20px', borderRadius: '20px', border: 'none' }}>Explore</button>
  </div>
</div>
    </>
  );
}

export default Navbar;

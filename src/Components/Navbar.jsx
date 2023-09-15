import React, { useState } from 'react';
import rocket from './../assets/rocket.svg';
import logo from './../assets/logo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
  const [navbar, setNavBackground] = useState(false);
  const [nav, setNav] = useState(false);


  const handleNav = () => {
    setNav(!nav);
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBackground(true)
    } else {
      setNavBackground(false)
    }
  }

  window.addEventListener('scroll', changeBackground);


  return (
    <div className={!navbar ? "fixed flex justify-between items-center h-20 w-full mx-auto md:px-20 px-10  z-10" : "fixed flex justify-between items-center h-20 w-full mx-auto md:px-20 px-10  bg-white ease-in-out duration-500 z-10"}>
      <div className="flex justify-between items-center gap-20 relative ease-in-out duration-500">
        <a href="#home"><img src={logo} alt="Logo" className="w-12" /></a>
        <ul className="hidden md:flex gap-5 text-[#000F33] text-lg font-semibold">
          <a href="#home" className="hover:text-[#12A4D9]">
            <li>Home</li>
          </a>
          <a href="#program" className="hover:text-[#12A4D9]">
            <li>Programs</li>
          </a>
          <a href="#about" className="hover:text-[#12A4D9]">
            <li>About Us</li>
          </a>
        </ul>
      </div>
      <a
        href="#contact"
        className="px-5 py-2 bg-[#12A4D9] rounded shadow justify-end items-center gap-1.5 hidden md:flex hover:bg-[#000F33] transition duration-200 ease-linear"
      >
        <img src={rocket} alt="Rocket" />
        <span className="text-white text-lg font-semibold ">Contact Us</span>
      </a>

      {/* ? Mobile view */}
      <div onClick={() => handleNav()} className="block md:hidden z-2 relative">
        {!nav ? <AiOutlineClose size={20} className="text-white" /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? 'fixed right-0 top-0 w-[60%] h-full border-r pt-12 border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-[-1] md:hidden'
            : 'fixed right-[-100%] top-0 w-[60%] h-full border-r pt-12 border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-[-1] '
        }
      >

        <ul className="flex flex-col gap-5 text-white text-lg font-semibold">
          <a href="#home" className="hover:text-[#12A4D9]">
            <li className="px-7 py-4 border-b border-gray-600">Home</li>
          </a>
          <a href="#program" className="hover:text-[#12A4D9]">
            <li className="px-7 py-4 border-b border-gray-600">Programs</li>
          </a>
          <a href="#about" className="hover:text-[#12A4D9]">
            <li className="px-7 py-4 border-b border-gray-600 ">About Us</li>
          </a>
        </ul>
        <a
          href="#"
          className="px-7 py-4 border-gray-600 bg-[#0f88b4] flex mx-5 mt-10 justify-center gap-3 hover:bg-[#287d9c]"
        >
          <img src={rocket} alt="Rocket" />
          <span className="text-white text-lg font-semibold">Contact Us</span>
        </a>
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";

const Navbar = () => {

  return (
    <>
      <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#800000]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="/"
          className="h-auto w-auto flex flex-row items-center"
        >
          <img 
            src="/logo.png" 
            height="50" 
            width="50" 
            className="mr-20"
          />
        </a>
        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#800000] bg-[#0300145e] mr-[15px] px-[10px] py-[10px] rounded-full text-white">
            <a href="/menu" className="cursor-pointer hover:-translate-y-1 transition duration-400">
              Menu
            </a>
            <a href="/about" className="cursor-pointer hover:-translate-y-1 transition duration-400">
              About
            </a>
            <a href="/contact" className="cursor-pointer hover:-translate-y-1 transition duration-400">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
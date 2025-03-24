import React from 'react'
import logoImage from "../../assets/logo.png"


// const MenuList = [
//   { path: "#about", lable: "About" },
//   { path: "#sercice", lable: "Services" },
//   { path: "#portfolio", lable: "Portfolio" },
//   { path: "#blog", lable: "Blog" },
// ];


const Navbar = () => {
  return (
    <div className="bg-[#FFD4D0]">
      <header className="relative container mx-auto">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-500 w-20 h-10 rounded-b-full"></div>
        <nav className="">
          {/* logo */}
          <div>
            <a href="/" className="text-2xl font-bold">
              <img src={logoImage} alt="" />
            </a>
          </div>
          {/* Desktop menu
          <div className="hidden md:block">
            <ul className="flex gap-8 text-lg">
              {MenuList.map((menu, index) => (
                <li key={index} className="hover:text-red-500">
                  <NavLink to={menu.path}>{menu.lable}</NavLink>
                </li>
              ))}
            </ul>
          </div> */}
          <div>
            <ul className="font-semibold text-md flex gap-6">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </ul>
          </div>

          {/* icon */}
          <div>
            <button className="bg-black py-2 px-4 text-white">
              <a href="#contact">Let’s Talk</a>
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar
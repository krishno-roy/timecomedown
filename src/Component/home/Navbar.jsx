import React from 'react'
import { NavLink } from 'react-router';
import logoImage from "../../assets/logo.png"


const MenuList = [
  { path: "/", lable: "About" },
  { path: "/", lable: "Services" },
  { path: "/", lable: "Portfolio" },
  { path: "/", lable: "Blog" },
];

const Navbar = () => {
  return (
    <header className="bg-[#FFD4D0] relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-500 w-20 h-10 rounded-b-full"></div>
      <nav>
        {/* logo */}
        <div>
          <a href="/" className="text-2xl font-bold">
            <img src={logoImage} alt="" />
          </a>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:block">
          <ul className="flex gap-8 text-lg">
            {MenuList.map((menu, index) => (
              <li key={index} className="hover:text-red-500">
                <NavLink to={menu.path}>{menu.lable}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* icon */}
        <div>
          <button className="bg-black py-2 px-4 text-white">Let’s Talk</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar
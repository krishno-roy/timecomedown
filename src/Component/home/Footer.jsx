import React from 'react'
import { Link } from 'react-router'
import LogoImage from '../../assets/logo.png'
import { FaFacebook, FaGithub, FaInstagramSquare, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black min-h-65 space-y-4">
      <div className=" container mx-auto items-center pt-24 px-12">
        <div className="flex justify-between items-center md:w-2xl mx-auto">
          <div>
            <ul className="flex gap-4 text-white text-center">
              <li>
                <Link to={"#about"}>About</Link>
              </li>
              <li>
                <Link to={"#sercice"}>Services</Link>
              </li>
            </ul>
          </div>
          <div>
            <img src={LogoImage} alt="" />
          </div>
          <div>
            <ul className="flex gap-4 text-white flex-row">
              <li>
                <Link to={"/"}>About</Link>
              </li>
              <li>
                <Link to={"/"}>Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center text-white">Follow me on social media:</p>

      <div className="justify-center flex mx-auto gap-4 md:w-4xl w-full">
        <FaFacebook className="text-white text-center" />
        <FaInstagramSquare className="text-white text-center" />
        <FaTwitter className="text-white text-center" />
        <FaGithub className="text-white text-center" />
      </div>
    </div>
  );
}

export default Footer
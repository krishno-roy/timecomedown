import React from 'react'
import { Link } from 'react-router'
import LogoImage from '../../assets/logo.png'
import { FaFacebook, FaGithub, FaInstagramSquare, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-black min-h-65 space-y-4">
      <div className="flex justify-between w-4xl mx-auto items-center pt-24">
        <div>
          <ul className="flex gap-4 text-white">
            <li>
              <Link to={"/"}>About</Link>
            </li>
            <li>
              <Link to={"/"}>Services</Link>
            </li>
          </ul>
        </div>
        <div>
          <img src={LogoImage} alt="" />
        </div>
        <div>
          <ul className="flex gap-4 text-white">
            <li>
              <Link to={"/"}>About</Link>
            </li>
            <li>
              <Link to={"/"}>Services</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-white">Follow me on social media:</p>

      <div className="justify-center flex mx-auto gap-4 w-4xl">
        <FaFacebook className="text-white text-center" />
        <FaInstagramSquare className="text-white text-center" />
        <FaTwitter className="text-white text-center" />
        <FaGithub className="text-white text-center" />
      </div>
    </div>
  );
}

export default Footer
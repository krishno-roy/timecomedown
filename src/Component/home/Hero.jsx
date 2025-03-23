import React from "react";
import HeroImage from "../../assets/heroimage.png";
import BackgroudnImg from "../../assets/heroImage.png";

const Hero = () => {
  return (
    <section className=" bg-[#FFD4D0] px-7 pt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex items-center justify-center">
          <div className="space-y-6 text-center md:text-left sm:space-x-0">
            <p>UX Designer</p>
            <h1 className="text-[48px] font-bold">
              Hi There, I’m <br />
              <span className="text-red-500">John Smith</span>
            </h1>
            <p>
              Welcome to my portfolio of captivating digital
              <br /> experiences. Explore my work and let's create something
              <br />
              extraordinary together.
            </p>
            <div className="space-x-5">
              <button className="py-3 px-6 bg-black text-white text-xl font-bold">
                <a href="/shop">Hire Me</a>
              </button>
              <button className="py-3 px-6 border border-black text-xl">
                <a href="/shop">Portfolio</a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="header" className="bg-cover mx-auto md:h-[500px] mt-4" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react'

const About = () => {
  return (
    <div className=" bg-black" id="about">
      <div className="container mx-auto py-20 relative">
        <div className="text-center md:w-2xl mx-auto pt-10 text-white space-y-2 px-3">
          <h2 className="font-bold text-4xl">About Us</h2>
          <p>
            I'm John Smith, a UI/UX designer dedicated to crafting intuitive and
            visually stunning digital experiences. With a passion for
            user-centric design, I transform ideas into functional and beautiful
            interfaces. Let's collaborate and shape the future of design
            together.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:w-3xl text-white mx-auto mt-10 flex-row space-y-7 ">
          <div className="text-center">
            <h2 className="text-[64px] font-bold text-[#FFD4D0]">502</h2>
            <p>Projects Done</p>
          </div>
          <div className="text-center">
            <h2 className="text-[64px] font-bold text-[#FFD4D0]">10+</h2>
            <p>Years of Experience</p>
          </div>
          <div className="text-center">
            <h2 className="text-[64px] font-bold text-[#FFD4D0]">273</h2>
            <p>Clients</p>
          </div>
        </div>
        <div className="absolute -buttom-0 left-1/2 transform -translate-x-4 bg-red-500 w-40 h-20 rounded-b-full rotate-180"></div>
      </div>
    </div>
  );
}

export default About
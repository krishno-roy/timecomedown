import React from "react";

const Skill = () => {
  return (
    <div>
      <div className="py-20" id="about">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="md:w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-center mb-12">
              Core Design Skills
            </h2>
            <p className="text-lg mb-8">
              I excel in essential design skills, creating visually stunning and
              functional digital experiences. From UI design to UX research, my
              passion is to craft effective and memorable digital solutions.
            </p>
          </div>
          <div className="flex flex-row ">
            <div className="w-1/2">
              <div className="space-y-4">
                <div>
                  <p>Interaction Design</p>
                  <div className="flex items-center">
                    <div className="grow bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-black h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                      ></div>
                    </div>
                    <label htmlFor="htmlandcss" className="w-2/12 px-4">
                      98%
                    </label>
                  </div>
                </div>
                <div>
                  <p>Usability Testing</p>
                  <div className="flex items-center">
                    <div className="grow bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-black h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-8/12"
                      ></div>
                    </div>
                    <label htmlFor="htmlandcss" className="w-2/12 px-4">
                      90%
                    </label>
                  </div>
                </div>
                <div>
                  <p>User Research</p>
                  <div className="flex items-center">
                    <div className="grow bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-black h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-7/12"
                      ></div>
                    </div>
                    <label htmlFor="htmlandcss" className="w-2/12 px-4">
                      70%
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <div className="space-y-4">
                <div>
                  <p>Figma</p>
                  <div className="flex items-center">
                    <div className="grow bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-black h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-8/12"
                      ></div>
                    </div>
                    <label htmlFor="htmlandcss" className="w-2/12 px-4">
                      80%
                    </label>
                  </div>
                </div>
                <div>
                  <p>Prototyping</p>
                  <div className="flex items-center">
                    <div className="grow bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-black h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-6/12"
                      ></div>
                    </div>
                    <label htmlFor="htmlandcss" className="w-2/12 px-4">
                      60%
                    </label>
                  </div>
                </div>
                <div>
                  <p>Information Architecture</p>
                  <div className="flex items-center">
                    <div className="grow bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-black h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-7/12"
                      ></div>
                    </div>
                    <label htmlFor="htmlandcss" className="w-2/12 px-4">
                      70%
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

import React from "react";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";
import { FaArrowRight } from "react-icons/fa";

const Portfolio = () => {
  const PortfolioList = [
    {
      id: 1,
      label: "Educational Platform",
      Image: Portfolio1,
      Paragraph: "Web Design / Usability Testing",
      svg: <FaArrowRight className="text-white" />,
    },
    {
      id: 2,
      label: "Travel App Design",
      Image: Portfolio2,
      Paragraph: "UX Research / App Design ",
      svg: <FaArrowRight className="text-white" />,
    },
    {
      id: 3,
      label: "Personal Page",
      Image: Portfolio3,
      Paragraph: "Web Design",
      svg: <FaArrowRight className="text-white" />,
    },
    {
      id: 4,
      label: "Furniture Mobile App",
      Image: Portfolio4,
      Paragraph: "App Design",
      svg: <FaArrowRight className="text-white" />,
    },
    {
      id: 5,
      label: "Coffee House Landing Page",
      Image: Portfolio5,
      Paragraph: "UX Research / Web Design",
      svg: <FaArrowRight className="text-white" />,
    },
    {
      id: 6,
      label: "Home Services Page",
      Image: Portfolio6,
      Paragraph: "Web Design / Marketing",
      svg: <FaArrowRight className="text-white" />,
    },
  ];

  return (
    <div>
      <div className="bg-[#FFD4D0] py-14" id="portfolio">
        <div className="text-center md:w-2xl mx-auto pb-20 space-y-2 px-3">
          <h2 className="font-bold text-4xl">My Portfolio</h2>
          <p>
            Explore my design services, from user interface and experience to
            prototyping and testing. Let's craft exceptional digital experiences
            together.
          </p>
        </div>
      </div>
      <div className="container mx-auto p-6 -mt-30">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
          {PortfolioList.map((portfolio) => (
            <div
              key={portfolio.id}
              className="bg-white shadow-lg rounded-lg p-4 space-y-2"
            >
              <img
                src={portfolio.Image}
                alt={portfolio.label}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold">{portfolio.label}</h3>
              <div className="flex items-center justify-between">
                <p className="text-gray-600">{portfolio.Paragraph}</p>
                <div className="p-4 bg-red-600 text-white rounded-full -rotate-45">
                  {portfolio.svg}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

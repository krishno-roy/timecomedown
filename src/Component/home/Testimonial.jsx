import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: "Sara Jones’s designs are both visually captivating and highly effective. She transformed our website, enhancing user engagement and conversions. Highly recommended!",
    name: "John Smith",
    position: "CEO of XYZ Company",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Emily's creative approach brought our brand to life. Her attention to detail and ability to understand our vision was truly outstanding.",
    name: "Emily Johnson",
    position: "Marketing Director at ABC Corp",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "David's UI/UX designs have significantly improved user experience on our platform. His work speaks for itself!",
    name: "David Brown",
    position: "Product Manager at TechWorld",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect (changes every 4 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-red-100 py-16 px-6 text-center relative overflow-hidden">
      {/* Half-Shown Top Decorative Circle */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-red-500 w-20 h-10 rounded-b-full"></div>

      {/* Testimonial Content */}
      <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
      <p className="max-w-2xl mx-auto text-gray-700 mb-6 transition-all duration-500">
        {testimonials[currentIndex].text}
      </p>

      {/* Profile Section */}
      <div className="flex items-center justify-center gap-3">
        <img
          src={testimonials[currentIndex].image}
          alt={testimonials[currentIndex].name}
          className="w-10 h-10 rounded-full border-2 border-white shadow-md img2"
        />
        <p className="text-md font-semibold">
          {testimonials[currentIndex].name}{" "}
          <span className="text-gray-600">
            / {testimonials[currentIndex].position}
          </span>
        </p>
      </div>

      {/* Navigation Arrows */}
      <div
        onClick={prevTestimonial}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
      >
        <FaChevronLeft size={24} />
      </div>
      <div
        onClick={nextTestimonial}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-600"
      >
        <FaChevronRight size={24} />
      </div>
    </div>
  );
};

export default Testimonial;

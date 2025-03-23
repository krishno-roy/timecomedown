import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagramSquare, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("K2K", "template_tn37see", e.target, "81j2LH87ysHUxp4EJ")
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ firstName: "", email: "", phone: "", message: "" });
        },
        () => {
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="bg-[#FFD4D0]">
      <div className="mx-auto p-6 shadow-lg rounded-xl flex flex-col md:flex-row gap-6 container py-10">
        <div className="flex items-center md:w-1/2">
          <div className="space-y-4  ">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="text-gray-600">
              Have a question or a project in mind? I'd love to hear from you.
              Let's chat and make something amazing together.
            </p>
            <p className="text-gray-700 flex gap-2 items-center">
              {" "}
              <PiPhoneCallFill />
              +1205 5872 321
            </p>
            <p className="text-gray-700 flex gap-2 items-center ">
              {" "}
              <MdOutlineEmail />
              contact@fakjanedesign.com
            </p>
            <p className="text-gray-700 flex gap-2 items-center">
              <FaMapMarkerAlt />
              1234 Design Street, Creativeville, Webland, Imaginary State, 98765
            </p>
            <div className="flex gap-4 items-center">
              <div className="p-2 bg-white rounded-full">
                <FaFacebook />
              </div>
              <div className="p-2 bg-white rounded-full">
                <FaInstagramSquare />
              </div>
              <div className="p-2 bg-white rounded-full">
                <FaTwitter />
              </div>
              <div className="p-2 bg-white rounded-full">
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full p-3  bg-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3  bg-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3  bg-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            ></textarea>
            <button
              type="submit"
              className=" bg-black text-white p-3  hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

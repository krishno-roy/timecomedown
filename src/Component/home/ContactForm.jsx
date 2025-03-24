import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagramSquare, FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";

const ContactForm = () => {

const[name, setName]= useState("")
const[email, setEmail]= useState("")
const[phone, setPhone]= useState("")
const [massage, setMassage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="bg-[#FFD4D0]" id="contact">
      <div className="mx-auto p-6 rounded-xl flex flex-col md:flex-row gap-6 container py-10">
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
              <a href="tel:+8801738612417">+8801738612417</a>
            </p>
            <p className="text-gray-700 flex gap-2 items-center ">
              {" "}
              <MdOutlineEmail />
              <a href="mailto:krishnorooy@gmail.com">krishnorooy@gmail.com</a>
            </p>
            <p className="text-gray-700 flex gap-2 items-center">
              <FaMapMarkerAlt />
              1234 Design Street, Creativeville, Webland, Imaginary State, 98765
            </p>
            <div className="flex gap-4 items-center">
              <div className="p-2 bg-white rounded-full  hover:bg-red-500 hover:text-white">
                <FaFacebook />
              </div>
              <div className="p-2 bg-white rounded-full  hover:bg-red-500 hover:text-white">
                <FaInstagramSquare />
              </div>
              <div className="p-2 bg-white rounded-full  hover:bg-red-500 hover:text-white">
                <FaTwitter />
              </div>
              <div className="p-2 bg-white rounded-full  hover:bg-red-500 hover:text-white">
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3  bg-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3  bg-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full p-3  bg-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your message"
              value={massage}
              onChange={(e) => setMassage(e.target.value)}
              required
              className="w-full p-3 border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
            ></textarea>
            <button
              type="submit"
              className=" bg-black text-white p-3  hover:bg-red-500 transition"
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

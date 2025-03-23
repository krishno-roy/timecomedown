import React from 'react'
import Hero from './Hero'
import Service from "./Serviec";
import About from './About'
import Portfolio from './Portfolio';
import Skills from './Skills';
import Testimonial from './Testimonial';
import BlogSection from './Blog';
import ContactForm from './ContactForm';
import Footer from './Footer';


const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Service/>
      <Portfolio/>
      <Skills/>
      <Testimonial/>
      <BlogSection/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Home
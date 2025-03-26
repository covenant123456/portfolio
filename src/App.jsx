import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import About from './components/About';
import Project from './components/Project';
import Testimonal from './components/Testimonial';
import Contact from './components/Contact';

function App() {
  

  return (
    <div className='overflow-x-hidden overflow-hidden overflow-y-hidden scrollbar-none'>
      <Navbar />
      <HeroSection />
      <Skills />
      <Experiences />
      <About />
      <Project />
      <Testimonal />
      <Contact/>
    </div>
  )
}

export default App

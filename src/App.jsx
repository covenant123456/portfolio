import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import About from './components/About';

function App() {
  

  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
      <Experiences />
      <About />
    </>
  )
}

export default App

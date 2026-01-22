import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import NavMob from './components/Navmob';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <NavMob />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react'
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Program from './Components/Program';
import Package from './Components/Package';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Program />
      <Package />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

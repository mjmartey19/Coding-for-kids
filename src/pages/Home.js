import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Program from '../Components/Program'
import Package from '../Components/Package'
import FooterSection from '../Components/Footer'
import ContactSection from '../Components/Contact'
import AboutSection from '../Components/About'

export default function Home() {
 
  return (
    <div>
      <Navbar />
      <Hero />
      <Program />
      <Package />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

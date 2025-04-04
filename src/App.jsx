import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Features from './Components/Features'
import Workflow from './Components/Workflow'
import Pricing from './Components/Pricing'
import Testimonials from './Components/Testimonials'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
       <Navbar/>
       <div className='max-w-7xl mx-auto pt-20 px-7'>
          <HeroSection/> 
          <Features/>
          <Workflow/>
          <Pricing/>
          <Testimonials/>
          <Footer/>
       </div>
    </>
  )
}

export default App
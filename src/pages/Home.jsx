


import React from 'react'
import HeroSection from '../components/HeroSection'

import IronServices from '../components/IronServices'

import AboutIntroSection from '../components/AboutIntro'
import MissionBannerSection from '../components/MissionBannerSection'
// import WhyChoosePrimeShield from '../components/WhyChoosePrimeShield'
import PrimeShieldTestimonials from '../components/PrimeShieldTestimonials'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutIntroSection/>
      <MissionBannerSection/>
       <IronServices/>
   
       <PrimeShieldTestimonials/>
   
     
    </div>
  )
}

export default Home
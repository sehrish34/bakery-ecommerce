import React from 'react'
import BestSellers from '../components/BestSellers/bestSellers';
import BakeryItemCard from '../components/BakeryItemCard/Cards'
import HeroSection from '../components/HeroSection'
import Contact from './Contact';
import About from './about';
import Product from './Product';

import InfoSection from '../components/InfoSection';

function HomePage() {

  return (
    <div>

      <HeroSection />
      <BestSellers />
      <About />
      <Product />
      <InfoSection />
      <Contact />
      
    </div>
  )
}

export default HomePage
import React from 'react';
import HeroSection from '../HeroSection';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';
import Footer from './Footer';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      <Footer />
    </>
  );
}

export default Home;
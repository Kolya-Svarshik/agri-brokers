import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import OurServices from './components/OurServices/OurServices';
import Offers from './components/Offers/Offers';
import Partnership from './components/Partnership/Partnership';
import AboutUs from './components/AboutUs/AboutUs';
import Quote from './components/Quote/Quote';
import Map from './components/Map/Map';
import ArrowScroll from './components/ArrowScroll/ArrowScroll';
import Footer from './components/Footer/Footer';

import { useState } from 'react';
import { useTargetScroll } from './hooks/useTargetScroll';

export const App = () => {
  const [isActive, setIsActive] = useState(false);



  return (
    // <div className={isActive && 'active'}>
    <>
      <Header isActive={isActive} setIsActive={setIsActive} />
      <Hero />
      <OurServices />
      <Offers />
      <Partnership />
      <AboutUs />
      <Quote />
      <Map />
      <ArrowScroll />
      <Footer />
    </>
    // </div>
  );
};

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import OurServices from './components/OurServices/OurServices';
import AboutUs from './components/AboutUs/AboutUs';
import Offers from './components/Offers/Offers';
import Partnership from './components/Partnership/Partnership';
import Quote from './components/Quote/Quote';
import Map from './components/Map/Map';
import ArrowScroll from './components/ArrowScroll/ArrowScroll';
import Footer from './components/Footer/Footer';

import { useState } from 'react';

export const App = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    // <div className={isActive && 'active'}>
    <>
      <Header isActive={isActive} setIsActive={setIsActive} />
      <Hero />
      <OurServices />
      <AboutUs />
      <Offers />
      <Partnership />
      <Quote />
      <Map />
      <ArrowScroll />
      <Footer />
    </>
    // </div>
  );
};

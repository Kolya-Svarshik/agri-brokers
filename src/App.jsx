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
import Modal from './components/Modal/Modal';

import { useState } from 'react';
import { useIsActive } from './hooks/useIsActive';

export const App = () => {
  const [isActive, setIsActive] = useState(false);
  const { isActiveModal, onModal } = useIsActive();

  return (
    <div className={isActive && 'active'}>
      <Header isActive={isActive} setIsActive={setIsActive} />
      <Hero />
      <OurServices />
      <AboutUs />
      <Offers />
      <Partnership onModal={onModal} />
      <Quote />
      <Map />
      <ArrowScroll />
      <Footer onModal={onModal} />
      {isActiveModal && <Modal onModal={onModal} />}
    </div>
  );
};

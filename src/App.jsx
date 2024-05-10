import { Suspense, lazy } from 'react';

import { HelmetComponent } from './components/HelmetComponent/HelmetComponent';

import { ConsentCookie } from './components/ConsentCookie/ConsentCookie';
import { Modal } from './components/Modal/Modal';
import { Preloaders } from './components/Preloaders/Preloaders';
import { useIsActive } from './hooks/useIsActive';

const Header = lazy(() => import('./components/Header/Header'));
const Hero = lazy(() => import('./components/Hero/Hero'));
const OurServices = lazy(() => import('./components/OurServices/OurServices'));
const Offers = lazy(() => import('./components/Offers/Offers'));
const Partnership = lazy(() => import('./components/Partnership/Partnership'));
const AboutUs = lazy(() => import('./components/AboutUs/AboutUs'));
const Quote = lazy(() => import('./components/Quote/Quote'));
const Map = lazy(() => import('./components/Map/Map'));
const ArrowScroll = lazy(() => import('./components/ArrowScroll/ArrowScroll'));
const Footer = lazy(() => import('./components/Footer/Footer'));

export const App = () => {
  const { onModal, isActiveModal } = useIsActive();

  return (
    <Suspense fallback={<Preloaders />}>
      <HelmetComponent />
      <Header />
      <Hero />
      <OurServices />
      <Offers />
      <Partnership />
      <AboutUs />
      <Quote />
      <Map />
      <ArrowScroll />
      <Footer onModal={onModal} isActiveModal={isActiveModal} />
      <Modal onModal={onModal} isActiveModal={isActiveModal} />
      <ConsentCookie onModal={onModal} isActiveModal={isActiveModal} />
    </Suspense>
  );
};

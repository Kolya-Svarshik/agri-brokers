import { Suspense, useState, lazy } from 'react';


const Header = lazy(() =>
  import('./components/Header/Header'),
);
const Hero = lazy(() =>
  import('./components/Hero/Hero'),
);
const OurServices = lazy(() =>
  import('./components/OurServices/OurServices'),
);
const Offers = lazy(() =>
  import('./components/Offers/Offers'),
);
const Partnership = lazy(() =>
  import('./components/Partnership/Partnership'),
);
const AboutUs = lazy(() =>
  import('./components/AboutUs/AboutUs'),
);
const Quote = lazy(() =>
  import('./components/Quote/Quote'),
);
const Map = lazy(() =>
  import('./components/Map/Map'),
);
const ArrowScroll = lazy(() =>
  import('./components/ArrowScroll/ArrowScroll'),
);
const Footer = lazy(() =>
  import('./components/Footer/Footer'),
);



export const App = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Suspense fallback='...loading'>
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
    </Suspense>
  );
};

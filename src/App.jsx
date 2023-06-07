import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import OurServices from './components/OurServices/OurServices';
import AboutUs from './components/AboutUs/AboutUs';
import Offers from './components/Offers/Offers';
import Partnership from './components/Partnership/Partnership';
import Quote from './components/Quote/Quote';
import Map from './components/Map/Map';
import Modal from './components/Modal/Modal';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <OurServices />
      <AboutUs />
      <Offers />
      <Partnership />
      <Quote />
      <Map />
      {/* <Modal /> */}
      <Footer />
    </>
  );
}

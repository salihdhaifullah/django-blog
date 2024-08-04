import Header from './components/Header';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Apartments from './components/Apartments';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Slider from './utils/Slider';
import { useEffect, useRef } from 'react';

const App = () => {
  const render = useRef(false)

  useEffect(() => {
    if (!render.current) {
      document.dispatchEvent(new Event("dom-mounted"))
      render.current = true;
    }
  }, [])

  return (
    <>
      <Slider />
      <Header />
      <Hero />

      <main className='flex flex-col w-full md:gap-12 gap-6 lg:px-12 md:px-8 sm:px-6 px-4'>
        <About />
        <Facilities />
        <Apartments />
        <Gallery />
        <Reviews />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default App;
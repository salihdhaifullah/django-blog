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

const App = () => {
  return (
    <div className='flex flex-col w-full'>
      <Slider />
      <Header />
      <Hero />
      <About />
      <Facilities />
      <Apartments />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
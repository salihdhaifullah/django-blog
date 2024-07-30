import Header from './components/Header';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Apartments from './components/Apartments';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Features from './components/Features';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Apartments />
      <Facilities />
      <Features />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
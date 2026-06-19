import Header from './components/Header';
import Hero from './components/Hero';
import ProductLines from './components/ProductLines';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductLines />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

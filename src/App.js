import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Reservation />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

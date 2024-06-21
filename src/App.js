import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}

export default App;

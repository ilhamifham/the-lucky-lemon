import Hero from "../components/hero/Hero.jsx";
import Menu from "../components/menu/Menu.jsx";
import About from "../components/about/About.jsx";
import Testimonial from "../components/testimonial/Testimonial.jsx";

function HomePage() {
    return (
        <>
            <Hero />
            <Menu />
            <About />
            <Testimonial />
        </>
    )
}

export default HomePage;
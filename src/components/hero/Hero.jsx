import "./Hero.css";
import { Link } from "react-router";
import PictureHero from "./PictureHero.jsx";

function Hero() {
    return (
        <section className="section__hero">
            <div>
                <div>
                    <h1>The Little Lemon</h1>
                    <div>Colombo</div>
                    <p>We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="reservation" className="button__ui">Reserve a Table</Link>
                </div>
                <PictureHero />
            </div>
        </section>
    );
}

export default Hero;

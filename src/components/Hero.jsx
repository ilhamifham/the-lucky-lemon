import './Hero.css';

import heroImage from '../assets/lemonDessert.jpg';

function Hero() {
    return (
        <section id="home" className="main_hero">
            <div className="hero">
                <div className="hero_info">
                    <h1 className="hero_heading">Little Lemon Restaurant</h1>
                    <p className="hero_tagline">Where culinary excellence meets a warm and inviting atmosphere and Nestled in the heart of the city. Perfect escape to experience the vibrant flavors of Mediterranean cuisine</p>
                    <a className="link-button" href="#reservation">Reservation</a>
                </div>
                <div className="hero_image">
                    <img src={heroImage} alt="lemon dessert" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
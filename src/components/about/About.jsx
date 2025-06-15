import "./About.css";
import PictureAbout from "./PictureAbout.jsx";

function About() {
    return (
        <section className="section__about">
            <div>
                <div>
                    <h2>About Us</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. Our menu is inspired by the rich culinary heritage of the Mediterranean region, and we use only the freshest ingredients to create dishes that are both healthy and delicious. Come and experience the taste of the Mediterranean at Little Lemon.</p>
                </div>
                <div>
                    <PictureAbout />
                </div>
            </div>
        </section>
    )
}

export default About;
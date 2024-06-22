import './About.css';

import chef from '../assets/5.jpeg';

function About() {
    return (
        <section id="about" className="main_about">
            <div className="about">
                <h2>About</h2>
                <div className="about_info">
                    <div>
                        <h3>-- Mario and Adrian --</h3>
                        <img src={chef} alt="Mario and Adrian" />
                    </div>
                    <p>"Welcome to Little Lemon, where culinary delight meets a warm and inviting atmosphere. Located in the heart of Colombo, Little Lemon is a family-owned restaurant dedicated to providing an unforgettable dining experience. Our menu features a diverse selection of dishes inspired by Mediterranean cuisine, all crafted from the freshest ingredients sourced locally and sustainably."</p>
                </div>
            </div>
        </section>
    );
}

export default About;
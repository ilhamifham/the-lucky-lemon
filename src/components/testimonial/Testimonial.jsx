import "./Testimonial.css";
import CustomerItem from "./CustomerItem.jsx";
import testimonialItems from "/src/data/testimonialItems.js";

function Testimonial() {
    return (
        <section className="section__testimonial">
            <div>
                <h2>Testimonials</h2>
                <ul>
                    {testimonialItems.map((item, index) => {
                        return (
                            <CustomerItem key={index} item={item} />
                        )
                    })}
                </ul>
            </div>
        </section>
    );
}

export default Testimonial;
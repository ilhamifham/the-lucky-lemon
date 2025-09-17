import "./Testimonial.css";
import CustomerItem from "./CustomerItem.jsx";
import testimonialItems from "../../data/testimonialItems.js";
import Chevron from "../../assets/chevron.svg";
import { useScroll } from "../../hooks/useScroll.js";

function Testimonial() {
  const [scrollRef, scrollRight, scrollLeft] = useScroll();

  return (
    <section className="section__testimonial">
      <div>
        <h2>Testimonials</h2>
        <ul ref={scrollRef} className="scroll-container">
          {testimonialItems.map((item, index) => {
            return <CustomerItem key={index} item={item} />;
          })}
        </ul>
        <div className="scroll-buttons">
          <button onClick={scrollLeft}>
            <img src={Chevron} alt="" />
          </button>
          <button onClick={scrollRight}>
            <img src={Chevron} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

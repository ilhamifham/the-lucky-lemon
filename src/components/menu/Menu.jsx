import "./Menu.css";
import ListItem from "./ListItem.jsx";
import menuItems from "../../data/menuItems.js";
import Chevron from "../../assets/chevron.svg";
import { useScroll } from "../../hooks/useScroll.js";
import { useCartContext } from "../../contexts/cartContext/useCartContext.js";

function Menu() {
  const [scrollRef, scrollRight, scrollLeft] = useScroll();
  const { cartItems, addToCart, removeFromCart } = useCartContext();

  return (
    <section className="section__menu">
      <div>
        <h2>Our Main Meals</h2>
        <ul ref={scrollRef} className="scroll-container">
          {menuItems.map((menuItem, index) => {
            const currentMenuItem = cartItems.find((cartItem) => cartItem.title === menuItem.title) || null;
            return <ListItem key={index} item={menuItem} currentMenuItem={currentMenuItem} addToCart={addToCart} removeFromCart={removeFromCart} />;
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

export default Menu;

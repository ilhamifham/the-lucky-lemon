import "./Menu.css";
import ListItem from "./ListItem.jsx";
import menuItems from "../../data/menuItems.js";
import Chevron from "../../assets/chevron.svg";
import { useScroll } from "../../hooks/useScroll.js";
import { useCartContext } from "../../contexts/cartContext/useCartContext.js";

function Menu() {
  const [scrollRef, scrollRight, scrollLeft] = useScroll();
  const { addToCart, removeFromCart, getCartItemQuantity } = useCartContext();

  return (
    <section className="section__menu">
      <div>
        <h2>Our Main Meals</h2>
        <ul ref={scrollRef} className="scroll-container">
          {menuItems.map((menuItem) => {
            const menuItemQuantity = getCartItemQuantity(menuItem);
            return <ListItem key={menuItem.id} item={menuItem} menuItemQuantity={menuItemQuantity} addToCart={addToCart} removeFromCart={removeFromCart} />;
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

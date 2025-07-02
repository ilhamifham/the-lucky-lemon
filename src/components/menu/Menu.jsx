import "./Menu.css";
import ListItem from "./ListItem.jsx";
import menuItems from "/src/data/menuItems.js";
import Chevron from "/src/assets/chevron.svg";
import { useScroll } from "/src/hooks/useScroll.js";

function Menu() {
    const [scrollRef, scrollRight, scrollLeft] = useScroll();

    return (
        <section className="section__menu">
            <div>
                <h2>Our Main Meals</h2>
                <ul ref={scrollRef} className="scroll-container">
                    {menuItems.map((menuItem, index) => {
                        return <ListItem key={index} item={menuItem} />
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
    )
}

export default Menu;
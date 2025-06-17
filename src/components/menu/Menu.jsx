import "./Menu.css";
import ListItem from "./ListItem.jsx";
import menuItems from "/src/data/menuItems.js";

function Menu() {
    return (
        <section className="section__menu">
            <div>
                <h2>Our Main Meals</h2>
                <ul>
                    {menuItems.map((menuItem, index) => {
                        return <ListItem key={index} item={menuItem} />
                    })}
                </ul>
            </div>
        </section>
    )
}

export default Menu;
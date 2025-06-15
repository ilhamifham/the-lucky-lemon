import "./ListItem.css";
import ButtonAddToCart from "./ButtonAddToCart.jsx";

function ListItem({ item }) {
    return (
        <li>
            <picture>
                <source srcSet={item.webp} type="image/webp" />
                <img src={item.png} alt={item.title} width={274} height={147} />
            </picture>
            <div>
                <div>
                    <h3>{item.title}</h3>
                    <div>$ {item.price.toFixed(2)}</div>
                </div>
                <p>{item.description}</p>
                <ButtonAddToCart item={item} />
            </div>
        </li>
    );
}

export default ListItem;

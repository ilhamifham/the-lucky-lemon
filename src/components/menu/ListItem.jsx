import React from "react";
import "./ListItem.css";
import ButtonAddToCart from "./ButtonAddToCart.jsx";

const ListItem = React.memo(({ item, currentMenuItem, addToCart, removeFromCart }) => {
  return (
    <li>
      <div className="card__ui">
        <picture>
          <source srcSet={item.webp} type="image/webp" />
          <img src={item.png} alt={item.title} width={274} height={147} />
        </picture>
        <div className="info">
          <div>
            <h3>{item.title}</h3>
            <div>RS. {item.price.toLocaleString()}</div>
          </div>
          <p>{item.description}</p>
          <ButtonAddToCart item={item} currentMenuItem={currentMenuItem} addToCart={addToCart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </li>
  );
});

export default ListItem;

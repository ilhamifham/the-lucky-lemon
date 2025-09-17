import React from "react";
import "./CartItem.css";
import Trash from "../../assets/trash.svg";
import Chevron from "../ui/Chevron.jsx";

const CartItem = React.memo(({ item, changeQuantity, deleteCartItem }) => {
  function handleQuantity(event) {
    changeQuantity(item, event.target.value);
  }

  function handleDelete() {
    deleteCartItem(item);
  }

  return (
    <li className="card__ui">
      <picture>
        <source srcSet={item.webp} type="image/webp" />
        <img src={item.png} alt={item.title} width={274} height={147} />
      </picture>
      <div>
        <h3>{item.title}</h3>
        <div>RS. {(item.price * item.quantity).toLocaleString()}</div>
        <div>
          <div>QTY:</div>
          <div className="select-group">
            <select name="quantity" value={item.quantity} onChange={handleQuantity}>
              {[...Array(10)].map((_, index) => {
                const number = index + 1;
                return (
                  <option key={number} value={number}>
                    {number}
                  </option>
                );
              })}
            </select>
            <Chevron />
          </div>
          <button onClick={handleDelete}>
            <img src={Trash} alt="delete item" width={40} height={40} />
          </button>
        </div>
      </div>
    </li>
  );
});

export default CartItem;

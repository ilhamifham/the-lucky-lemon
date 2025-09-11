import React from "react";
import "./ButtonAddToCart.css";
import { Link } from "react-router";
import Add from "../../assets/add.svg";
import Minus from "../../assets/minus.svg";
import Trash from "../../assets/trash.svg";

const ButtonAddToCart = React.memo(({ item, currentMenuItem, addToCart, removeFromCart }) => {
  return (
    <>
      {currentMenuItem ? (
        <div>
          <div>
            <button onClick={() => removeFromCart(item)}>
              {currentMenuItem.quantity === 1 ? <img src={Trash} alt="delete item" width={40} height={40} /> : <img src={Minus} alt="decrease item" width={40} height={40} />}
            </button>
            <div>{currentMenuItem.quantity}</div>
            <button onClick={() => addToCart(item)} disabled={currentMenuItem.quantity === 10}>
              <img src={Add} alt="increase item" />
            </button>
          </div>
          <Link to="/cart" className="button__ui">
            View Cart
          </Link>
        </div>
      ) : (
        <button className="button__ui" onClick={() => addToCart(item)}>
          Add to Cart
        </button>
      )}
    </>
  );
});

export default ButtonAddToCart;

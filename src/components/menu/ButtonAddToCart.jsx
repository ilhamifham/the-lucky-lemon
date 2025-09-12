import React from "react";
import "./ButtonAddToCart.css";
import { Link } from "react-router";
import Add from "../../assets/add.svg";
import Minus from "../../assets/minus.svg";
import Trash from "../../assets/trash.svg";

const ButtonAddToCart = React.memo(({ item, currentMenuItem, addToCart, removeFromCart }) => {
  function handleAddToCart() {
    addToCart(item);
  }

  function handleRemoveCart() {
    removeFromCart(item);
  }

  return (
    <>
      {currentMenuItem ? (
        <div>
          <div>
            <button onClick={handleRemoveCart}>
              {currentMenuItem.quantity === 1 ? <img src={Trash} alt="delete item" width={40} height={40} /> : <img src={Minus} alt="decrease item" width={40} height={40} />}
            </button>
            <div>{currentMenuItem.quantity}</div>
            <button onClick={handleAddToCart} disabled={currentMenuItem.quantity === 10}>
              <img src={Add} alt="increase item" />
            </button>
          </div>
          <Link to="/cart" className="button__ui">
            View Cart
          </Link>
        </div>
      ) : (
        <button className="button__ui" onClick={handleAddToCart}>
          Add to Cart
        </button>
      )}
    </>
  );
});

export default ButtonAddToCart;

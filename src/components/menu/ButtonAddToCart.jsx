import { memo } from "react";
import "./ButtonAddToCart.css";
import { Link } from "react-router";
import Add from "../../assets/add.svg";
import Minus from "../../assets/minus.svg";
import Trash from "../../assets/trash.svg";

const ButtonAddToCart = memo(({ item, menuItemQuantity, addToCart, removeFromCart }) => {
  function handleAddToCart() {
    addToCart(item);
  }

  function handleRemoveCart() {
    removeFromCart(item);
  }

  return (
    <>
      {menuItemQuantity !== 0 ? (
        <div>
          <div>
            <button onClick={handleRemoveCart}>
              {menuItemQuantity === 1 ? <img src={Trash} alt="delete item" width={40} height={40} /> : <img src={Minus} alt="decrease item" width={40} height={40} />}
            </button>
            <div>{menuItemQuantity}</div>
            <button onClick={handleAddToCart} disabled={menuItemQuantity === 10}>
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

import "./LinkCart.css";
import { Link } from "react-router";
import { useCartContext } from "/src/contexts/useCartContext.jsx";
import Cart from "/src/assets/cart.svg";

function LinkCart() {
  const { cartItemsCount } = useCartContext();

  return (
    <Link to="cart" className="link__cart">
      <img src={Cart} alt="cart" width={40} height={40} />
      {cartItemsCount > 0 ? <span>{cartItemsCount}</span> : null}
    </Link>
  );
}

export default LinkCart;

import "./EmptyCart.css";
import Cart from "/src/assets/empty-cart.svg";

function EmptyCart() {
    return (
        <div className="cart__empty">
            <img src={Cart} alt="" width={128} height={128} />
            <div>Your cart is currently empty!</div>
            <p>You haven't added meals to your cart yet.</p>
        </div>
    )
}

export default EmptyCart;
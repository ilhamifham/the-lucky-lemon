import "./Cart.css";
import EmptyCart from "./EmptyCart.jsx";
import { useCartContext } from "/src/contexts/useCartContext.js";
import CartItem from "./CartItem.jsx";

function Cart() {
    const { cartItems, cartItemsPrice, cartItemsCount } = useCartContext();
    const textCenterStyle = {
        textAlign: "center",
    }

    return (
        <>
            <h2 style={cartItems.length === 0 ? textCenterStyle : null}>Cart</h2>
            {cartItems.length !== 0 ? (
                <div>
                    <ul>
                        {cartItems.map((item, index) => {
                            return <CartItem key={index} item={item} />;
                        })}
                    </ul>
                    <div className="cart__total">
                        <div>
                            <div>{cartItemsCount} Items:</div>
                            <div>RS. {cartItemsPrice.toLocaleString()}</div>
                        </div>
                        <div>
                            <div>Total:</div>
                            <div>Rs. {cartItemsPrice.toLocaleString()}</div>
                        </div>
                        <button className="button__ui">Go to Checkout</button>
                    </div>
                </div>
            ) : (
                <EmptyCart />
            )}
        </>
    );
}

export default Cart;
